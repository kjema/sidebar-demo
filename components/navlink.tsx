import { AnimatePresence, motion } from 'framer-motion'

interface NavLinkProps {
  icon: React.ReactElement
  text: string
}

export default function NavLink({ icon, text }: NavLinkProps) {
  return (
    <li className="whitespace-no-wrap hover:bg-gray-200">
      <a href="#" className="flex items-center justify-center text-sm">
        {icon}
        <span className="flex-1 ml-3 sm:hidden xl:block xl:flex-1">{text}</span>
      </a>
      <style jsx>{`
        a {
          padding: 12px 26px;
        }

        @media (min-width: 640px) {
          a {
            padding: 12px 0;
          }
        }
        @media (min-width: 1280px) {
          a {
            padding: 12px 26px;
          }
        }
      `}</style>
    </li>
  )
}
