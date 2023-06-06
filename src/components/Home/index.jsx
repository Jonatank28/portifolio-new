import { useState, useContext, useEffect } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import { contacts, titles } from './data'
import Link from 'next/link'

const Home = () => {
    const { language } = useContext(LanguageContext)
    const [currentItemIndex, setCurrentItemIndex] = useState(0)

    // Animation for the titles in the home page
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentItemIndex((currentItemIndex) =>
                currentItemIndex === titles[language].t4.length - 1
                    ? 0
                    : currentItemIndex + 1
            )
        }, 4000)

        return () => clearInterval(intervalId)
    }, [language])

    return (
        <section className="bg-primary">
            <section
                id="home"
                className=" w-defaut mx-auto justify-between sm:justify-between items-center flex flex-col sm:flex-row mt-[80px] py-[50px] sm:py-[0px] sm:mt-[0px]"
                style={{ height: 'calc(100vh - 80px)' }}
            >
                <div className="bg-secundary p-6 rounded-lg w-full">
                    <h1 className="text-lg">
                        {titles[language].t1}
                        <span className="uppercase">
                            {' '}
                            {titles[language].t2}
                        </span>
                    </h1>
                    <div className="w-full sm:w-9/12 pt-2">
                        <p className="uppercase font-light text-[22px] sm:text-2xl pb-4">
                            {titles[language].t3}{' '}
                            <span className="font-semibold text-decoration">
                                <span className="font-semibold text-decoration">
                                    <span
                                        key={
                                            titles[language].t4[
                                                currentItemIndex
                                            ].id
                                        }
                                        className="typing-animation"
                                    >
                                        {
                                            titles[language].t4[
                                                currentItemIndex
                                            ].name
                                        }
                                    </span>
                                </span>
                            </span>
                        </p>
                        <p>{titles[language].t5} </p>
                        <button className="bg-decoration hover:bg-decoration_secudary transition-all duration-200 p-3 rounded-lg text-white mt-10">
                            {titles[language].t6}
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center  w-full">
                    <div className="flex  sm:flex-col gap-6 text-2xl">
                        {contacts.map((item) => (
                            <div
                                key={item.id}
                                className="cursor-pointer p-3 rounded-lg transition-all duration-200 hover:bg-decoration hover:text-white"
                            >
                                <Link
                                    href={
                                        item.id === 1
                                            ? `mailto:${item.url}`
                                            : item.id === 2
                                            ? `tel:${item.url}`
                                            : item.url
                                    }
                                    target="_blank"
                                >
                                    {<item.icon />}
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Home
