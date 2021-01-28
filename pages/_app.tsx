import '@assets/base.css'
import 'tailwindcss/tailwind.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import Sidebar from '@components/core/Sidebar/Sidebar.tsx'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className="flex flex-col sm:flex-row">
        {/* Sidebar */}
        <Sidebar />
        <div className="sm:pl-16 xl:pl-64">
          <main
            className="container px-4 py-12 mx-auto"
            style={{ padding: '2rem 26px' }}
          >
            <Component {...pageProps} />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default MyApp
