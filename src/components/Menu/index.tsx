import Link from 'next/link';

import React, { useState } from 'react';

import {
  ContainerMenu,
  ContainerToggle,
  Toggler,
  Hamburger,
  MenuData,
  MenuItens
} from './styles';

function Menu() {
  const [toggle, setToggle] = useState(false);

  const handeChangeMenu = () => {
    setToggle(!toggle);
  };

  const handeClickMenu = (e: React.MouseEvent) => {
    setToggle(false);
  };

  return (
    <ContainerMenu className="menu-container">
      <ContainerToggle>
        <Toggler
          type="checkbox"
          className="toggler"
          onChange={handeChangeMenu}
        />
        <Hamburger className={`hamburger ${toggle ? 'checked' : ''}`}>
          <div></div>
        </Hamburger>
      </ContainerToggle>
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
                <Link href="/pagesample">
                  <a onClick={handeClickMenu}>Page Sample</a>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <a onClick={handeClickMenu}>Login/Registrar</a>
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
}

export default Menu;
