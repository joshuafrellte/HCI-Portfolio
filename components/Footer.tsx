import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Button from "@/components/ui/Button";

const contactLinks = [
  {
    label: "Email",
    href: "mailto:your.email@example.com",
    display: "your.email@example.com",
    icon: FiMail,
  },
  {
    label: "GitHub",
    href: "https://github.com/yourusername",
    display: "github.com/yourusername",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
    display: "linkedin.com/in/yourusername",
    icon: FiLinkedin,
  },
];

export default function Footer() {
  return (
    <>
      {/* Contact CTA band */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="bg-oxford-blue px-4 py-16 shadow-nav sm:px-6 sm:py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2
            id="contact-heading"
            className="font-serif text-3xl font-semibold text-snow sm:text-4xl"
          >
            Let&apos;s connect
          </h2>
          <p className="mt-3 font-serif text-lg italic text-archivum-red sm:text-xl">
            Open to collaborations, internships, and research conversations.
          </p>
          <p className="mx-auto mt-4 max-w-xl text-base text-snow/80">
            Whether you have a project in mind or want to discuss HCI, software
            design, or academic work — I&apos;d like to hear from you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="mailto:your.email@example.com" variant="inverted" size="md">
              Send an email
            </Button>
            <Button
              href="https://linkedin.com/in/yourusername"
              variant="outlineLight"
              size="md"
            >
              LinkedIn profile
            </Button>
          </div>
        </div>
      </section>

      {/* Footer links & legal */}
      <footer className="border-t border-footer-border bg-snow px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ul className="grid gap-4 sm:grid-cols-3">
            {contactLinks.map(({ label, href, display, icon: Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={
                    href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="group flex items-start gap-3 transition-opacity duration-200 hover:opacity-80"
                >
                  <Icon
                    className="mt-0.5 h-4 w-4 shrink-0 text-archivum-red"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="block text-xs font-medium uppercase tracking-wider text-neutral-500">
                      {label}
                    </span>
                    <span className="mt-0.5 block text-sm text-neutral-600 group-hover:underline group-hover:underline-offset-4">
                      {display}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-10 border-t border-neutral-300 pt-6 text-xs text-neutral-500">
            © {new Date().getFullYear()} [Your Full Name]. Academic e-portfolio
            — styled with the Archivum design system.
          </p>
        </div>
      </footer>
    </>
  );
}
