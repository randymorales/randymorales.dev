---
title: 'Adding Code Highlighting to a NextJS Blog with Prism'
description: 'Setup Code Highlighting in a NextJS blog with Prism'
tags: blog,nextjs
date: '2021-07-05'
image: 'https://avatars.githubusercontent.com/u/11140484?s=200&v=4'
---

This is a quickly guide about how to do code highlighting in a blog using PrismJS.

## Add Prism to your project

```bash
npm install prism
```

Your `package.json` file should reflects the installation under `dependencies`:

```json
"prismjs": "^1.24.1"
```

## Add Prism CSS Theme

From this [PrismJS themes repo](https://github.com/PrismJS/prism-themes/tree/master/themes) select a theme from those provided by the community. You can create a custom theme, but it is out of the scope of this post.

Once you choose the theme, create a CSS file with that content and import it into your blog:

```javascript
import '@/styles/prismTheme.css'
```

## Load Prism into the blog

Now let's apply the styles to the posts. Add this content to the file that generates the blog posts (i.e. `/blog/posts/[slug].js`) and add the following code in your **Post** component:

```javascript
  const prism = require('prismjs')

  // Import highlighting for Python because it's not included by default
  require('prismjs/components/prism-python')

  // Apply prism in all code blocks
  useEffect(() => {
    prism.highlightAll()
  }, [])
```

The above code will highlight all our code blocks via react hook. If you want to highlight languages other than javascript, you need to import them manually as the example above shows with Python.

See more about code blocks for markdown [here](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks).

## Examples

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

## References

1. [PrismJS Themes](https://github.com/PrismJS/prism-themes/tree/master/themes)
2. [How to do syntax highlighting in Next.JS](https://garbagevalue.com/blog/syntax-highlighting-next-js)
3. [Markdown Fenced Code Blocks](https://www.markdownguide.org/extended-syntax/#fenced-code-blocks)
4. [Syntax Highlighting with Prism.js and Next.js](https://mxd.codes/articles/syntax-highlighting-with-prism-and-next-js)
