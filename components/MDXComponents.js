import React from 'react'
import CodeBlock from '@/components/CodeBlock'

const MDXComponents = {
  // Headings with red left border
  h1: props => (
    <h1
      className='text-3xl md:text-4xl font-bold text-white mt-12 mb-6 pb-3 border-b-2 border-zinc-800'
      {...props}
    />
  ),
  h2: props => (
    <h2
      className='text-2xl md:text-3xl font-bold text-white mt-10 mb-4 pb-2 border-l-4 border-red-600 pl-4'
      {...props}
    />
  ),
  h3: props => (
    <h3
      className='text-xl md:text-2xl font-bold text-white mt-8 mb-3 border-l-4 border-red-600 pl-4'
      {...props}
    />
  ),
  h4: props => (
    <h4 className='text-lg md:text-xl font-semibold text-white mt-6 mb-2 pl-4' {...props} />
  ),
  h5: props => <h5 className='text-base md:text-lg font-semibold text-white mt-4 mb-2' {...props} />,
  h6: props => <h6 className='text-sm md:text-base font-semibold text-zinc-300 mt-4 mb-2' {...props} />,

  // Paragraph
  p: props => <p className='text-zinc-300 leading-relaxed mb-4' {...props} />,

  // Links
  a: props => (
    <a
      className='text-red-400 hover:text-red-300 underline decoration-red-400/30 hover:decoration-red-300 transition-colors'
      {...props}
    />
  ),

  // Lists
  ul: props => <ul className='list-disc list-inside text-zinc-300 space-y-2 mb-4 ml-4' {...props} />,
  ol: props => <ol className='list-decimal list-inside text-zinc-300 space-y-2 mb-4 ml-4' {...props} />,
  li: props => <li className='leading-relaxed' {...props} />,

  // Blockquote
  blockquote: props => (
    <blockquote
      className='border-l-4 border-red-600 pl-4 py-2 my-6 bg-zinc-900/50 italic text-zinc-300'
      {...props}
    />
  ),

  // Inline code
  code: props => {
    // Check if this is inside a pre tag (code block)
    if (props.className?.includes('language-')) {
      return <code {...props} />
    }
    // Inline code
    return (
      <code
        className='bg-zinc-900 text-red-300 px-1.5 py-0.5 rounded text-sm font-mono border border-zinc-800'
        {...props}
      />
    )
  },

  // Code blocks
  pre: props => {
    // MDX passes code blocks as: <pre><code className="language-*">content</code></pre>
    // props.children is the <code> element directly
    const codeElement = props.children

    // Check if this is a code block with language class
    if (codeElement && codeElement.props && codeElement.props.className?.startsWith('language-')) {
      const code = codeElement.props.children
      const language = codeElement.props.className.replace('language-', '')

      return (
        <CodeBlock
          code={typeof code === 'string' ? code.trim() : ''}
          language={language}
        />
      )
    }

    // Fallback to default pre for non-code blocks
    return (
      <pre
        className='bg-zinc-950 text-zinc-300 p-4 rounded-lg overflow-x-auto my-6 border border-zinc-800'
        {...props}
      />
    )
  },

  // Horizontal rule
  hr: props => <hr className='border-zinc-800 my-8' {...props} />,

  // Strong/Bold
  strong: props => <strong className='font-bold text-white' {...props} />,

  // Emphasis/Italic
  em: props => <em className='italic text-zinc-200' {...props} />,

  // Table
  table: props => (
    <div className='overflow-x-auto my-6'>
      <table className='min-w-full border border-zinc-800 rounded-lg' {...props} />
    </div>
  ),
  thead: props => <thead className='bg-zinc-900' {...props} />,
  tbody: props => <tbody className='bg-zinc-950' {...props} />,
  tr: props => <tr className='border-b border-zinc-800' {...props} />,
  th: props => <th className='px-4 py-3 text-left text-white font-semibold' {...props} />,
  td: props => <td className='px-4 py-3 text-zinc-300' {...props} />,

  // Image
  img: props => (
    <img className='rounded-lg my-6 w-full border border-zinc-800' {...props} />
  ),
}

export default MDXComponents
