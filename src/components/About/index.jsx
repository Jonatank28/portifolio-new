import { LanguageContext } from '@/contexts/languageContext'
import { useContext, useState, useEffect } from 'react'
import { texts, about } from './data'
import Link from 'next/link'

const About = () => {
    const { language } = useContext(LanguageContext)
    const [t3Formatted, setT3Formatted] = useState(texts[language].t3)

    // Verifica se o idioma foi alterado e formata o texto novamente com a classe de decoração
    useEffect(() => {
        const regex = new RegExp('(Jonatan)', 'g')
        const regex1 = new RegExp('(React)', 'g')
        const regex2 = new RegExp('(Node)', 'g')
        const regex3 = new RegExp('(MySQL)', 'g')
        const newT3 = texts[language].t3
            .replace(regex, '<span class="text-decoration font-bold">$1</span>')
            .replace(
                regex1,
                '<span class="text-decoration font-bold">$1</span>'
            )
            .replace(
                regex2,
                '<span class="text-decoration font-bold">$1</span>'
            )
            .replace(
                regex3,
                '<span class="text-decoration font-bold">$1</span>'
            )
        setT3Formatted(newT3)
    }, [language])

    return (
        <div className="bg-secundary py-16" id="about">
            <div className="w-defaut mx-auto sm:grid sm:grid-cols-5 sm:gap-4">
                <div className="col-span-2 p-4">
                    <img
                        src="/my.png"
                        alt="Foto de usuário"
                        className="w-full"
                    />
                </div>
                <div className="col-span-3">
                    <h1 className="text-primary text-2xl font-extrabold pt-3">
                        {texts[language].t1}.
                    </h1>
                    <p className="text-decoration text-sm font-bold tracking-widest pb-6">
                        {texts[language].t2}
                    </p>
                    <div className="flex flex-col gap-2 text-secondary font-secondary">
                        <p
                            dangerouslySetInnerHTML={{ __html: t3Formatted }}
                        ></p>
                        <p>{texts[language].t4}</p>

                        <p>{texts[language].t5}</p>
                    </div>
                    <div className="divider mt-3"></div>
                    <div className="grid grid-cols-2 gap-1 sm:gap-x-4 pt-6">
                        {about[language].map((item) => (
                            <div key={item.id} className="text-xs sm:text-sm">
                                {item.link ? (
                                    <Link
                                        href={item.link}
                                        className="text-primary font-semibold font-secondary"
                                    >
                                        {item.title}:{' '}
                                        <span className="text-secondary font-secondary font-normal hover:opacity-90 transition-all duration-100">
                                            {item.text}
                                        </span>
                                    </Link>
                                ) : (
                                    <p className="text-primary font-semibold font-secondary">
                                        {item.title}:{' '}
                                        <span className="text-secondary font-normal font-secondary">
                                            {item.text}
                                        </span>
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
