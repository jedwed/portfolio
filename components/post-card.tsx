import Link from 'next/link';
import { format, parseISO } from 'date-fns';
import { Post } from 'contentlayer/generated';

export default function PostCard(post: Post) {
  return (
    <div>
      <h2>
        <Link href={post.url}>{post.title}</Link>
      </h2>
      <time dateTime={post.date}>
        {format(parseISO(post.date), 'LLLL d, yyyy')}
      </time>
    </div>
  );
}
