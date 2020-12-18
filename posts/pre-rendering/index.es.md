---
title: 'Dos Formas de Pre-renderizado'
date: '2020-01-01'
---

Next.js tiene dos formas de renderizado previo: **Generación estática** y **Renderizado del lado del servidor**. La diferencia está en **cuando** genera el HTML para una página.

- **Static Generation** es el método de representación previa que genera el HTML en **tiempo de compilación**. El HTML pre-renderizado luego se reutiliza en cada solicitud.
- **Representación del lado del servidor** es el método de representación previa que genera el HTML en **cada solicitud**.

Es importante destacar que Next.js le permite **elegir** qué formulario de representación previa usar para cada página. Puede crear una aplicación Next.js "híbrida" utilizando Static Generation para la mayoría de las páginas y utilizando el Server-side Rendering para otras.