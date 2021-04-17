import Page from 'shared/Page'

interface HeadersProps {
  children?: React.ReactNode
  className?: string
}

export default function Headers({}: HeadersProps) {
  return (
    <Page meta={{ title: 'Code Snippets', description: '' }}>
      <h1>Code Snippets</h1>
      <span className="lead">
        These are a collection of code snippets I've used in the past and saved.
      </span>
      <p>
        This is a sample text with a <code>code</code> block.
      </p>
    </Page>
  )
}
