import { DotsHorizontalIcon } from '@modulz/radix-icons'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useState } from 'react'

// const cubicBezier = [0.4, 0, 0.2, 1]
const variants: Variants = {
  visible: {
    opacity: 1,
    transition: {
      opacity: { duration: 0.2, ease: 'easeOut' },
    },
  },
  hidden: {
    opacity: 0,
  },
}
// const variants = {
//   visible: {
//     opacity: 1,
//     transform: 'scale(1, 1)',
//     transition: {
//       opacity: { duration: 0.3, ease: cubicBezier },
//       transform: {
//         duration: 0.2,
//         ease: cubicBezier,
//       },
//     },
//   },
//   hidden: {
//     opacity: 0,
//     transform: 'scale(0.75, 0.5625)',
//     transition: {
//       opacity: { duration: 0.3, ease: cubicBezier },
//       transform: { duration: 0.2, ease: cubicBezier },
//       delay: 0.1,
//     },
//   },
// }

export default function MenuRadixUI() {
  const [open, setOpen] = useState<boolean>(false)

  const handleOpen = (open: boolean) => setOpen(open)

  return (
    <div className="inline-block relative">
      <DropdownMenu.Root open={open} onOpenChange={handleOpen}>
        <DropdownMenu.Trigger className="flex justify-center items-center p-1 w-8 h-8 rounded border border-gray-200 focus:outline-none">
          <DotsHorizontalIcon />
        </DropdownMenu.Trigger>
        <AnimatePresence>
          {open && (
            <DropdownMenu.Content
              forceMount
              align="start"
              className="p-1 mt-1 w-44 text-xs font-normal bg-white rounded border border-gray-200 shadow-sm origin-top-left focus:outline-none"
              as={motion.div}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              <DropdownMenu.Item
                className="flex py-1 px-4 rounded cursor-default whitespace-no-wrap focus:outline-none focus:bg-gray-100"
                onSelect={() => console.log('Account Settings')}
              >
                Account Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="m-1 h-px bg-gray-300" />
              <DropdownMenu.Item
                className="flex py-1 px-4 rounded cursor-default whitespace-no-wrap focus:outline-none focus:bg-gray-100"
                onSelect={() => console.log('Log out')}
              >
                Log out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          )}
        </AnimatePresence>
      </DropdownMenu.Root>
    </div>
  )
}
