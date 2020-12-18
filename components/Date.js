import { parseISO, format } from "date-fns";
import en from "date-fns/locale/en-US";
import es from "date-fns/locale/es";

// Return a parsed date based on given data and locale.
export default function Date({ dateString, locale }) {
  const date = parseISO(dateString);

  let language;
  switch (locale) {
    case "es":
      language = es;
      break;
    default:
      language = en;
  }

  return (
    <time dateTime={dateString}>
      {format(date, "LLLL d, yyyy", { locale: language })}
    </time>
  );
}
