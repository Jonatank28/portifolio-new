import { useContext, useState } from 'react'
import { LanguageContext } from '@/contexts/languageContext'
import { optionsLanguage } from './data'

const SelectLanguage = () => {
    const { language, setLanguage } = useContext(LanguageContext)
    const [options, setOptions] = useState(true)

    // Função que abre o menu de opções de idioma
    function handleOutsideClick() {
        setOptions(!options)
    }

    // Função que seleciona o idioma e fecha o menu de opções
    function handleSelectLanguage(value) {
        setLanguage(value)
        setOptions(!options)
    }

    return (
        /* ------------------------------*/
        /* Vai aparecer apenas no Desktop */
        /* -------------------------------*/
        <div
            className={`hidden sm:flex bg-primary fixed top-1/2 rounded-md transform ${
                options
                    ? 'opacity-90 right-[-120px]'
                    : 'translate-x-0 opacity-100 right-0'
            } flex items-center gap-2 p-2 shadow-lg transition-all duration-500`}
        >
            <div
                onClick={handleOutsideClick}
                className="cursor-pointer opacity-80 w-12 h-12 flex items-center justify-center bg-white rounded-full transition-all duration-50"
            >
                <img
                    className="rounded-full w-10 h-10"
                    src={
                        language === 'pt'
                            ? 'https://static.todamateria.com.br/upload/ba/nd/bandeira-do-brasil-og.jpg'
                            : 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/05/bandeira-estados-unidos.jpg'
                    }
                    alt="Bandeira conforme o idioma selecionado"
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center center',
                    }}
                />
            </div>
            <div className="flex flex-col gap-1">
                {optionsLanguage.map((option) => (
                    <button
                        className={`${
                            language === option.value
                                ? 'bg-decoration text-white'
                                : 'bg-white text-black'
                        } transition-colors duration-500 px-4 py-2 rounded-md`}
                        key={option.id}
                        onClick={() => handleSelectLanguage(option.value)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>
        </div>

        /* ------------------------------*/
        /* Vai aparecer apenas no Mobile */
        /* -------------------------------*/
    )
}

export default SelectLanguage
