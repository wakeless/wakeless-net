import { Container } from "app/components/Container";

export function SimpleLayout({ title, intro, children }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-zinc-800 dark:text-zinc-100 text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mt-6 text-base">
          {intro}
        </p>
      </header>
      <div className="mt-16 sm:mt-20">{children}</div>
    </Container>
  );
}
