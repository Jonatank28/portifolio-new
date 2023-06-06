import { createContext, useState, useEffect } from 'react'

export const LanguageContext = createContext({})

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('pt')

    useEffect(() => {
        window.localStorage.setItem('language', language)
    }, [language])

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}
