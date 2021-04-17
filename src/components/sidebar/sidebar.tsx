import { useState } from 'react'
import {
  CodeIcon,
  HamburgerMenuIcon,
  HomeIcon,
  ReaderIcon,
} from '@modulz/radix-icons'
import { motion } from 'framer-motion'

import s from './sidebar.module.css'
import NavLink from '../navlink'
import { UserMenu } from './user-menu'

export function Sidebar() {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)

  return (
    <aside className="relative flex-col border-b border-gray-100 bg-primary sm:border-r sm:fixed sm:flex sm:w-16 xl:w-64 sm:h-screen sm:border-b-0">
      <div className="flex items-center p-4 text-sm font-semibold sm:flex-col xl:flex-row">
        <div className="flex items-center flex-shrink-0 w-10 h-10 mr-2 text-white bg-black rounded sm:mr-0 xl:mr-2 justify-items-center">
          <span className="w-10 h-10 text-xs font-semibold leading-10 text-center">
            MK
          </span>
        </div>
        <div className="truncate sm:flex-1 sm:hidden xl:block">
          Marcus Kjell
        </div>
        <div className="relative flex-1 ml-3 sm:flex-initial sm:ml-0 sm:mt-2 xl:mt-0">
          <UserMenu />
        </div>
        <button
          onClick={() => {
            setSidebarIsOpen(!sidebarIsOpen)
          }}
          className="focus:outline-none sm:hidden"
        >
          <HamburgerMenuIcon />
        </button>
      </div>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: sidebarIsOpen ? 'auto' : 0 }}
        // transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
        className={s.sidebarItems}
      >
        <ul className="sm:block sm:flex-1">
          {[
            { text: 'Home', icon: <HomeIcon />, href: '/' },
            { text: 'Blog', icon: <ReaderIcon />, href: '/blog' },
            { text: 'Code Snippets', icon: <CodeIcon />, href: '/snippets' },
          ].map(({ text, icon, href }) => (
            <NavLink key={text} text={text} icon={icon} href={href} />
          ))}
        </ul>
      </motion.div>
    </aside>
  )
}

export default Sidebar
