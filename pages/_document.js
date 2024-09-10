import Document, { Html, Main, NextScript, Head } from 'next/document'

import { GA_TRACKING_ID } from '@/lib/gtag'

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
            href='https://randymorales.dev/rss.xml'
          />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <script
            src='https://kit.fontawesome.com/2c36e9b7b1.js'
            crossOrigin='anonymous'
            async
          ></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {GA_TRACKING_ID ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}');
              `,
                }}
              />
            </>
          ) : null}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
