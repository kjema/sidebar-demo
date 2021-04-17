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
      {({ open }: { open: boolean }) => (
        <div className="inline-block relative">
          <Menu.Button className="flex justify-center items-center p-1 w-8 h-8 rounded border border-gray-200 hover:bg-gray-100 focus:outline-none">
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
                className="absolute left-0 p-1 mt-1 w-44 text-xs font-normal bg-white rounded border border-gray-200 shadow-sm origin-top-left focus:outline-none"
              >
                <Menu.Item>
                  {({ active }) => (
                    <a
                      className={`${
                        active ? 'bg-gray-100' : ''
                      } flex items-center px-4 py-1 whitespace-no-wrap rounded cursor-default`}
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
                      } flex items-center px-4 py-1 whitespace-no-wrap rounded cursor-default`}
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
