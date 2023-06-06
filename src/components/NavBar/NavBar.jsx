import { Link as ScrollLink } from 'react-scroll'
import { useContext, useState, useEffect } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { LanguageContext } from '@/contexts/languageContext'
import { linksNavBar } from './data'
import ThemeToggle from '@/layout/ThemeToggle'

const NavBar = () => {
    const { language } = useContext(LanguageContext)
    const [selectedLink, setSelectedLink] = useState(1)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    // estado para saber se o navbar está fixado
    const [navbarFixed, setNavbarFixed] = useState(false)
    // estado para saber se é mobile
    const [isMobile, setIsMobile] = useState(false)

    // Função que verifica se a tela é menor que 640px para ativar o menu mobile
    const handleResize = () => {
        if (window.innerWidth < 640) {
            setIsMobile(true)
            setNavbarFixed(false)
        } else {
            setIsMobile(false)
        }
    }

    // Verifica se a tela é menor que 640px para ativar o menu mobile
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMobile])

    // Verifica se o scroll é maior que 100vh e se não é mobile para fixar o navbar
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100 && isMobile == false) {
                setNavbarFixed(true)
            } else {
                setNavbarFixed(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [navbarFixed, isMobile])

    return (
        <header
            className={` z-40
            ${
                navbarFixed
                    ? 'fixed bg-secundary w-screen mt-0 p-4 transition-all duration-300 ease-in-out shadow-lg'
                    : 'mt-0 sm:mt-10 transition-all duration-300 ease-in-out'
            }
            `}
        >
            {/* Desktop menu */}
            <div
                className="hidden w-defaut sm:mx-auto sm:flex sm:justify-between sm:items-center sm:pl-1 sm:pr-1"
                style={{ zIndex: '2' }}
            >
                {/* Logo */}
                <img
                    src="https://github.com/Jonatank28.png"
                    alt="Logo"
                    className="w-10 h-10 rounded-full"
                />
                {/* Navigation menu */}
                <nav>
                    <ul className="flex items-center gap-8">
                        {linksNavBar.map((link) => (
                            <li key={link.id}>
                                <ScrollLink
                                    activeClass="text-decoration"
                                    to={link.href.substring(1)}
                                    spy={true}
                                    smooth={true}
                                    offset={navbarFixed ? -50 : -350}
                                    duration={900}
                                    className={`cursor-pointer text-base font-semibold hover:text-primary transition-colors duration-300 ${
                                        selectedLink === link.id
                                            ? 'text-decoration'
                                            : 'text-secondary'
                                    }`}
                                    onClick={() => setSelectedLink(link.id)}
                                >
                                    {language === 'pt'
                                        ? link.titleBR
                                        : link.titleEN}
                                </ScrollLink>
                            </li>
                        ))}
                        <ThemeToggle />
                    </ul>
                </nav>
            </div>

            {/* Mobile menu */}
            <div
                className="sm:hidden absolute flex items-center gap-4 top-8 right-8"
                style={{ zIndex: '999999999' }}
            >
                <ThemeToggle />
                <GiHamburgerMenu
                    className="cursor-pointer"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                />
            </div>

            {mobileMenuOpen && (
                <div className="sm:hidden h-screen w-screen">
                    <div className="flex flex-col items-center justify-center h-screen">
                        {/* Logo */}
                        <img
                            src="#"
                            alt="Logo"
                            className="w-10 h-10 rounded-full mb-4"
                        />
                        {/* Navigation menu */}
                        <nav>
                            <ul className="flex flex-col gap-4">
                                {linksNavBar.map((link) => (
                                    <li key={link.id}>
                                        <Link
                                            href={link.href}
                                            onClick={() =>
                                                setSelectedLink(link.id)
                                            }
                                            className={`text-base font-semibold hover:text-primary transition-colors duration-300 ${
                                                selectedLink === link.id
                                                    ? 'text-decoration'
                                                    : 'text-secondary'
                                            }`}
                                        >
                                            {language === 'pt'
                                                ? link.titleBR
                                                : link.titleEN}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    )
}

export default NavBar
