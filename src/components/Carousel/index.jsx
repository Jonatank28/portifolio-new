import { useState } from 'react'

function Carousel({ projectSelectedHover }) {
    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrevClick = () => {
        setActiveIndex(
            activeIndex === 0
                ? projectSelectedHover.imageCarousel.length - 1
                : activeIndex - 1
        )
    }

    const handleNextClick = () => {
        setActiveIndex(
            activeIndex === projectSelectedHover.imageCarousel.length - 1
                ? 0
                : activeIndex + 1
        )
    }

    return (
        <div className="relative overflow-hidden h-[300px] sm:h-[500px] w-[100%]">
            <div className="relative">
                {projectSelectedHover.imageCarousel.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute w-full !transform-none opacity-0 transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none${
                            index === activeIndex
                                ? ' opacity-100'
                                : ' opacity-0'
                        }`}
                    >
                        <img
                            src={image}
                            alt={`Imagens carousel do projeto ${projectSelectedHover.title}`}
                            className="h-full w-full object-fit-container    "
                        />
                    </div>
                ))}
            </div>
            <button
                className="absolute left-0 top-[50px] sm:top-1/2 sm:transform-translate-y-1/2 z-10 text-white font-bold text-2xl px-2 sm:px-3 py-1 sm:py-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
                onClick={handlePrevClick}
            >
                &lt;
            </button>
            <button
                className="absolute right-0 top-[50px] sm:top-1/2 sm:transform-translate-y-1/2 z-10 text-white font-bold text-2xl px-2 sm:px-3 p-1 sm:py-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75"
                onClick={handleNextClick}
            >
                &gt;
            </button>
        </div>
    )
}

export default Carousel
