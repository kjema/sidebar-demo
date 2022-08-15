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
    <div className="relative inline-block">
      <DropdownMenu.Root open={open} onOpenChange={handleOpen}>
        <DropdownMenu.Trigger className="flex h-8 w-8 items-center justify-center rounded border border-gray-200 p-1 focus:outline-none">
          <DotsHorizontalIcon />
        </DropdownMenu.Trigger>
        <AnimatePresence>
          {open && (
            <DropdownMenu.Content
              forceMount
              align="start"
              className="mt-1 w-44 origin-top-left rounded border border-gray-200 bg-white p-1 text-xs font-normal shadow-sm focus:outline-none"
              as={motion.div}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              <DropdownMenu.Item
                className="whitespace-no-wrap flex cursor-default rounded py-1 px-4 focus:bg-gray-100 focus:outline-none"
                onSelect={() => console.log('Account Settings')}
              >
                Account Settings
              </DropdownMenu.Item>
              <DropdownMenu.Separator className="m-1 h-px bg-gray-300" />
              <DropdownMenu.Item
                className="whitespace-no-wrap flex cursor-default rounded py-1 px-4 focus:bg-gray-100 focus:outline-none"
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
