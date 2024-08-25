import { Html, Head, Main, NextScript } from 'next/document'
import { getInitColorSchemeScript } from '@mui/material/styles';
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/ico" sizes="500x500"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon-180x180.png" />
        <meta name="msapplication-TileImage" content="/favicon.png" />
        <Script id="microsoft-clarity-analytics">
          {`
            (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "nsxfosed8s");
          `}
        </Script>
      </Head>
      <body>
        {getInitColorSchemeScript()}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
