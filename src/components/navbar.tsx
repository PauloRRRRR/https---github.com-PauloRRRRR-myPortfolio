import React, { useState } from 'react';
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Navbar() {

    const[nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return(
        <div className="flex justify-between items-center w-full h-20 px-4 fixed bg-bege-300 font-bold text-zinc-900 ">
            <div>
                <h1 className="text-5xl ml-2">Meu portfolio</h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link}) => (
                    <li
                        key={id}
                        className="px-4 capitalize cursor-pointer hover:scale-110 duration-200"
                    >
                        {link}
                    </li>
                ))}
            </ul>
            <div>
                <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
                    {nav ? <CloseRoundedIcon/> : <DensityMediumRoundedIcon/> }
                </div>
                
                {nav && (
                    <ul className='flex flex-col justify-center items-center  top-40 left-[8rem] absolute   bg-gradient-to-b '>
                        {links.map(({ id, link}) => (
                            <li
                                key={id}
                                className="capitalize px-4 py-6 cursor-pointer text-4xl"
                            >
                                {link}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}