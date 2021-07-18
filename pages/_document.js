import Document, { Html, Main, NextScript, Head } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel='alternate'
            type='application/rss+xml'
            title='RSS feed for blog posts'
            href='https://randymorales.dev/rss-en.xml'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
          <script
            src='https://kit.fontawesome.com/2c36e9b7b1.js'
            crossOrigin='anonymous'
            async
          ></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
