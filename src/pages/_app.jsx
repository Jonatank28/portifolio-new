import '@/styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/contexts/languageContext'
import 'aos/dist/aos.css'
import AOS from 'aos'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <ThemeProvider attribute="class">
            <LanguageProvider>
                <Component {...pageProps} />
            </LanguageProvider>
        </ThemeProvider>
    )
}
