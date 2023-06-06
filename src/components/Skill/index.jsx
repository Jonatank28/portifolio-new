import { techs } from './data'
import { useState, useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'

const Skill = () => {
    const { language } = useContext(LanguageContext)
    const [selectedTech, setSelectedTech] = useState()

    return (
        <section id="skills" className="bg-primary">
            <div className="w-defaut mx-auto  py-16">
                <h1 className="text-3xl font-bold mb-6 text-primary">Skills</h1>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
                    <div className="w-full">
                        <p className="text-gray-600 text-sm">
                            {selectedTech ? (
                                <span className="font-bold">
                                    {selectedTech}
                                </span>
                            ) : language === 'pt' ? (
                                'Passe o mouse sobre a tecnologia para saber mais'
                            ) : (
                                'Hover over the technology to learn more'
                            )}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 w-full">
                        {techs[language].map((tech, index) => (
                            <div
                                onMouseMove={() =>
                                    setSelectedTech(tech.description)
                                }
                                onMouseLeave={() => setSelectedTech()}
                                key={index}
                                className="relative flex flex-col items-center justify-center bg-secundary rounded-lg shadow-lg p-4 w-24 h-24 hover:shadow-2xl transition duration-300 ease-in-out"
                            >
                                <tech.icon
                                    style={{ color: tech.color }}
                                    className="text-5xl"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill
