import '@/styles/globals.css'
import '@/styles/icons.css'
import type { AppProps } from 'next/app'
// import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';

export default function App({ Component, pageProps }: AppProps) {
  return (
      <Component {...pageProps} />
  )
    
}
