import Link from "next/link";
import { useRouter } from "next/router";

// Change main route according to selected locale.
export const LanguageSelector = () => {
  const router = useRouter();

  return (
    <div>
      <ul>
        {router.locales.map((locale) => (
          <li key={locale}>
            <Link href={router.asPath} locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelector;
