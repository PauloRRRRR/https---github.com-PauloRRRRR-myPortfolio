import React, { useState } from 'react';
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'portfolio' },
    { id: 4, link: 'experience' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed bg-primary-100 font-bold text-accent3">
      <div>
        <h1 className="text-5xl ml-2 font-pacifico">Paulo Ricardo</h1>
      </div>
      <ul className="hidden md:flex space-x-4">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="capitalize cursor-pointer hover:scale-110 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
      <div className="md:hidden">
        <div
          onClick={() => setNavOpen(!isNavOpen)}
          className="cursor-pointer pr-4 z-10"
        >
          {isNavOpen ? <CloseRoundedIcon /> : <DensityMediumRoundedIcon />}
        </div>

        {isNavOpen && (
          <ul className="flex flex-col justify-center items-center absolute top-20 left-8 bg-gradient-to-b">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="capitalize px-4 py-6 cursor-pointer text-4xl text-wine-700"
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
