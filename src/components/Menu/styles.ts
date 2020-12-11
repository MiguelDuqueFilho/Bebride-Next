import styled from 'styled-components';

export const ContainerMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

export const Toggler = styled.input`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 0;
  z-index: 3;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #111;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.4s;
  z-index: 2;

  > div {
    position: absolute;
    width: 50%;
    height: 3px;
    border-radius: 1.5px;
    background-color: #fff44f;
    transition: 0.4s;
  }

  > div:before,
  > div:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    border-radius: 1.5px;
    background-color: #fff44f;
    transition: 0.4s;
  }

  > div:before {
    top: -10px;
    transition: 0.4s;
  }

  > div:after {
    top: 10px;
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
  width: 1660px;
  height: 1600px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-150%) translateY(-50%);
  background-color: rgba(0, 0, 0, 0.9);
  transition: 0.6s;
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
    text-transform: uppercase;
    color: #fff;
    transition: 0.3s;
  }

  > div > ul > li > a:hover {
    color: #fff44f;
  }
`;
