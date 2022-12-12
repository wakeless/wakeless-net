import { json } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";
// import {Container} from "app/components/Container";
import { SimpleLayout } from "app/components/SimpleLayout";
import { formatDate } from "app/lib/formatDate";
import { Card } from "app/components/Card";

// Import all your posts from the app/routes/posts directory. Since these are
// regular route modules, they will all be available for individual viewing
// at /posts/a, for example.
import * as postA from "./posts/what-do-you-do.mdx";

function postFromModule(mod: any) {
  return {
    slug: mod.filename.replace(/\.mdx?$/, ""),
    ...mod.attributes.meta,
  };
}

export async function loader() {
  // Return metadata about each of the posts for display on the index page.
  // Referencing the posts here instead of in the Index component down below
  // lets us avoid bundling the actual posts themselves in the bundle for the
  // index page.
  return json([postFromModule(postA)]);
}

export default function Index() {
  const posts = useLoaderData();

  return (
    <SimpleLayout
      title="Michael Gall's blog"
      intro="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
    >
      <div className="md:border-zinc-100 md:dark:border-zinc-700/40 md:border-l md:pl-6">
        <div className="flex max-w-3xl flex-col space-y-16">
          {posts.map((post: any) => (
            <Article key={post.slug} article={post} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}

type Post = { date: string; title: string; slug: string; description: string };

function Article({ article }: { article: Post }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/posts/${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  );
}
