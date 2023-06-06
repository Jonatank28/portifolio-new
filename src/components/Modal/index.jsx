import Link from 'next/link'
import { useEffect, useRef, useContext } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import Carousel from '../Carousel'

const Modal = ({ isOpen, onClose, projectSelectedHover }) => {
    const modalRef = useRef(null)
    const { language } = useContext(LanguageContext)

    // Faz com que o foco do teclado fique dentro do modal
    const handleTabKey = (e) => {
        if (e.key === 'Escape') {
            onClose()
        }
        if (e.key === 'Tab') {
            const focusableElements = modalRef.current.querySelectorAll(
                'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
            )
            const firstElement = focusableElements[0]
            const lastElement = focusableElements[focusableElements.length - 1]

            if (e.shiftKey && e.target === firstElement) {
                e.preventDefault()
                lastElement.focus()
            } else if (!e.shiftKey && e.target === lastElement) {
                e.preventDefault()
                firstElement.focus()
            }
        }
    }

    // Não deixa o scroll da pagina acontecer quando o modal estiver aberto
    useEffect(() => {
        if (isOpen) {
            modalRef.current.focus()
            document.body.classList.add('modal-open')
        } else {
            document.body.classList.remove('modal-open')
        }
    }, [isOpen])

    // Fecha o modal quando o usuário clica fora dele
    useEffect(() => {
        const handleOverlayClick = (e) => {
            if (e.target === modalRef.current) {
                onClose()
            }
        }
        document.addEventListener('click', handleOverlayClick)
        return () => {
            document.removeEventListener('click', handleOverlayClick)
        }
    }, [onClose])

    return (
        <>
            {/* Overlay do modal */}
            {isOpen && <div className="overlay"></div>}
            {/* Modal */}
            {isOpen && (
                <div
                    ref={modalRef}
                    className="fixed z-50 inset-0 overflow-y-auto"
                    aria-modal="true"
                    tabIndex="-1"
                    role="dialog"
                    onKeyDown={handleTabKey}
                >
                    {/* className=" w-full absolute top-10 overflow-hidden" */}
                    <div className="h-screen flex justify-center items-center">
                        <div className="bg-secundary rounded-lg w-11/12 md:w-[1200px] mx-auto relative ">
                            {/* Cabeçalho do modal */}
                            <div className="px-4 pt-2 pb-1 bg-primary rounded-t-lg ">
                                <div className="flex items-center justify-between mb-4 ">
                                    <h2 className="text-primary text-xl font-bold">
                                        {projectSelectedHover?.title}
                                    </h2>
                                    <button onClick={onClose}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6 text-secondary"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            aria-hidden="true"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="p-4">
                                {/* Conteudo do modal */}
                                <div className="flex flex-col md:flex-row gap-0 md:gap-4">
                                    <div className="w-full md:w-2/3">
                                        <div class="w-full">
                                            {/*? Carousel com as imagens dos projetos */}
                                            <Carousel
                                                projectSelectedHover={
                                                    projectSelectedHover
                                                }
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full md:w-1/3 ">
                                        <div>
                                            <h4 className="text-lg font-bold">
                                                {language === 'pt'
                                                    ? 'Descrição'
                                                    : 'Description'}
                                            </h4>
                                            <p className="text-primary text-sm py-2">
                                                {
                                                    projectSelectedHover.description
                                                }
                                            </p>
                                        </div>
                                        <div className="">
                                            <h4 className="text-lg font-bold">
                                                {language === 'pt'
                                                    ? 'Tecnologias utilizadas'
                                                    : 'Technologies used'}
                                            </h4>
                                            <div className="flex gap-2 pt-2">
                                                {projectSelectedHover.tecs.map(
                                                    (tec, index) => (
                                                        <span
                                                            className="text-xs text-white bg-decoration p-1 rounded-md w-[min(48px, auto)] text-center"
                                                            key={index}
                                                        >
                                                            {tec}
                                                        </span>
                                                    )
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Botões de ação do modal */}
                                <div className="flex justify-between items-center mt-4">
                                    <div>
                                        <button
                                            className="border border-red-500 hover:bg-red-600 text-red-500 hover:text-white p-1 md:p-3 text-xs rounded-md w-18 md:w-28"
                                            onClick={onClose}
                                        >
                                            {language === 'pt'
                                                ? 'Fechar'
                                                : 'Close'}
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Link
                                            href={
                                                projectSelectedHover.repository
                                            }
                                            target="_blank"
                                            className="bg-blue-500 hover:bg-blue-600 text-white  text-center p-1 md:p-3 text-xs rounded-md w-18 md:w-28"
                                        >
                                            {language === 'pt'
                                                ? 'Repositório'
                                                : 'Repository'}
                                        </Link>
                                        <Link
                                            href={projectSelectedHover.link}
                                            target="_blank"
                                            className="bg-green-500 hover:bg-green-600 text-white text-center  p-1 md:p-3 text-xs rounded-md w-18 md:w-28"
                                        >
                                            {language === 'pt'
                                                ? 'Ver projeto'
                                                : 'See project'}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
