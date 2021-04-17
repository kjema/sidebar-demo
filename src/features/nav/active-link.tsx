import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

interface ActiveLinkProps extends LinkProps {
  activeClassName: string
  children: ({ isActive }: { isActive: boolean }) => React.ReactNode
  className?: string
  inactiveClassName: string
  style?: React.CSSProperties
}

export function ActiveLink({
  activeClassName,
  children,
  className,
  href,
  inactiveClassName,
  style,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let currentClassName = className
  const isActive = asPath === href
  if (isActive) {
    currentClassName += ` ${activeClassName}`
  } else {
    currentClassName += ` ${inactiveClassName}`
  }

  return (
    <Link href={href} {...rest}>
      <a className={currentClassName} style={style}>
        {children({ isActive })}
      </a>
    </Link>
  )
}
