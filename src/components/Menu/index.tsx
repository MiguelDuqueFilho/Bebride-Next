import { Container } from 'next/app';
import {
  ContainerMenu,
  Toggler,
  Hamburger,
  MenuData,
  MenuItens
} from './styles';
import { useState } from 'react';

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
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </MenuItens>
      </MenuData>
    </ContainerMenu>
  );
};

export default Menu;
