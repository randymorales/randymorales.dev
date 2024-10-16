import { parseISO } from 'date-fns'

// Return a parsed date based on given data and locale.
export default function PublishedDate({ dateString, locale }) {
  const date = parseISO(dateString)

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return (
    <time className='capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base'>
      {new Date(date).toLocaleDateString(locale, dateOptions)}
    </time>
  )
}
