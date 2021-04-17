import Nav from '@features/nav'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      {/* <Sidebar /> */}
      <Nav />
      <main className="w-screen">
        <div className="max-w-3xl px-6 pb-20 mx-auto pt-36 lg:px-0">
          {children}
        </div>
      </main>
    </>
  )
}
