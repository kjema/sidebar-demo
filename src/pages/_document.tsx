import NextDocument, { Head, Html, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en" className="overflow-x-hidden antialiased">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-white text-base text-black dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
