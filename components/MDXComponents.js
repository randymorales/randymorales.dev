import React from 'react'

import CodeBlock from '@/components/CodeBlock'

const MDXComponents = {
  pre: props => {
    const codeChild = React.Children.toArray(props.children).find(
      child => child.type === 'code',
    )
    if (codeChild) {
      return (
        <CodeBlock
          code={codeChild.props.children.trim()}
          language={codeChild.props.className?.replace('language-', '')}
        />
      )
    }
    return <pre {...props} />
  },
}

export default MDXComponents
