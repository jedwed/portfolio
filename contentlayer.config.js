import { defineDocumentType, makeSource } from '@contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/posts/${post._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'github-dark',
            light: 'github-light',
          },
          keepBackground: true,
          // Callback hooks to add custom logic to elements when visiting
          // them.
          onVisitLine(element) {
            // Prevent lines from collapsing in `display: grid` mode, and
            // allow empty lines to be copy/pasted
            if (element.children.length === 0) {
              element.children = [{ type: 'text', value: ' ' }];
            }
          },
          onVisitHighlightedLine(element) {
            // Each line element by default has `class="line"`.
            element.properties.className?.push('highlighted');
          },
          onVisitHighlightedWord(element) {
            // Each word element has no className by default.
            element.properties.className = ['word'];
          },
        },
      ],
    ],
  },
});
