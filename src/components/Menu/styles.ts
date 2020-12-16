import styled from 'styled-components';

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 12;
`;

export const Toggler = styled.input`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  opacity: 0;
  z-index: 13;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background-color: ${props => props.theme.color.buttonHover};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.4s;
  z-index: 12;

  > div {
    position: absolute;
    width: 50%;
    height: 3px;
    border-radius: 1.5px;
    background-color: ${props => props.theme.color.white};
    transition: 0.4s;
  }

  > div:before,
  > div:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 1.5px;
    background-color: ${props => props.theme.color.white};
    transition: 0.4s;
  }

  > div:before {
    top: -8px;
    transition: 0.4s;
  }

  > div:after {
    top: 8px;
    transition: 0.4s;
  }

  &.checked {
    transform: rotate(135deg);

    > div:before,
    > div:after {
      transform: rotate(90deg);
      top: 0;
    }
  }
`;

export const MenuData = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  visibility: hidden;
  transition: 0.6s;

  &.checked {
    visibility: visible;
  }
`;

export const MenuItens = styled.div`
  position: absolute;
  width: 2400px;
  height: 1600px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-150%) translateY(-50%);
  -webkit-transform: translate3d(-150%, -50%, 0);
  background: linear-gradient(
    -45deg,
    ${props => props.theme.color.gradiente} 50%,
    ${props => props.theme.color.primary} 100%
  );

  transition: 1.5s;
  display: flex;
  justify-content: center;
  align-items: center;

  > div {
    max-width: 90vw;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    opacity: 0;
    transition: 0.6s;
  }

  &.checked {
    transform: translateX(-50%) translateY(-50%);
    -webkit-transform: translate3d(-50%, -50%, 0);
  }

  &.checked > div {
    opacity: 1;
  }

  > div > ul > li {
    list-style: none;
  }

  > div > ul > li > a {
    text-decoration: none;
    margin: 0.5rem;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 550;
    /* text-transform: uppercase; */
    color: #fff;
    transition: 0.3s;
  }

  > div > ul > li > a:hover {
    color: ${props => props.theme.color.black};
  }
`;

export const ThemeSelect = styled.input`
  position: absolute;
  top: 0.5rem;
  left: calc(100vw - 0.5rem - 45px);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0;
  opacity: 1;
  z-index: 12;
  cursor: pointer;
  background-color: ${props => props.theme.color.buttonHover};
`;

export const ThemeSelected = styled.div`
  position: absolute;
  top: 0.5rem;
  left: calc(100vw - 0.5rem - 45px);
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 0;
  opacity: 1;
  z-index: 13;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.4s;
  z-index: 13;
  background-color: ${props => props.theme.color.buttonHover};

  > div {
    position: absolute;
    width: 50%;
    height: 50%;
    /* border-radius: 50%; */
    background-color: ${props => props.theme.color.white};
    transition: 0.4s;
    z-index: 13;
  }

  &:not(.dark) > div {
    width: 60%;
    height: 60%;
    border-radius: 50%;
  }

  > div + div {
    position: absolute;
    width: 50%;
    height: 50%;
    transform: rotate(45deg);
    /* border-radius: 50%; */
    background-color: ${props => props.theme.color.white};
    transition: 0.4s;
    z-index: 13;
  }
  > div + div + div {
    position: absolute;
    width: 50%;
    height: 50%;
    /* border-radius: 50%; */
    background-color: ${props => props.theme.color.white};
    transition: 0.4s;
    z-index: 13;
  }

  > div + div + div + div {
    position: absolute;
    top: 0.4rem;
    left: 1rem;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    background-color: ${props => props.theme.color.buttonHover};
    transition: 0.4s;
    opacity: 1;
    z-index: 15;
  }

  &.dark > div + div + div + div {
    opacity: 0;
    transition: 0.4s;
  }
`;
