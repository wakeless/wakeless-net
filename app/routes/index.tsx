import { json } from "@remix-run/node"; // or cloudflare/deno
import { Link, useLoaderData } from "@remix-run/react";

// Import all your posts from the app/routes/posts directory. Since these are
// regular route modules, they will all be available for individual viewing
// at /posts/a, for example.
import * as postA from "./posts/test-post.mdx";

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
      <div className='flex justify-center'>
        <div className='prose lg:prose-xl py-10'>
          <h2>Michael Gall's blog </h2>

        <ul>
          {posts.map((post: any) => (
            <li key={post.slug}>
              <Link to={`/posts/${post.slug}`}>{post.title}</Link>
              {post.description ? <p>{post.description}</p> : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
