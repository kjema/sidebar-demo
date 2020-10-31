import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import {
  DashboardIcon,
  ReaderIcon,
  PieChartIcon,
  GearIcon,
  PersonIcon,
  DotsHorizontalIcon,
  HamburgerMenuIcon,
} from '@modulz/radix-icons'
import React from 'react'
import NavLink from '@/components/navlink'
import { motion, AnimatePresence, animate } from 'framer-motion'

function MyApp({ Component, pageProps }: AppProps) {
  const [sidebarIsOpen, setSidebarIsOpen] = React.useState(false)
  return (
    <div className="flex flex-col sm:flex-row">
      {/* Sidebar */}
      <aside className="relative flex-col overflow-hidden bg-white border-b border-gray-300 sm:border-r sm:fixed sm:flex sm:w-16 xl:w-64 sm:h-screen sm:border-b-0">
        <div className="flex items-center p-4 text-sm font-semibold sm:flex-col xl:flex-row">
          <div className="flex items-center flex-shrink-0 w-10 h-10 mr-2 text-white bg-black rounded sm:mr-0 xl:mr-2 justify-items-center">
            <span className="w-10 h-10 text-xs font-semibold leading-10 text-center">
              MK
            </span>
          </div>
          <div className="truncate sm:flex-1 sm:hidden xl:block">
            Marcus Kjell
          </div>
          <button className="flex-1 ml-3 sm:ml-0 sm:mt-2 xl:mt-0">
            <DotsHorizontalIcon />
          </button>
          <button
            onClick={() => {
              setSidebarIsOpen(!sidebarIsOpen)
            }}
            className="sm:hidden"
          >
            <HamburgerMenuIcon />
          </button>
        </div>
        <motion.div
          // initial={{ height: 0 }}
          animate={{ height: sidebarIsOpen ? 'auto' : 0 }}
          className="flex flex-col sm:h-full"
        >
          <ul className="sm:block sm:flex-1">
            {[
              { text: 'Dashboard', icon: <DashboardIcon /> },
              { text: 'Incidents', icon: <ReaderIcon /> },
              { text: 'Reports', icon: <PieChartIcon /> },
            ].map(({ text, icon }, i) => (
              <NavLink key={text} text={text} icon={icon} />
            ))}
          </ul>
          <ul className="pb-4 sm:py-6">
            {[{ text: 'Settings', icon: <GearIcon /> }].map(
              ({ text, icon }) => (
                <NavLink key={text} text={text} icon={icon} />
              ),
            )}
          </ul>
        </motion.div>
      </aside>
      <div className="bg-white sm:pl-16 xl:pl-64">
        <main
          className="container px-4 py-12 mx-auto"
          style={{ padding: '2rem 26px' }}
        >
          <Component {...pageProps} />
        </main>
      </div>
    </div>
  )
}

export default MyApp
