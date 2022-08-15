import Link from 'next/link'

interface BlogLinkProps {
  href: string
  children: React.ReactNode
}

export default function BlogLink({ href, children }: BlogLinkProps) {
  return (
    <Link href={href}>
      <a className="mb-5 inline-block text-2xl font-black tracking-wide text-gray-900 dark:text-gray-200">
        {children}
      </a>
    </Link>
  )
}
