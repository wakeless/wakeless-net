import { Link } from "@remix-run/react";

import { Container } from "@/components/Container";

function NavLink({ href, children }) {
  return (
    <Link
      to={href}
      className="hover:text-teal-500 dark:hover:text-teal-400 transition"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <Container.Outer>
        <div className="border-zinc-100 dark:border-zinc-700/40 border-t pt-10 pb-16">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="text-zinc-800 dark:text-zinc-200 flex gap-6 text-sm font-medium">
                <NavLink href="/about">About</NavLink>
                {/* <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink> */}
              </div>
              <p className="text-zinc-400 dark:text-zinc-500 text-sm">
                &copy; {new Date().getFullYear()} Spencer Sharp. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
}
