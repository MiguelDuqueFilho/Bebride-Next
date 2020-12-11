import Link from 'next/link';
import React, { useState } from 'react';

import {
  ContainerMenu,
  Toggler,
  Hamburger,
  MenuData,
  MenuItens
} from './styles';

const Menu: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const handeChangeMenu = () => {
    setToggle(!toggle);
  };

  return (
    <ContainerMenu className="menu-container">
      <Toggler type="checkbox" className="toggler" onChange={handeChangeMenu} />
      <Hamburger className={`hamburger ${toggle ? 'checked' : ''}`}>
        <div></div>
      </Hamburger>
      <MenuData className={`menu ${toggle ? 'checked' : ''}`}>
        <MenuItens className={`${toggle ? 'checked' : ''}`}>
          <div>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Serviços</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a>Login/Registro</a>
                </Link>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
        </MenuItens>
      </MenuData>
    </ContainerMenu>
  );
};

export default Menu;
