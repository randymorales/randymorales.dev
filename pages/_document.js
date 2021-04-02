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
          <script
            src='https://kit.fontawesome.com/2c36e9b7b1.js'
            crossOrigin='anonymous'
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
