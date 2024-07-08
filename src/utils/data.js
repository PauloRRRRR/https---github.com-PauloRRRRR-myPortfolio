import {
    IoLogoJavascript,
    IoLogoHtml5,
    IoLogoReact ,
    IoLogoNodejs, 
} from 'react-icons/io5';
import { RiTailwindCssFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si';

export const PROFILE_DATA = {
    profilePicture: "https://github.com/PauloRRRRR.png",
    name: "Paulo Silva",
    tagline: `Desenvolvedor Fullstack com mais de 2 anos de experiência`,
    jobTitle: "Desenvolvedor Fullstack",
    location: "Brasil",
    yearOfExperience: 2,
    skills: [
        "React.js",
        "Javascript",
        "HTML",
        "CSS",
        "Git",
        "Bootstrap",
        "Redux",
        "Node.js",
        "RESTful APIs",
    ],
    email: "paulorns06@gmail.com",
    phone: "+55 81 9 9595-7956",
    website: "github.com/PauloRRRRR"
};

export const SKILLS = [
    {
        id: "01",
        icon: IoLogoJavascript,
        title: "JavaScript",
        comment: `JavaScript é a minha paixão`,
    },
    {
        id: "02", // Corrigido para um ID único
        icon: IoLogoHtml5,
        title: "Html5",
        comment: `Html5 é a minha paixão`,
    },
    {
        id: "03", // Corrigido para um ID único
        icon: IoLogoReact ,
        title: "React",
        comment: `React é a minha paixão`,
    },
    {
        id: "04", // Corrigido para um ID único
        icon: IoLogoNodejs,
        title: "Node.js", // Corrigido para "Node.js"
        comment: `Node.js é a minha paixão`,
    },
];

export const WORK_EXPERIENCE = [
    {
        id: "01",
        company: 'Motorola',
        position: "QA",
        duration: '2022-2024',
        description: 'Testando tudos'
    },
    {
        id: "02",
        company: 'Educandus',
        position: "Desenvolvedor Fullstack",
        duration: '2020-2022',
        description: 'Desenvolvendo tudos'
    },
];

export const ABOUT_ME_DATA = {
    introduction: "Introdução sobre mim",
    background: "minha jornada até aqui",
    skills: "minhas habilidades",
    projects: "meus proxetinhos",
    interests: "meus interesses",
    careerGoals: "meus objetivos",
    stats: {
        yearsOfExperience: "2+",
        numberOfProjects: 20,
        certificationsEarned: 8,
    },
};
    