import '../css/base.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

import { Sidebar } from '@components/sidebar/sidebar'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div id="__root" className="flex flex-col sm:flex-row">
        <Sidebar />
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  )
}
