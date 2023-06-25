import { contacts } from '../Home/data'
import { LanguageContext } from '@/contexts/languageContext'
import Link from 'next/link'
import { useContext } from 'react'

const Footer = () => {
    const { language } = useContext(LanguageContext)

    return (
        <footer className="bg-secundary" id="contact">
            <div className="w-defaut mx-auto flex flex-col items-center justify-center gap-4 p-10">
                <h1 className="text-primary text-2xl font-bold">Jonatan</h1>
                <div className="flex gap-6 items-center ">
                    {contacts.map((contact, index) => (
                        <Link
                            href={contact.url}
                            target="_blank"
                            key={index}
                            className="bg-gray-700/30 hover:bg-gray-700/70 transition-colors rounded-full text-white p-3 cursor-pointer"
                        >
                            <contact.icon className="text-base cursor-pointer" />
                        </Link>
                    ))}
                </div>
                <div className="flex justify-center w-screen">
                    {language === 'pt' ? (
                        <p className="text-xs text-secondary">
                            Copyright © {new Date().getFullYear()} Jonatan.
                            Todos os direitos reservados.
                        </p>
                    ) : (
                        <p className="text-xs text-secondary">
                            Copyright © {new Date().getFullYear()} Jonatan. All
                            rights reserved.
                        </p>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer
