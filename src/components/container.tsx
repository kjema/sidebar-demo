import Head from 'next/head'

interface ContainerProps {
  children?: React.ReactNode
  className?: string
}

const meta = {
  title: 'Marcus Kjell',
  description: `Front-end developer.`,
}

export function Container({ children }: ContainerProps) {
  return (
    <main className="flex-1 sm:pl-16 xl:pl-64">
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name="description" />
      </Head>
      <div className="max-w-3xl px-6 pt-16 pb-20 mx-auto">{children}</div>
    </main>
  )
}
