import React, { useState } from 'react'
import { Menu } from '@headlessui/react'
import {
  DotsHorizontalIcon,
  HamburgerMenuIcon,
  DashboardIcon,
  ReaderIcon,
  PieChartIcon,
  GearIcon,
} from '@modulz/radix-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

import s from './Sidebar.module.css'
import NavLink from '../../navlink'

const Sidebar = () => {
  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <aside className="relative flex-col border-b border-gray-300 bg-primary sm:border-r sm:fixed sm:flex sm:w-16 xl:w-64 sm:h-screen sm:border-b-0">
      <div className="flex items-center p-4 text-sm font-semibold sm:flex-col xl:flex-row">
        <div className="flex items-center flex-shrink-0 w-10 h-10 mr-2 rounded text-secondary bg-secondary sm:mr-0 xl:mr-2 justify-items-center">
          <span className="w-10 h-10 text-xs font-semibold leading-10 text-center">
            MK
          </span>
        </div>
        <div className="truncate sm:flex-1 sm:hidden xl:block">
          Marcus Kjell
        </div>
        <div className="relative flex-1 ml-3 sm:flex-initial sm:ml-0 sm:mt-2 xl:mt-0">
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button className="flex items-center justify-center w-8 h-8 outline-none">
                  <DotsHorizontalIcon />
                </Menu.Button>
                <AnimatePresence>
                  {open && (
                    <Menu.Items
                      as={motion.div}
                      static
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 z-10 py-1 text-xs font-normal border border-gray-200 rounded shadow-sm bg-primary focus:outline-none"
                    >
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } flex items-center px-6 py-1 whitespace-no-wrap`}
                            href="#"
                            onClick={() =>
                              theme === 'dark'
                                ? setTheme('light')
                                : setTheme('dark')
                            }
                          >
                            {theme == 'dark' ? 'Night Mode' : 'Day Mode'}
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } flex items-center px-6 py-1 whitespace-no-wrap`}
                            href="#"
                          >
                            Switch Context
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        <div
                          style={{
                            backgroundColor: '#eee',
                            height: '1px',
                            margin: '4px 0',
                            padding: '0',
                          }}
                        ></div>
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            className={`${
                              active ? 'bg-gray-100' : ''
                            } flex items-center px-6 py-1 whitespace-no-wrap`}
                            href="#"
                          >
                            Sign Out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  )}
                </AnimatePresence>
              </>
            )}
          </Menu>
        </div>
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
        initial={{ height: 0 }}
        animate={{ height: sidebarIsOpen ? 'auto' : 0 }}
        className="flex flex-col overflow-hidden sm:h-full"
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
          {[{ text: 'Settings', icon: <GearIcon /> }].map(({ text, icon }) => (
            <NavLink key={text} text={text} icon={icon} />
          ))}
        </ul>
      </motion.div>
    </aside>
  )
}

export default Sidebar
