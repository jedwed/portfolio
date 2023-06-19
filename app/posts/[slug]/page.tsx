import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { allPosts } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import type { MDXComponents } from 'mdx/types';
import Link from 'next/link';
import PageWrapper from '@/components/page-wrapper';

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
};

const PostLayout = ({ params }: { params: { slug: string } }) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);
  if (!post) {
    notFound();
  }

  const MDXContent = useMDXComponent(post.body.code);

  return (
    <PageWrapper>
      <section>
        <div className="text-center">
          <h1 className="m-1">{post.title}</h1>
          {/* <h1>{post.title}</h1> */}
          <time dateTime={post.date}>
            {format(parseISO(post.date), 'LLLL d, yyyy')}
          </time>
        </div>
        <MDXContent components={mdxComponents} />
      </section>
    </PageWrapper>
  );
};

export default PostLayout;
