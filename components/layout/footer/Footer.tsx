import { useIntl } from "react-intl";

// Update the component to receive dictionary as a prop
export default function Footer() {
  const intl = useIntl();
  return (
    <footer className="border-t">
      {/*       <div className="container flex flex-col gap-4 py-10 md:flex-row md:gap-8 md:py-12">
        <div className="flex-1 space-y-4">
          <div className={`text-lg font-medium`}>
            {intl.formatMessage({ id: "footer.siteTitle" })}
          </div>
          <p className={`text-sm text-muted-foreground`}>
            {intl.formatMessage({ id: "footer.tagline" })}
          </p>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-3">
            <h3 className={`text-sm font-medium`}>
              {intl.formatMessage({ id: "footer.explore.title" })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/`}
                  className={`text-muted-foreground hover:underline`}
                >
                  {intl.formatMessage({ id: "footer.explore.home" })}
                </Link>
              </li>
              <li>
                <Link
                  href={`/biography`}
                  className={`text-muted-foreground hover:underline`}
                >
                  {intl.formatMessage({ id: "footer.explore.biography" })}
                </Link>
              </li>
              <li>
                <Link
                  href={`/books`}
                  className={`text-muted-foreground hover:underline`}
                >
                  {intl.formatMessage({ id: "footer.explore.books" })}
                </Link>
              </li>

              <li>
                <Link
                  href={`/poems`}
                  className={`text-muted-foreground hover:underline`}
                >
                  {intl.formatMessage({ id: "footer.explore.poems" })}
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className={`text-sm font-medium`}>
              {intl.formatMessage({ id: "footer.connect.title" })}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/contact`}
                  className={`text-muted-foreground hover:underline`}
                >
                  {intl.formatMessage({ id: "footer.connect.contact" })}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="border-t py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p
            className={`text-center text-sm text-muted-foreground md:text-left`}
          >
            &copy; {new Date().getFullYear()}{" "}
            {intl.formatMessage({ id: "footer.copyright" })}
          </p>
        </div>
      </div>
    </footer>
  );
}
