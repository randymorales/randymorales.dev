---
title: 'Adding Comments to a NextJS Blog'
description: 'Setup Utterances in a NextJS blog'
tags: blog
date: '2020-12-22'
image: 'https://avatars.githubusercontent.com/u/27908738?s=200&v=4'
---

Create my own blog is an important goal for me, that is why I wanted to add a comment section for each post.

Doing a little research, I found that many plugins that allow comments required creating a new account on their service, and that did not convince me.

I finally discovered [Utterances](https://utteranc.es/), an [open source project](https://github.com/utterance/utterances) that uses a GitHub account, and since almost all developers have an account created there, I decided to implement my comments section with this plugin.

## Setup a dedicated repository to host the comments

I made a [repo dedicated to comments](https://github.com/randymorales/randymorales.dev-comments) to host them as issues and their responses. You must connect to the Utterances GitHub app to leave a comment on a post, although you can also comment directly through GitHub if the issue exists. This was made to avoid mixing the blog source code repository with the comments.

## Create Comment Component

This component will be very easy.

```javascript
export default function Comment({ commentBox }) {
  return <div ref={commentBox} />
}
```

## Setup Utterances in your blog

Now it is time to setup Utterances in your blog and link it to the previously created repo. Go to the file that creates the blog posts (i.e. `/blog/posts/[slug].js`) and add the following code in your `Post` component:

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

Now everyone will be able to participate in discussions and leave helpful comments 😃.

## Result

![Comment Example](/images/posts/comment-utterances.png)

## References

1. [Utterances website](https://utteranc.es/)
2. [Tania Rascia's Post](https://www.taniarascia.com/adding-comments-to-my-blog/)
