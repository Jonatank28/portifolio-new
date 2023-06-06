import { useState, useEffect } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import { useTheme } from 'next-themes'

const ToggleToTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const { theme } = useTheme()

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    const handleScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <>
            {isVisible && (
                <div
                    className={`fixed bottom-8 right-8  p-2 rounded-lg
                ${
                    theme === 'dark'
                        ? ' hover:bg-gray-600 text-white'
                        : ' hover:bg-gray-400 text-black'
                }
                bg-secundary
                `}
                >
                    <button className="toggle-to-top" onClick={handleScrollTop}>
                        <FaArrowUp className="text-xl" />
                    </button>
                </div>
            )}
        </>
    )
}

export default ToggleToTop
