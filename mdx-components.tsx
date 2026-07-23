import type { MDXComponents } from "mdx/types";

// MDX converts Markdown headings, paragraphs, and links into React elements.
// This map gives those generated elements the case-study design classes.
const components = {
  h2: ({ children }) => <h2 className="case-heading">{children}</h2>,
  h3: ({ children }) => <h3 className="case-subheading">{children}</h3>,
  p: ({ children }) => <p className="case-copy">{children}</p>,
  ul: ({ children }) => <ul className="case-list">{children}</ul>,
  li: ({ children }) => <li>{children}</li>,
  strong: ({ children }) => <strong className="case-strong">{children}</strong>,
  blockquote: ({ children }) => (
    <blockquote className="case-quote">{children}</blockquote>
  ),
  a: ({ children, href }) => (
    <a className="case-link" href={href}>
      {children}
    </a>
  ),
} satisfies MDXComponents;

// @next/mdx looks for this named function when it compiles an .mdx file.
export function useMDXComponents(): MDXComponents {
  return components;
}
