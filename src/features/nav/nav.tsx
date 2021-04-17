import { SunIcon } from '@modulz/radix-icons'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { ActiveLink } from './active-link'

export default function Nav() {
  const { theme, setTheme } = useTheme()
  return (
    <nav className="fixed top-0 left-0 flex items-center w-screen h-16 bg-white dark:bg-gray-900 shadow-borderLight dark:shadow-borderDark">
      <div className="flex items-center flex-grow max-w-3xl px-6 mx-auto lg:px-0">
        <Link href="/">
          <a className="text-sm font-black tracking-wide uppercase">MK</a>
        </Link>
        <ul className="flex flex-1 h-16 mx-4">
          <li className="h-16">
            <ActiveLink
              href="/components"
              className="inline-flex h-full px-4 text-sm font-semibold transition-opacity duration-200 ease-in-out place-items-center hover:opacity-100"
              activeClassName=""
              inactiveClassName="opacity-50"
            >
              {() => 'Components'}
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/snippets"
              className="inline-flex h-full px-4 text-sm font-semibold transition-opacity duration-200 ease-in-out place-items-center hover:opacity-100"
              activeClassName=""
              inactiveClassName="opacity-50"
            >
              {() => <span>Code Snippets</span>}
            </ActiveLink>
          </li>
          <li className="h-16">
            <ActiveLink
              href="/about"
              className="inline-flex h-full px-4 text-sm font-semibold transition-opacity duration-200 ease-in-out place-items-center hover:opacity-100"
              activeClassName=""
              inactiveClassName="opacity-50"
            >
              {() => <span>About</span>}
            </ActiveLink>
          </li>
        </ul>
        <button
          className="inline-flex items-center justify-center w-6 h-6 rounded-full cursor-default focus:outline-none hover:bg-gray-50 active:bg-gray-200 dark:hover:bg-gray-800"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <SunIcon />
        </button>
      </div>
    </nav>
  )
}
