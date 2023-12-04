import React from 'react'
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';

export default function Home() {
    return(
        <div
            name='home'
            className='h-screen w-full bg-gradient-to-b from-bege-300 via-bege-300 to-bege-100'    
        >
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row '>
                <div>
                    <img src="../src/assets/heroImage.png" alt="my self" className='rounded-full w-1/5'/>
                </div>
                <div className='bg-white p-4 rounded-md shadow-md flex '>
                    <div className='w-1/2'>
                        <h2 className='text-7xl text-wine-700'>Paulo Ricardo</h2>
                        <h3 className='text-4xl text-wine-700 mb-2'>Eu sou um Fullstack Dev</h3>
                        <p className='text-lg text-wine-700'>Experiência Profissional de mais de 1 ano em Web Development. Busco aprimorar ainda mais as minhas habilidades de análise e resolução de problemas, minha comunicação com a equipe e meus conhecimentos técnicos para que eu cresça e seja também uma ótima adição à empresa.</p>
                        <div>
                            <button className='text-bege-100 w-fit px-6 pt-3 my-2 flex items-center rounded-md bg-gradient-to-r from-wine-700 to-wine-500 cursor-pointer p-2'>
                                Download CV
                                {/* <span className='rotate-180 hover:rotate-180'>
                                    <ArrowBackIosNewRoundedIcon/>
                                </span> */}
                            </button>
                        </div>
                    </div>
                    <div className='flex-col w-1/2'>
                                Desenvolvimento
                    </div>
                </div>
                
            </div>
        </div>
    )
}