// importar react icons
import { FaGithub, FaLinkedin, FaVoicemail, FaPhone, FaWhatsapp } from 'react-icons/fa';

const contacts = [
    {
        id: 1,
        name: 'E-mail',
        url: 'jonatankalmeidakk5@gmail.com',
        icon: FaVoicemail,
    },
    {
        id: 2,
        name: 'Telefone',
        url: '(49) 9 8435-6670',
        icon: FaPhone,
    },
    {
        id: 3,
        name: 'Github',
        url: 'https://github.com/Jonatank28',
        icon: FaGithub,
    },
    {
        id: 4,
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/jonatan-s-almeida-4b817b226/',
        icon: FaLinkedin,
    },
    {
        id: 5,
        name: 'Whatsapp',
        url: 'https://api.whatsapp.com/send?phone=5549984356670&text=Ol%C3%A1%2C%20tudo%20bem%3F%20%20%20',
        icon: FaWhatsapp,
    },
];

const titles = {
    pt: {
        t1: 'Bem vindo, meu nome é',
        t2: 'Jonatan',
        t3: 'Eu sou',
        t4: [
            {
                id: 1,
                name: 'Desenvolvedor front end',
            },
            {
                id: 2,
                name: 'Desenvolvedor back end',
            },
            {
                id: 3,
                name: 'Desenvolvedor mobile',
            },
        ],
        t5: `
        Pense em uma agência digital criativa como a Dreamy em
        Paris, transformando seus sonhos em realidade.
        `,
        t6: 'Resumo',
    },
    en: {
        t1: 'Welcome, my name is',
        t2: 'Jonatan',
        t3: 'I am',
        t4: [
            {
                id: 1,
                name: 'Front end developer',
            },
            {
                id: 2,
                name: 'Back end developer',
            },
            {
                id: 3,
                name: 'Mobile developer',
            },
        ],
        t5: `
        Think of a creative digital agency like Dreamy in
        Paris, turning your dreams into reality.
      `,
        t6: 'Summary',
    },
};


export { contacts, titles };