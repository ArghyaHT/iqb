import { DropdownProvider } from '@/context/DropdownContext';
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <DropdownProvider>
    <Component {...pageProps} />
    </DropdownProvider>
  )
}
