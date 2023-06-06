const types = {
    pt: [
        {
            id: 1,
            title: "Todos",
        },
        {
            id: 2,
            title: "Sistemas",
        },
        {
            id: 3,
            title: "subSistemas",
        },
    ],
    en: [
        {
            id: 1,
            title: "All",
        },
        {
            id: 2,
            title: "Systems",
        },
        {
            id: 3,
            title: "subSystems",
        },
    ],
};

const projects = {
    pt: [
        {
            id: 1,
            title: "John Notes",
            description: "Sistema que possibilita a criação de notas e listas de tarefas, com a possibilidade de editar, excluir e favoritar as notas.",
            typeID: 2,
            image: "carousel/jhonNotes/notesDark2.jpg",
            imageCarousel: ["carousel/jhonNotes/notesDark2.jpg", "carousel/jhonNotes/notesNewNote.jpg", "carousel/jhonNotes/notesWhite.jpg", "carousel/jhonNotes/opcoesTag.jpg"],
            repository: "https://github.com/Jonatank28/Projeto-Notes",
            link: "https://projeto-notes.vercel.app",
            tecs: ["Next.js", "Tailwind", "Formik", "Yup"],
        },
        {
            id: 2,
            title: "Poke Next",
            description: "Pokedex desenvolvida em Next.js, com a possibilidade de pesquisar pokemons, ver detalhes.",
            typeID: 3,
            image: "/pokeNext.png",
            imageCarousel: ["carousel/pokeNext/home.jpg", "carousel/pokeNext/descricao.jpg"],
            repository: "https://github.com/Jonatank28/Pokedex-em-Next",
            link: "https://pokedex-em-next.vercel.app",
            tecs: ["Next.js", "Stitches", "Axios"],
        },
        {
            id: 3,
            title: "GitFav",
            description: "Projeto desenvolvido no curso Explorer da Rocketseat, com o intuito de favoritar repositórios do github, e ver detalhes do mesmo.",
            typeID: 3,
            image: "gitFav.jpg",
            imageCarousel: ["carousel/GitFav/home.jpg", "carousel/GitFav/remover.jpg"],
            repository: "https://github.com/Jonatank28/GITHUB-FAVORITES",
            link: "https://jonatank28.github.io/GITHUB-FAVORITES/",
            tecs: ["JavaScript", "HTML", "CSS"],
        },
        {
            id: 4,
            title: "FocusTimer",
            description: "Projeto desenvolvido no curso Explorer da Rocketseat, o memso é um timer para foco, com a possibilidade de pausar, e reiniciar o timer.",
            typeID: 3,
            image: "FocusTimer.jpg",
            imageCarousel: ["carousel/FocusTimer/ligth.jpg", "carousel/FocusTimer/dark.jpg"],
            repository: "https://github.com/Jonatank28/FocusTimer2.0-DarkMode",
            link: "https://jonatank28.github.io/FocusTimer2.0-DarkMode/",
            tecs: ["JavaScript", "HTML", "CSS"],
        },
    ],
    en: [
        {
            id: 1,
            title: "John Notes",
            description: "System that allows the creation of notes and task lists, with the possibility of editing, deleting and favoring the notes.",
            typeID: 2,
            image: "carousel/jhonNotes/notesDark2.jpg",
            imageCarousel: ["carousel/jhonNotes/notesDark2.jpg", "carousel/jhonNotes/notesNewNote.jpg", "carousel/jhonNotes/notesWhite.jpg", "carousel/jhonNotes/opcoesTag.jpg"],
            repository: "https://github.com/Jonatank28/Projeto-Notes",
            link: "https://projeto-notes.vercel.app",
            tecs: ["Next.js", "Tailwind", "Formik", "Yup"],
        },
        {
            id: 2,
            title: "Poke Next",
            description: "Pokedex developed in Next.js, with the possibility of searching for pokemons, viewing details.",
            typeID: 3,
            image: "/pokeNext.png",
            imageCarousel: ["carousel/pokeNext/home.jpg", "carousel/pokeNext/descricao.jpg"],
            repository: "https://github.com/Jonatank28/Pokedex-em-Next",
            link: "https://pokedex-em-next.vercel.app",
            tecs: ["Next.js", "Stitches", "Axios"],
        },
        {
            id: 3,
            title: "GitFav",
            description: "Project developed in the Rocketseat Explorer course, in order to bookmark github repositories, and see details of it.",
            typeID: 3,
            image: "gitFav.jpg",
            imageCarousel: ["carousel/GitFav/home.jpg", "carousel/GitFav/remover.jpg"],
            repository: "https://github.com/Jonatank28/GITHUB-FAVORITES",
            link: "https://jonatank28.github.io/GITHUB-FAVORITES/",
            tecs: ["JavaScript", "HTML", "CSS"],
        },
        {
            id: 4,
            title: "FocusTimer",
            description: "Project developed in the Rocketseat Explorer course, it is a focus timer, with the possibility of pausing, and restarting the timer.",
            typeID: 3,
            image: "FocusTimer.jpg",
            imageCarousel: ["carousel/FocusTimer/ligth.jpg", "carousel/FocusTimer/dark.jpg"],
            repository: "https://github.com/Jonatank28/FocusTimer2.0-DarkMode",
            link: "https://jonatank28.github.io/FocusTimer2.0-DarkMode/",
            tecs: ["JavaScript", "HTML", "CSS"],
        },
    ],
};

export { types, projects }