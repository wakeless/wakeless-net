import { Outlet, useMatches, useNavigate } from "@remix-run/react";

import { Container } from "app/components/Container";
import { formatDate } from "app/lib/formatDate";
import { Prose } from "app/components/Prose";
import { Author } from "app/components/Author";

function ArrowLeftIcon(props: any) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Posts({
  previousPathname,
  ...props
}: {
  previousPathname: any;
  props: any;
}) {
  const navigate = useNavigate();
  const matches = useMatches();
  const handle: { date?: string; title?: string } | undefined =
    matches[matches.length - 1]?.handle;
  const { date, title } = handle || {};
  return (
    <>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            {previousPathname && (
              <button
                type="button"
                onClick={() => navigate(-1)}
                aria-label="Go back to articles"
                className="bg-white shadow-zinc-800/5 ring-zinc-900/5 dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 group mb-8 flex h-10 w-10 items-center justify-center rounded-full shadow-md ring-1 transition dark:border dark:ring-0 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0"
              >
                <ArrowLeftIcon className="stroke-zinc-500 group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400 h-4 w-4 transition" />
              </button>
            )}
            <article>
              <header className="flex flex-col">
                <h1 className="text-zinc-800 dark:text-zinc-100 mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                  {title}
                </h1>
                <time
                  dateTime={date}
                  className="text-zinc-400 dark:text-zinc-500 order-first flex items-center text-base"
                >
                  <span className="bg-zinc-200 dark:bg-zinc-500 h-4 w-0.5 rounded-full" />
                  <span className="ml-3">{formatDate(date)}</span>
                </time>
              </header>
              <Prose className="mt-8">
                <Outlet />
              </Prose>
              <Author />
            </article>
          </div>
        </div>
      </Container>
    </>
  );
}
