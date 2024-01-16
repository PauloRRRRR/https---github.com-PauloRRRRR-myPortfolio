import React, { useState } from 'react';
import DensityMediumRoundedIcon from '@mui/icons-material/DensityMediumRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Overlay from './Overlay'; // Certifique-se de ajustar o caminho para o seu componente Overlay

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
    <>
      <Overlay isNavOpen={isNavOpen} setNavOpen={setNavOpen} />
      <div className="fixed top-0 left-0 p-4 z-30 md:hidden">
        <div
          onClick={() => setNavOpen(!isNavOpen)}
          className="cursor-pointer"
        >
          {isNavOpen ? <CloseRoundedIcon /> : <DensityMediumRoundedIcon />}
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full h-20 px-4 fixed bg-primary-100 font-bold text-accent3">
        <div>
          <h1 className="text-3xl ml-2 font-pacifico">Paulo</h1>
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
        {isNavOpen && (
          <ul className="flex flex-col items-center bg-primary-300 h-full left-0 top-0 fixed">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="capitalize px-1 py-1 cursor-pointer text-4xl m-4"
                onClick={() => {
                  setNavOpen(false); // Fechar o menu ao clicar em uma seção
                  // Adicionar lógica adicional conforme necessário ao clicar em uma seção
                }}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
