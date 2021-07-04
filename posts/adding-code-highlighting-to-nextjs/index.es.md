---
title: 'Agregando resaltado de código a un Blog NextJS con Prism'
description: 'Configurar Prism en un Blog NextJS para resaltado de código'
tags: blog,nextjs
date: '2021-07-05'
image: 'https://avatars.githubusercontent.com/u/11140484?s=200&v=4'
---

Esta es una guía rápida sobre cómo resaltar código en un blog usando PrismJS.

## Agrega Prism a tu proyecto

```bash
npm install prism
```

Su archivo `package.json` debería reflejar la instalación en` dependencias`:

```json
"prismjs": "^1.24.1"
```

## Agregar tema CSS Prism

En este [repositorio de temas de PrismJS] (https://github.com/PrismJS/prism-themes/tree/master/themes) seleccionaremos un tema de los que proporciona la comunidad. Usted puede crear un tema personalizado, pero está fuera del alcance de esta publicación.

Una vez que elija el tema, cree un archivo CSS con ese contenido e impórtelo a su blog:

```javascript
import '@/styles/prismTheme.css'
```

## Cargar Prism en el blog

Ahora apliquemos los estilos a los posts. Agregue este contenido al archivo que genera los posts del blog (es decir, `/blog/posts/[slug].js`) y agregue el siguiente código en su componente **Post**:

```javascript
  const prism = require('prismjs')

  // Import highlighting for Python because it's not included by default
  require('prismjs/components/prism-python')

  // Apply prism in all code blocks
  useEffect(() => {
    prism.highlightAll()
  }, [])
```

El código anterior resaltará todos nuestros bloques de código a través de react hook. Si desea resaltar lenguajes además de javascript, es necesario importarlos manualmente como muestra el ejemplo anterior con Python.

Obtenga más información sobre los bloques de código en markdown [aquí] (https://www.markdownguide.org/extended-syntax/#fenced-code-blocks).

## Ejemplos

### Javascript (ECMASCRIPT)

```javascript
console.log("Hello World!");
```

### Go

```go
package main

import "fmt"

func main() {
    fmt.Println("Hello, World!")
}
```

### C

```c
#include <stdio.h>

int main(void)
{
    puts("Hello, World!");
}
```

### Python

```python
# Python Program to calculate the square root

# Note: change this value for a different result
num = 8

# To take the input from the user
#num = float(input('Enter a number: '))

num_sqrt = num ** 0.5
print('The square root of %0.3f is %0.3f'%(num ,num_sqrt))
```

## Referencias

1. [Temas de PrismJS](https://github.com/PrismJS/prism-themes/tree/master/themes)
2. [How to do syntax highlighting in Next.JS](https://garbagevalue.com/blog/syntax-highlighting-next-js)
3. [Markdown Fenced Code Blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks)
4. [Syntax Highlighting with Prism.js and Next.js](https://mxd.codes/articles/syntax-highlighting-with-prism-and-next-js)
