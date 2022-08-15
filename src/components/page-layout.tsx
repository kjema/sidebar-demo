import Head from 'next/head'

interface PropsProps {
  children?: React.ReactNode
  className?: string
  meta?: typeof pageMeta
}

const pageMeta = {
  title: 'Marcus Kjell',
  description: `Front-end developer.`,
}

export default function PageLayout({ meta = pageMeta, children }: PropsProps) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      {children}
    </>
  )
}
