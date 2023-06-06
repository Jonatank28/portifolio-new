import { FiNavigation } from 'react-icons/fi'
import { projects } from '../Project/data'
import { LanguageContext } from '@/contexts/languageContext'
import { useContext, useState } from 'react'
import Link from 'next/link'
import Modal from '../Modal'

const Card = ({
    category,
    description,
    img,
    key,
    className,
    onClick,
    projectHover,
    projectSelectedHover,
    onMouseOver,
    onMouseOut,
}) => {
    const { language } = useContext(LanguageContext)
    const [isNavigationIconHovered, setIsNavigationIconHovered] =
        useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    function openModal() {
        setIsModalOpen(true)
    }

    function closeModal() {
        setIsModalOpen(false)
    }

    return (
        <>
            <div
                style={{ zIndex: '1' }}
                className="flex flex-col bg-card p-3 rounded-xl relative cursor-pointer"
                key={key}
                onMouseOver={() => {
                    setIsNavigationIconHovered(true)
                    onMouseOver()
                }}
                onMouseOut={() => {
                    setIsNavigationIconHovered(false)
                    onMouseOut()
                }}
                onClick={openModal}
            >
                <div className="overflow-hidden flex justify-center items-center w-full">
                    <img
                        src={img}
                        className="object-cover object-left transform hover:scale-110 transition duration-500 ease-in-out w-full h-[300px] rounded-md"
                        alt=""
                    />
                </div>
                <div className="pt-2">
                    <span className={className}>{category}</span>
                    <div className="grid grid-cols-12 items-center gap-4">
                        <p className="pt-4 text-sm opacity-70 col-span-10 sm:col-span-11">
                            {description}
                        </p>
                        <FiNavigation
                            className="col-span-2 sm:col-span-1 cursor-pointer text-3xl hover:bg-decoration hover:text-white p-2 rounded-md"
                            onClick={onClick}
                            onMouseOver={() => setIsNavigationIconHovered(true)}
                            onMouseOut={() => setIsNavigationIconHovered(false)}
                        />
                    </div>
                </div>
                {/* Vai aparecer quando o mouse estiver sobre o card*/}
                {isNavigationIconHovered &&
                    projects &&
                    projects[language].find(
                        (project) => project.id === projectHover?.id
                    ) && (
                        <div>
                            <h1 className="absolute top-4 left-[45%] text-decoration text-xl font-semibold">
                                {projectHover.title}
                            </h1>
                        </div>
                    )}
            </div>
            {/* É chamado quando o usuário clica no card  */}
            <Modal
                isOpen={isModalOpen}
                onClose={closeModal}
                projectSelectedHover={projectSelectedHover}
            />
        </>
    )
}

export default Card
