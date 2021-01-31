import { ActiveLink } from './active-link'

interface NavLinkProps {
  icon: React.ReactElement
  text: string
  href: string
}

export default function NavLink({ icon, text, href }: NavLinkProps) {
  return (
    <li className="whitespace-no-wrap">
      <ActiveLink
        href={href}
        className="flex items-center justify-center text-sm font-medium"
        style={{ padding: '12px 26px' }}
        activeClassName="bg-gray-100"
        inactiveClassName="hover:bg-gray-50"
      >
        {({ isActive }) => (
          <>
            {icon}
            <span className="flex-1 ml-3 sm:hidden xl:block xl:flex-1">
              {text}
            </span>
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
          </>
        )}
      </ActiveLink>
    </li>
  )
}
