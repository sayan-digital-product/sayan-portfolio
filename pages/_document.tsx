import { Html, Head, Main, NextScript } from 'next/document'
import { getInitColorSchemeScript } from '@mui/material/styles';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/ico" sizes="500x500"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
      </Head>
      <body>
        {getInitColorSchemeScript()}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
