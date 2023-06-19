import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';

export const generateStaticParams = async () =>
  allPosts.map((post) => ({ slug: post._raw.flattenedPath }));

// export const generateMetadata = ({ params }: { params: { slug: string } }) => {
//   const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
//   if (!post) {
//     throw new Error(`Post not found for slug: ${params.slug}`);
//   }
//   return { title: post.title };
// };
const mdxComponents: MDXComponents = {
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  // h1: ({ children }) => <h1 className="font-bold text-3xl">{children}</h1>,
  // h2: ({ children }) => <h2 className="font-bold text-2xl">{children}</h2>,
  // h3: ({ children }) => <h3 className="font-bold text-xl">{children}</h3>,
  // h4: ({ children }) => <h4 className="font-bold text-lg">{children}</h4>,
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="prose dark:prose-invert">
      <div className="text-center">
        <h1>{post.title}</h1>
        <time dateTime={post.date}>
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>
      <MDXContent components={mdxComponents} />
    </article>
  );
};

export default PostLayout;
