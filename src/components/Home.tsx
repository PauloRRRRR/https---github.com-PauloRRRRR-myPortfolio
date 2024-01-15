import React from 'react';
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export default function Home() {
    return (
        <div className='h-screen w-full bg-gradient-to-b '>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='md:flex md:flex-col md:items-center md:mb-4'>
                    <div className='text-center'>
                        <h2 className='text-2xl text-darkColor-100'>Paulo Ricardo</h2>
                    </div>
                    <div className='text-center mt-4'>
                        <h2 className='text-2xl text-darkColor-100'>Eu sou um Fullstack Dev</h2>
                    </div>
                    <div className='text-center mt-4'>
                        <h2 className='text-darkColor-100 w-fit px-6 pt-3 my-2 flex items-center rounded-md bg-gradient-to-r from-primary-200 to-wine-400 cursor-pointer p-2'>Experiência Profissional de mais de 1 ano em Web Development. Busco aprimorar ainda mais as minhas habilidades de análise e resolução de problemas, minha comunicação com a equipe e meus conhecimentos técnicos para que eu cresça e seja também uma ótima adição à empresa.</h2>
                    </div>
                </div>

                <div className='mb-4'>
                    <img src="../src/assets/heroImage.png" alt="my self" className='mx-auto'/>
                </div>

                <div className='md:flex md:flex-col md:items-center'>
                    <div className='text-center'>
                        <h2 className='text-2xl text-darkColor-100'>pauloricardonds6@gmail.com</h2>
                    </div>
                    <div className='text-center mt-4'>
                        <h2 className='text-primary-100 text-2xl w-fit px-6 pt-3 my-2 flex items-center rounded-md bg-gradient-to-r from-accent1-200 to-accent1-100 cursor-pointer p-2'>Download CV</h2>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}
