// importar iconos de react-icons
import { FaHtml5, FaCss3Alt, FaNode, FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiMysql } from 'react-icons/si'


const techs = {
    pt: [
        {
            id: 1,
            name: 'HTML',
            description: 'HTML5 é uma linguagem de marcação que descreve a estrutura de uma página da Web.',
            icon: FaHtml5,
            color: '#e34c26'
        },
        {
            id: 2,
            name: 'CSS',
            description: 'CSS é uma linguagem de estilo usada para descrever a apresentação de um documento escrito em HTML ou XML.',
            icon: FaCss3Alt,
            color: '#264de4'
        },
        {
            id: 3,
            name: 'JavaScript',
            description: 'JavaScript é uma linguagem de programação de alto nível, interpretada e orientada a objetos.',
            icon: SiJavascript,
            color: '#f0db4f'
        },
        {
            id: 4,
            name: 'React',
            description: 'React é uma biblioteca JavaScript de código aberto para construir interfaces de usuário.',
            icon: FaReact,
            color: '#61dbfb'
        },
        {
            id: 5,
            name: 'Next',
            description: 'Next.js é um framework React de código aberto que permite a construção de aplicativos da web do lado do servidor e do lado do cliente.',
            icon: SiNextdotjs,
            color: '#000000'
        },
        {
            id: 6,
            name: 'Tailwind',
            description: 'Tailwind CSS é um framework CSS de código aberto que fornece classes pré-construídas para a criação de interfaces de usuário.',
            icon: SiTailwindcss,
            color: '#06b6d4'
        },
        {
            id: 7,
            name: 'Node JS',
            description: 'Node.js é um ambiente de tempo de execução de código aberto construído no motor V8 do Google Chrome para executar JavaScript do lado do servidor.',
            icon: FaNode,
            color: '#68a063'
        },
        {
            id: 8,
            name: 'MySQL',
            description: 'MySQL é um sistema de gerenciamento de banco de dados relacional de código aberto.',
            icon: SiMysql,
            color: '#4479a1'
        },
    ],
    en: [
        {
            id: 1,
            name: 'HTML',
            description: 'HTML5 is a markup language that describes the structure of a web page.',
            icon: FaHtml5,
            color: '#e34c26'
        },
        {
            id: 2,
            name: 'CSS',
            description: 'CSS is a style language used to describe the presentation of a document written in HTML or XML.',
            icon: FaCss3Alt,
            color: '#264de4'
        },
        {
            id: 3,
            name: 'JavaScript',
            description: 'JavaScript is a high-level, interpreted, object-oriented programming language.',
            icon: SiJavascript,
            color: '#f0db4f'
        },
        {
            id: 4,
            name: 'React',
            description: 'React is an open source JavaScript library for building user interfaces.',
            icon: FaReact,
            color: '#61dbfb'
        },
        {
            id: 5,
            name: 'Next',
            description: 'Next.js is an open source React framework that enables the building of server-side and client-side web applications.',
            icon: SiNextdotjs,
            color: '#000000'
        },
        {
            id: 6,
            name: 'Tailwind',
            description: 'Tailwind CSS is an open source CSS framework that provides pre-built classes for creating user interfaces.',
            icon: SiTailwindcss,
            color: '#06b6d4'
        },
        {
            id: 7,
            name: 'Node JS',

            description: 'Node.js is an open source runtime environment built on Google Chrome\'s V8 engine for running JavaScript on the server side.',
            icon: FaNode,
            color: '#68a063'
        },
        {
            id: 8,
            name: 'MySQL',
            description: 'MySQL is an open source relational database management system.',
            icon: SiMysql,
            color: '#4479a1'
        },
    ]
}

export { techs }
