import { marked } from 'marked';
import sanitizeHtml from 'sanitize-html';

/** Frontmatter permits prose, lists and links, never executable HTML or embedded media. */
export async function renderSafeMarkdown(markdown: string): Promise<string> {
  return sanitizeHtml(await marked.parse(markdown), {
    allowedTags: [
      'p',
      'br',
      'strong',
      'em',
      'del',
      'blockquote',
      'ul',
      'ol',
      'li',
      'code',
      'pre',
      'a',
    ],
    allowedAttributes: { a: ['href', 'title'] },
    allowedSchemes: ['https', 'http', 'mailto'],
    allowProtocolRelative: false,
  });
}
