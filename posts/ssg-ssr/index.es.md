---
title: '¿Cuándo usar Static Generation vs. Server-Side Rendering?'
date: '2020-01-02'
---

Recomendamos usar **Static Generation** o *Generación Estática* (con y sin datos) siempre que sea posible porque su página se puede construir una vez y ser servida por CDN, lo que lo hace mucho más rápido que tener un servidor que renderice la página en cada solicitud.

Puede usar la generación estática para muchos tipos de páginas, que incluyen:

- Páginas de marketing
- Publicaciones de blog
- Listados de productos de comercio electrónico
- Ayuda y documentación

Debería preguntarse: "¿Puedo renderizar previamente esta página **antes** de la solicitud de un usuario?" Si la respuesta es sí, entonces debería elegir Static Generation.

Por otro lado, Static Generation **no** es una buena idea si no puede pre-renderizar una página antes de la solicitud de un usuario. Tal vez su página muestre datos actualizados con frecuencia y el contenido de la página cambie con cada solicitud.

En ese caso, puede utilizar **Server-Side Rendering** o *Representación del lado del servidor*. Será más lento, pero la página renderizada previamente siempre estará actualizada. O puede omitir la representación previa y usar JavaScript del lado del cliente para completar los datos.