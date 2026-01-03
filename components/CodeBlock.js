import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const CodeBlock = ({ code, language = 'text' }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className='rounded-lg overflow-hidden border border-zinc-800 bg-zinc-950'>
      {/* Header */}
      <div className='flex justify-between items-center px-4 py-2 bg-gray-800 border-b border-zinc-800'>
        <span className='text-xs font-mono text-zinc-400 uppercase'>{language}</span>
        <button
          type='button'
          onClick={copyToClipboard}
          className='flex items-center gap-1.5 px-3 py-1 text-xs text-zinc-400 hover:text-red-400 hover:bg-zinc-800 rounded transition-colors'
          aria-label='Copy code'
        >
          {copied ? (
            <>
              <Check className='w-4 h-4' aria-hidden='true' />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className='w-4 h-4' aria-hidden='true' />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code */}
      <pre className='p-4 overflow-x-auto text-sm leading-relaxed' style={{ margin: 0 }}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock