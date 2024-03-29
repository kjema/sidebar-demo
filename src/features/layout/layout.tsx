import Nav from 'features/nav'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <Nav />
      <main className="w-screen">
        <div className="mx-auto max-w-3xl px-6 pt-36 pb-20 lg:px-0">
          {children}
        </div>
      </main>
    </>
  )
}
