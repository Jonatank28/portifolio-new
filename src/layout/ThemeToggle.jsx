import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FaSun, FaMoon } from 'react-icons/fa'

const ToggleThemes = ({ className, ...props }) => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    function handleClickTheme() {
        if (theme === 'dark') {
            setTheme('light')
        } else {
            setTheme('dark')
        }
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div
            className={`
                ${
                    theme === 'dark'
                        ? 'bg-gray-800 hover:bg-gray-600 text-white'
                        : 'bg-gray-300 hover:bg-gray-400 text-black'
                }
                p-2 rounded-md flex justify-center items-center transition duration-500 ease-in-out
            `}
        >
            <button
                style={{ zIndex: '99999' }}
                onClick={handleClickTheme}
                className={className}
                {...props}
            >
                {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
        </div>
    )
}

export default ToggleThemes
