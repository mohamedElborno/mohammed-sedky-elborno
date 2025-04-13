import { useIntl } from "react-intl";

// Update the component to receive dictionary as a prop
export default function Footer() {
  const intl = useIntl();
  return (
    <footer className="border-t">
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
