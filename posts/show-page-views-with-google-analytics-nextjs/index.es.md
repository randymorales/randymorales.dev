---
title: 'Mostrar vistas por página en Next.js con Google Analytics'
description: 'Configurar Google Analytics para el conteo de visitas'
tags: google-analytics,nextjs
date: '2021-08-15'
image: '/images/posts/nextjs-googleanalytics-cover.png'
---

## Conteo de visitas con Google Analytics

### Configuración de la cuenta de Google Analytics

Antes de conectarnos a las API de Google, necesitamos obtener acceso, para ello realizaremos los siguientes pasos:

Vaya a [Google Developer Console](https://console.developers.google.com/) y cree un nuevo proyecto.

![Crear Nuevo Proyecto](/images/posts/create-new-project.png)

Vaya a la sección Credenciales (use la barra de búsqueda y escriba "credenciales"), seleccione **Crear Credenciales** y elija **Cuenta de Servicio**. Vaya a los detalles de la cuenta de servicio y expanda la sección **Mostrar delegación en todo el dominio** y marque la opción **Habilitar la delegación en todo el dominio de G Suite**. Luego seleccione la pestaña **Claves** (arriba en esa página), haga clic en **Agregar Clave** y luego en **Crear Nueva Clave**, marque JSON y haga clic en **Crear**. Guarde el archivo JSON, lo necesitaremos más tarde y presione el botón "Guardar" en la parte inferior de la página.

![Crear cuenta de servicio de credenciales ](/images/posts/credentials-service-account.png)
![Agregar Clave](/images/posts/credentials-service-account-key.png)

Vuelva a la página de inicio del proyecto (Panel de control) y seleccione **+ Habilitar API y servicios**.

![Habilitar APIs](/images/posts/dashboard-enable-apis.png)

Busque y habilite **API de Google Analytics**. Vaya al [Panel de control de Google Analytics](https://analytics.google.com/). Una vez que haya seleccionado la cuenta de Analytics correcta, vaya al panel de administración (icono de engranaje). Agregue una nueva cuenta, la dirección de correo electrónico es la que puede encontrar en el campo **client_email** del archivo JSON que guardó antes. Haga clic en **Crear Propiedad**. Esto nos dará un **ID de Seguimiento** de la forma `UA-XXXXXXXXX-X`. Guarde este ID ya que lo necesitaremos más adelante.

![Admin Crear Propiedad](/images/posts/ga-create-property.png)

Con esa propiedad seleccionada, haga clic en **Crear Vista**. Esto nos dará una **ID de Vista**. Guarde este ID ya que lo necesitaremos más adelante.

![Admin Crear Vista](/images/posts/ga-create-view.png)

### Agregar secretos de Google Analytics al proyecto

Para conectarse a la API de Google Analytics y obtener las visitas a la página para una URL específica, necesitamos instalar el cliente Node.js de Google APIs.

```shell
npm install googleapis --save
# or
yarn add googleapis
```

Agreguemos nuestras claves secretas dentro de las variables de entorno. Para ello vamos a crear un archivo **.env.local** en la raíz del proyecto.

```shell
GOOGLE_ANALYTICS_VIEW_ID=123456789
GOOGLE_CLIENT_EMAIL=service-account@project.iam.gserviceaccount.com
GOOGLE_CLIENT_ID=1234567890
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nR2D2=\n-----END PRIVATE KEY-----\n"
```

*GOOGLE_ANALYTICS_VIEW_ID* es el ID de Vista.

Los otros valores se encuentran en el archivo JSON que guardamos anteriormente:

*GOOGLE_CLIENT_EMAIL* -> *client_email*

*GOOGLE_CLIENT_ID* -> *client_id*

*GOOGLE_PRIVATE_KEY* -> *private_key*

En este punto seremos capaces de acceder estos valor usando
**process.env.GOOGLE_CLIENT_EMAIL** lo cual es posible gracias a las [variables de entorno](https://nextjs.org/docs/basic-features/environment-variables) de Next.js.

Para producción, se requiere registrar estas variables donde el proyecto se sirve al público. Yo uso [Vercel](https://vercel.com) y así es como se ve:

![Vercel Variables Entorno](/images/posts/vercel-env-variables.png)

### Implementando el código

Primero, cree un pequeño módulo en la ruta de su preferencia que básicamente expondrá tres cosas:

El ID de Seguimiento de Google Analytics.
Un método *pageview*.
Un método *event*.

En mi caso, lo creé dentro de la carpeta **lib** en la raíz y lo llamé **gtag.js**.

```javascript
export const GA_TRACKING_ID = 'UA-XXXXXXXXX-X';

export const pageview = (url, title) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_location: url,
    page_title: title,
  });
};

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

En segundo lugar, modificaremos el archivo **_document.js** dentro del directorio **pages** para incluir el código JavaScript de Google Analytics.

```javascript
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '@/lib/gtag';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          ...
          {/Global Site Tag (gtag.js) Google Analytics -/}
          {GA_TRACKING_ID ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `,
                }}
              />
            </>
          ) : null}
          ...
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
```

Esto inyecta de forma asincrónica el código que inicializa Google Analytics, lo que ayuda a tener un buen rendimiento.

En tercer lugar, necesitamos realizar un seguimiento de la vista de una página cada vez que un router realiza una transición. Para lograr esto, usaremos el propio Router de Next.js para ejecutar una función cada vez que cambie la ruta: el evento **routeChangeComplete** es el que queremos usar en este caso. Actualicemos **_app.js** con el código correspondiente:

```javascript
import { useEffect } from 'react';
import { pageview } from '@/lib/gtag';

const MyApp = ({ Component, pageProps, router }) => {
  ...
  useEffect(() => {
    const handleRouteChange = url => {
      pageview(url, document.title);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  ...
};

export default MyApp;
```

## Mostrar un contador de visitas con datos de Google Analytics

### Conexión a la API de Google Analytics

Aprovechemos el módulo [API Routes](https://nextjs.org/docs/api-routes/introduction) de Next.js para esto.

Primero, cree un nuevo archivo dentro de la carpeta **pages/api** llamado **page-views.js**:

```javascript
import { google } from 'googleapis'

const pageViewsAPI = async (req, res) => {
  const startDate = req.query.startDate || '2021-01-01'
  const post = req.query.post

  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY,
      },
      scopes: ['https://www.googleapis.com/auth/analytics.readonly'],
    })

    const analytics = google.analytics({
      auth,
      version: 'v3',
    })

    const response = await analytics.data.ga.get({
      ids: `ga:${process.env.GOOGLE_ANALYTICS_VIEW_ID}`,
      metrics: 'ga:pageviews',
      dimensions: 'ga:pagePath',
      ...(post ? { filters: `ga:pagePath==${post}` } : {}),
      'start-date': startDate,
      'end-date': 'today',
    })

    const pageViews = response?.data?.totalsForAllResults['ga:pageviews']

    return res.status(200).json({
      pageViews,
    })
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

export default pageViewsAPI
```

Este controlador esperará dos parámetros en consulta: **startDate** y **post** que se utilizarán para filtrar los resultados.

Importe el paquete **googleapis** y cree las credenciales.

A continuación, cree una instancia del cliente de Google Analytics v3 y realice la llamada para obtener las métricas.

El parámetro **filters** restringe los resultados a la URL específica.
El parámetro **startDate**, si no se proporciona, se establecerá en *2021-01-01* para obtener datos desde esa fecha.

Ahora abra una URL como

```shell
http://localhost:3000/api/page-views?post=%2Fblog%2Fadding-comments-to-my-blog
```

En este caso, proporciono un post válido y existente, que muestra el siguiente resultado:

![Ejemplo de Vistas API](/images/posts/page-views-api-example.png)

### Display counter in every post

Ahora es el momento de conectar cada página del blog al API y mostrar el contador de vistas. Vamos a utilizar [SWR](https://swr.vercel.app/), el cual se pueden instalar con:

```shell
npm install swr --save
# or
yarn add swr
```

Las páginas de mis posts se publican en **pages/blog/[id].js**. Estos son los cambios necesarios para mostrar el contador:

```javascript
import useSWR from 'swr';

export default function Post({ postData }) {
  ...
  // Page views count
  const { data } = useSWR(
    `/api/page-views?post=${encodeURIComponent(PostsDirectory + postData.id)}`,
    async url => {
      const res = await fetch(url)
      return res.json()
    },
    { revalidateOnFocus: false },
  )
  const views = data?.pageViews

  return (
    <>
      ...
      <div>{views} views</div>
      ...
    </>
  );
}
```

Finalmente, tenemos nuestro conteo de vistas listo y funcionando.

![Ejemplo de Vistas Post](/images/posts/page-views-post-example.png)

## Referencias

1. [Post Arturo Campos (inglés/español)](https://arturocampos.dev/blog/nextjs-with-google-analytics)
2. [Post Lee Robinson (inglés)](https://leerob.io/blog/real-time-post-views)
3. [Post Ryan Jordal (inglés)](https://ryanjordal.me/post/adding-analytics-to-next-app)
