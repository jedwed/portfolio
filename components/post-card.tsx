import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Post } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";

export default function PostCard(post: Post) {
  // const MDXContent = useMDXComponent(post.body.code);
  return (
    <div>
      <h2 className="text-2xl">
        <Link href={post.url}>{post.title}</Link>
      </h2>
      <time dateTime={post.date}>
        {format(parseISO(post.date), "LLLL d, yyyy")}
      </time>
      {/* <MDXContent /> */}
    </div>
  );
}
