import { route } from 'next/dist/next-server/server/router';
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
  const handeClickMenu = (e: React.MouseEvent) => {
    setToggle(false);
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
                  <a onClick={handeClickMenu}>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a onClick={handeClickMenu}>Serviços</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a onClick={handeClickMenu}>Login/Registro</a>
                </Link>
              </li>
              <li>
                <a onClick={handeClickMenu} href="#">
                  Sobre
                </a>
              </li>
              <li>
                <a onClick={handeClickMenu} href="#">
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </MenuItens>
      </MenuData>
    </ContainerMenu>
  );
};

export default Menu;