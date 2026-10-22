/** Public Markdown alternatives mirror the static HTML directory layout. */
export function markdownPath(pagePath: string): string {
  return pagePath === '/' ? '/index.md' : `${pagePath}/index.md`;
}
