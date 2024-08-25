import '@/styles/globals.css'
import '@/styles/icons.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import type { AppProps } from 'next/app'
// import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

config.autoAddCss = false

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
    
}
