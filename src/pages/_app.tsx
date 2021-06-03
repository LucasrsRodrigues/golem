import { AppProps } from "next/dist/next-server/lib/router/router"
import { MenuProvider } from "../hook/Menu"

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {


  return (
    <MenuProvider>
      <Component {...pageProps} />
    </MenuProvider>
  )
}

export default MyApp
