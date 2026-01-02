import { parseISO, format } from 'date-fns'

// Return a parsed date with consistent formatting to avoid hydration errors
export default function PublishedDate({ dateString, className = '' }) {
  const date = parseISO(dateString)

  // Use consistent format to prevent server/client mismatch
  const formattedDate = format(date, 'MMMM dd, yyyy')

  return (
    <time
      dateTime={dateString}
      className={`capitalize text-zinc-400 font-medium text-sm ${className}`}
    >
      {formattedDate}
    </time>
  )
}
