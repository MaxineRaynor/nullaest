import { ThemeStyles } from '@theme-ui/css'

// theme.styles object for use with typography.js-generated theme object
// similar to typography.js style output, with these differences
// - only includes styles for markdown elements
// - does not include color styles
// - does not include responsive styles

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
}

const baseStyles: ThemeStyles = {
  root: {
    fontFamily: 'body',
    fontSize: 2,
    fontWeight: 'body',
    lineHeight: 'body',
  },
  img: {
    maxWidth: '100%',
  },
  h1: {
    fontSize: 5,
    ...heading,
  },
  h2: {
    fontSize: 4,
    ...heading,
  },
  h3: {
    fontSize: 3,
    ...heading,
  },
  h4: {
    fontSize: 2,
    ...heading,
  },
  h5: {
    fontSize: 1,
    ...heading,
  },
  h6: {
    fontSize: 0,
    ...heading,
  },
  ul: {
    listStylePosition: 'outside',
    listStyleImage: 'none',
    ml: 3,
  },
  ol: {
    listStylePosition: 'outside',
    listStyleImage: 'none',
    ml: 3,
  },
  li: {
    mb: 2,
    pl: 0,
    ol: {
      my: 2,
      ml: 3,
    },
    ul: {
      my: 2,
      ml: 3,
    },
    p: {
      mb: 2,
    },
  },
  p: {},
  table: {
    borderCollapse: 'collapse',
    width: '100%',
  },
  th: {
    textAlign: 'left',
    borderBottom: '1px solid',
    px: 2,
    py: 1,
    ':first-child': {
      pl: 0,
    },
    ':last-child': {
      pr: 0,
    },
  },
  td: {
    textAlign: 'left',
    borderBottom: '1px solid',
    px: 2,
    py: 1,
    mt: '-1px',
    ':first-child': {
      pl: 0,
    },
    ':last-child': {
      pr: 0,
    },
  },
  blockquote: {
    mx: 3,
  },
  hr: {
    border: 0,
    borderBottom: '1px solid',
    mt: '-1px',
    mb: 3,
  },
  b: {
    fontWeight: 'bold',
  },
  strong: {
    fontWeight: 'bold',
  },
  code: {
    fontSize: '85%',
  },
  pre: {
    fontSize: '85%',
    padding: 3,
  },
}

const headings = ['h6', 'h5', 'h4', 'h3', 'h2', 'h1'] as const
const blockElements = [
  ...headings,
  'ul',
  'ol',
  'p',
  'pre',
  'table',
  'blockquote',
  'img',
  'hr',
] as const

export const styles: ThemeStyles = {
  ...baseStyles,
  ...blockElements.reduce(
    (style, tag) => ({
      ...style,
      [tag]: {
        padding: 0,
        margin: 0,
        marginBottom: 3,
        ...baseStyles[tag],
      },
    }),
    {}
  ),
}

export default styles
