import styled from 'styled-components';

export const ContainerTheme = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 18;
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
  background-color: ${props => props.theme.color.toggle};
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
  z-index: 17;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transition: 0.4s;
  z-index: 16;
  background-color: ${props => props.theme.color.toggle};

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
    background-color: ${props => props.theme.color.toggle};
    transition: 0.4s;
    opacity: 1;
    z-index: 15;
  }

  &.dark > div + div + div + div {
    opacity: 0;
    transition: 0.4s;
  }
`;
