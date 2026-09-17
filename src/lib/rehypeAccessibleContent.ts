interface ContentNode {
  type: string;
  tagName?: string;
  value?: string;
  properties?: Record<string, unknown>;
  children?: ContentNode[];
}

function textOf(node: ContentNode): string {
  return node.value ?? (node.children ?? []).map(textOf).join(' ');
}

/** Keep Markdown tables keyboard-scrollable and read-only task status labeled. */
export function rehypeAccessibleContent() {
  return (tree: ContentNode) => {
    function visit(node: ContentNode, parent?: ContentNode) {
      if (node.tagName === 'table') {
        node.properties ??= {};
        node.properties.tabIndex = 0;
        node.properties.ariaLabel = `Table: ${textOf(
          node.children?.find((child) => child.tagName === 'thead') ?? node,
        )
          .trim()
          .slice(0, 160)}`;
      }
      if (node.tagName === 'input' && node.properties?.type === 'checkbox') {
        node.properties.ariaLabel =
          textOf(parent ?? node).trim() || 'Task status';
        node.properties.disabled = true;
      }
      node.children?.forEach((child) => visit(child, node));
    }
    visit(tree);
  };
}
