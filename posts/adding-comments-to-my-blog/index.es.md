---
title: 'Agregando Comentarios a un Blog NextJS'
description: Configurar Utterances en un blog NextJS
tags: blog,comments
date: '2020-12-22'
image: 'https://avatars.githubusercontent.com/u/27908738?s=200&v=4'
---

Crear mi propio blog es un objetivo importante para mí, y por eso quería agregar una sección de comentarios para cada post.

Investigando un poco, encontré que muchos plugins que permiten comentarios requerían crear una nueva cuenta en su servicio, y eso no me convenció.

Finalmente descubrí Utterances, un proyecto de código abierto que utiliza una cuenta de GitHub, y como casi todos los desarrolladores tienen creada una cuenta ahí, decidí implementar mi sección de comentarios con este plugin.

## Crear un repositorio dedicado a almacenar los comentarios

Hice un [repositorio dedicado a los comentarios](https://github.com/randymorales/randymorales.dev-comments) para alojarlos como issues y sus respuestas. Hay que conectarse a la aplicación de Utterances en GitHub para dejar un comentario en un post, aunque también se puede comentar directamente a través de GitHub si el issue existe. Esto se hizo para no mezclar el repositorio del código del blog con los comentarios.

## Crear el Componente Comment

Este componente será muy sencillo.

```javascript
export default function Comment({ commentBox }) {
  return <div ref={commentBox} />
}
```

## Agregar Utterances en el blog

Ahora vamos a agregar Utterances en el blog and linkearlo al repositorio previamente creado. Vamos a agregar el siguiente código en el archivo que crea los posts (i.e. `/blog/posts/[slug].js`), específicamente en el componente **Post**:

```javascript
import React, { useEffect } from 'react'

const commentBox = React.createRef()

// Add comments script with Utterances.
useEffect(() => {
const commentScript = document.createElement('script')
// Optional: It is possible to use light/dark themes in the comment box
// This variable takes the value based on the blog theme if present
const theme =
    typeof window !== 'undefined' && localStorage.getItem(Theme) === DarkTheme
    ? 'github-dark'
    : 'github-light'
commentScript.async = true
commentScript.src = 'https://utteranc.es/client.js'
// CHANGE REPO VAlUE if you are going to use the code.
// Please do not test your code using other's repos.
commentScript.setAttribute('repo', '<your-github-username>/<comments-repo>')
commentScript.setAttribute('issue-term', 'pathname')
commentScript.setAttribute('id', 'utterances')
commentScript.setAttribute('theme', theme)
commentScript.setAttribute('crossorigin', 'anonymous')
if (commentBox && commentBox.current) {
    commentBox.current.appendChild(commentScript)
} else {
    console.error(`Error adding utterances comments on: ${commentBox}`)
}
}, [])

return (
    // ...
    // ...
    <>
	  {/* Add comments section via Utterances. */}
      <div>
        <div id='post-comments'>
          <h2>Comments</h2>
          <Comment commentBox={commentBox} />
        </div>
      </div>
    </>
  )
}
```

Ahora todos pueden participar en discusiones y dejar comentarios útiles 😃.

## Resultado

![Ejemplo de comentario](/images/posts/comment-utterances.png)

## Referencias

1. [Página web Utterances (inglés)](https://utteranc.es/)
2. [Post Tania Rascia (inglés)](https://www.taniarascia.com/adding-comments-to-my-blog/)
