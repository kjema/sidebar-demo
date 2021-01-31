import { Menu } from '@headlessui/react'
import { DotsHorizontalIcon } from '@modulz/radix-icons'
import { AnimatePresence, motion } from 'framer-motion'
import { useTheme } from 'next-themes'

interface Props {
  children?: React.ReactNode
  className?: string
}

export function UserMenu({}: Props) {
  const { theme, setTheme } = useTheme()
  return (
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
                className="absolute left-0 z-10 py-1 text-xs font-normal bg-white border border-gray-200 rounded shadow-sm focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex items-center px-6 py-1 whitespace-no-wrap`}
                      href="#"
                      onClick={() =>
                        theme === 'dark' ? setTheme('light') : setTheme('dark')
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
  )
}
