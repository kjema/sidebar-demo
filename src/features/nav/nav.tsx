import { SunIcon } from '@modulz/radix-icons'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import { ActiveLink } from './active-link'

export default function Nav() {
  const { theme, setTheme } = useTheme()
  return (
    <nav className="fixed top-0 left-0 flex h-16 w-screen items-center bg-white shadow-borderLight dark:bg-gray-900 dark:shadow-borderDark">
      <div className="mx-auto flex max-w-3xl flex-grow items-center px-6 lg:px-0">
        <Link href="/">
          <a className="text-sm font-black uppercase tracking-wide">MK</a>
        </Link>
        <ul className="mx-4 flex h-16 flex-1">
          <li className="h-16">
            <ActiveLink
              href="/components"
              className="inline-flex h-full place-items-center px-4 text-sm font-semibold transition-opacity duration-200 ease-in-out hover:opacity-100"
              activeClassName=""
              inactiveClassName="opacity-50"
            >
              {() => 'Components'}
            </ActiveLink>
          </li>
          <li>
            <ActiveLink
              href="/snippets"
              className="inline-flex h-full place-items-center px-4 text-sm font-semibold transition-opacity duration-200 ease-in-out hover:opacity-100"
              activeClassName=""
              inactiveClassName="opacity-50"
            >
              {() => <span>Code Snippets</span>}
            </ActiveLink>
          </li>
          <li className="h-16">
            <ActiveLink
              href="/about"
              className="inline-flex h-full place-items-center px-4 text-sm font-semibold transition-opacity duration-200 ease-in-out hover:opacity-100"
              activeClassName=""
              inactiveClassName="opacity-50"
            >
              {() => <span>About</span>}
            </ActiveLink>
          </li>
        </ul>
        <button
          className="inline-flex h-6 w-6 cursor-default items-center justify-center rounded-full hover:bg-gray-50 focus:outline-none active:bg-gray-200 dark:hover:bg-gray-800"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <SunIcon />
        </button>
      </div>
    </nav>
  )
}
