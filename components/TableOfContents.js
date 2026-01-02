import { useState, useEffect } from 'react'
import { List } from 'lucide-react'

export default function TableOfContents() {
  const [headings, setHeadings] = useState([])
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const article = document.querySelector('article')
    if (!article) return

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

    // Observer for active heading
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-100px 0px -80% 0px' }
    )

    headingElements.forEach(heading => observer.observe(heading))

    return () => observer.disconnect()
  }, [])

  if (headings.length === 0) return null

  return (
    <div className='hidden lg:block sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto'>
      <div className='bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6'>
        <div className='flex items-center gap-2 mb-6'>
          <List className='text-red-400' size={20} />
          <h2 className='text-lg font-bold text-white'>Table of Contents</h2>
        </div>
        <nav>
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
                  className={`block py-1 text-sm border-l-2 pl-3 transition-colors ${
                    activeId === heading.id
                      ? 'border-red-500 text-red-400 font-medium'
                      : 'border-transparent text-zinc-400 hover:text-red-400 hover:border-zinc-600'
                  }`}
                  onClick={e => {
                    e.preventDefault()
                    document.querySelector(`#${heading.id}`)?.scrollIntoView({
                      behavior: 'smooth',
                    })
                  }}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
