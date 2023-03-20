import { AppProvider } from '@/components/context/contect'
import Layout from '@/components/Layout/Layout'
import LoadingBar from '@/components/Loading/LoadingBar'
import '@/styles/globals.css'
import { SessionProvider } from "next-auth/react"
import { useContext } from 'react'

export default function App({ Component, pageProps: { session, ...pageProps } }) {


  return (
    <SessionProvider session={session} refetchInterval={5 * 60}>
      <AppProvider>
        <LoadingBar />
        <Component {...pageProps} />
      </AppProvider>
    </SessionProvider>
  )
}

