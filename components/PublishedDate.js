import { parseISO } from 'date-fns'

// Return a parsed date based on given data and locale.
export default function PublishedDate({ dateString, locale }) {
  const date = parseISO(dateString)

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  return <time>{new Date(date).toLocaleDateString(locale, dateOptions)}</time>
}
