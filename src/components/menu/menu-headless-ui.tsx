import { Menu } from '@headlessui/react'
import { DotsHorizontalIcon } from '@modulz/radix-icons'
import { AnimatePresence, motion, Variants } from 'framer-motion'

interface MenuHeadlessUIProps {
  children?: React.ReactNode
  className?: string
}

const cubicBezier = [0.4, 0, 0.2, 1]
const variants: Variants = {
  visible: {
    opacity: 1,
    transform: 'scale(1, 1)',
    transition: {
      opacity: { duration: 0.3, ease: cubicBezier },
      transform: {
        duration: 0.2,
        ease: cubicBezier,
      },
    },
  },
  hidden: {
    opacity: 0,
    transform: 'scale(0.75, 0.5625)',
    transition: {
      opacity: { duration: 0.3, ease: cubicBezier },
      transform: { duration: 0.2, ease: cubicBezier },
      delay: 0.1,
    },
  },
}

export default function MenuHeadlessUI({}: MenuHeadlessUIProps) {
  return (
    <Menu>
      {({ open }) => (
        <div className="relative inline-block">
          <Menu.Button className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 p-1 hover:bg-gray-100 focus:outline-none">
            <DotsHorizontalIcon />
          </Menu.Button>
          <AnimatePresence>
            {open && (
              <Menu.Items
                as={motion.div}
                static
                // initial={{ opacity: 0, transform: 'scale(0.75, 0.5625)' }}
                // animate={{ opacity: 1, transform: 'scale(1, 1)' }}
                // exit={{ opacity: 0, transform: 'scale(0.75, 0.5625)' }}
                // transition={{ duration: 0.175 }}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                className="absolute left-0 mt-1 w-44 origin-top-left rounded border border-gray-200 bg-white p-1 text-[12px] font-normal shadow-sm focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } whitespace-no-wrap flex cursor-default items-center rounded px-4 py-1`}
                      href="#"
                    >
                      Account Settings
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
                      } whitespace-no-wrap flex cursor-default items-center rounded px-4 py-1`}
                      href="#"
                    >
                      Log out
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            )}
          </AnimatePresence>
        </div>
      )}
    </Menu>
  )
}
