import { types, projects } from './data'
import Card from '../Card'
import { useState, useEffect, useContext, use } from 'react'
import { LanguageContext } from '@/contexts/languageContext'

const Project = () => {
    const { language } = useContext(LanguageContext)
    const [typeSelected, setTypeSelected] = useState(types[language][0].id)
    const [projectSelected, setProjectSelected] = useState(projects[language])
    const [projectHover, setProjectHover] = useState(null)
    const [projectSelectedHover, setProjectSelectedHover] = useState(null)

    //  Função para filtrar os projetos por tipo
    function ClickTypeSelected(id) {
        setTypeSelected(id)
        setProjectSelected(
            projects[language].filter((project) => {
                if (id === 1) {
                    return projects[language]
                } else {
                    return project.typeID === id
                }
            })
        )
    }
    // Função para atualizar os projetos de acordo com o idioma
    useEffect(() => {
        setProjectSelected(projects[language])
    }, [language])

    return (
        <section id="projects" className="py-16 bg-secundary z-40">
            <div className="w-defaut mx-auto">
                <div>
                    <h1 className="text-3xl font-bold mb-6 text-primary">
                        Projetos
                    </h1>
                    <div className="flex items-center gap-4 cursor-pointer">
                        {types[language].map((type, index) => (
                            <div
                                key={index}
                                className="mb-6"
                                onClick={() => ClickTypeSelected(type.id)}
                            >
                                <span
                                    className={`${
                                        typeSelected === type.id
                                            ? 'text-decoration'
                                            : ''
                                    } text-xl font-bold mb-4`}
                                >
                                    {type.title}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {projectSelected &&
                        projectSelected.map((project) => (
                            <Card
                                key={project.id}
                                category={
                                    types[language][project.typeID - 1].title
                                }
                                description={project.description}
                                img={project.image}
                                id={project.id}
                                onMouseOver={() => {
                                    setProjectHover(project)
                                    setProjectSelectedHover(project)
                                }}
                                onMouseOut={() => setProjectHover(null)}
                                className={`
                                ${
                                    project.typeID === 1 &&
                                    'bg-gray-200 text-gray-700'
                                }
                                ${
                                    project.typeID === 2 &&
                                    'bg-blue-200 text-gray-700'
                                }
                                ${
                                    project.typeID === 3 &&
                                    'bg-yellow-200 text-gray-700'
                                }
                                rounded-md p-1`}
                                projectHover={projectHover}
                                projectSelectedHover={projectSelectedHover}
                            />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default Project
