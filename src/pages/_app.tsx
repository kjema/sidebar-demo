import { Layout } from '@features/layout'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import '../css/base.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <div id="__root">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  )
}
