import React, { useState } from 'react'
import { ClipboardIcon, CheckIcon } from 'lucide-react'

const CodeBlock = ({ code, language }) => {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className='mt-7 relative rounded-lg overflow-hidden'>
      <div className='flex justify-between items-center px-4 py-2 bg-gray-800 rounded-t-lg'>
        <span className='text-gray-400'>{language}</span>
        <button
          onClick={copyToClipboard}
          className='flex flex-row items-center gap-1 rounded-md p-1 py-0.5 text-xs transition-opacity delay-100 hover:bg-bg-200 opacity-60 hover:opacity-100'
        >
          {copied ? (
            <span className='text-text-200 pr-0.5'>Copied!</span>
          ) : (
            <span className='text-text-200 pr-0.5'>Copy</span>
          )}
          {copied ? (
            <CheckIcon className='w-5 h-5' />
          ) : (
            <ClipboardIcon className='w-5 h-5' />
          )}
        </button>
      </div>
      <pre className='p-4 rounded-br-lg rounded-bl-lg overflow-x-auto'>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock
