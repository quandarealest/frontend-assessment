import React from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { Hydrate, QueryClient, QueryClientProvider, DehydratedState } from 'react-query'
import { Global } from '../styles/Global'

import Layout from '../components/Layout'

interface CustomPageProps {
  dehydratedState: DehydratedState
}

function MyApp({ Component, pageProps }: AppProps<CustomPageProps>) {
  const [queryClient] = React.useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Global />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Hydrate>
    </QueryClientProvider>
  )
}

export default MyApp
