import Document, { Html, Head, Main, NextScript } from 'next/document'
import { repositoryName } from 'prismicio'

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en-us">
        <Head />
        <body>
          <Main />
          <NextScript />
          <script
            async
            defer
            src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${repositoryName}`}
          />
        </body>
      </Html>
    )
  }
}
