import { useState, useEffect } from 'react'
import { Link } from 'lucide-react'

export default function TableOfContents() {
  const [headings, setHeadings] = useState([])

  useEffect(() => {
    const article = document.querySelector('article')
    const headingElements = article.querySelectorAll('h2, h3, h4')

    const headingData = Array.from(headingElements).map(heading => ({
      id: heading.id,
      text: heading.textContent,
      level: parseInt(heading.tagName.charAt(1)),
    }))
    setHeadings(headingData)

    // Add IDs to headings if they don't exist
    headingElements.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `heading-${index}`
      }
    })
  }, [])

  return (
    <aside className='table-of-contents border border-gray-700 mt-8 p-8 lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:overflow-auto'>
      <h5 className='text-xl font-semibold mb-4 flex items-center text-accentColor'>
        <Link className='mr-2' />
        Table of Contents
      </h5>
      <ul className='space-y-2'>
        {headings.map(heading => (
          <li
            key={heading.id}
            className={`${
              heading.level === 2
                ? 'ml-0'
                : heading.level === 3
                ? 'ml-4'
                : 'ml-8'
            }`}
          >
            <a
              href={`#${heading.id}`}
              className='text-white hover:text-accentColor hover:underline transition-colors duration-200'
              onClick={e => {
                e.preventDefault()
                document.querySelector(`#${heading.id}`).scrollIntoView({
                  behavior: 'smooth',
                })
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  )
}
