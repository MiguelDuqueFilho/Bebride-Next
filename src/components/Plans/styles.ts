import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.color.background};
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Cormorant Garamond', serif;
`;

export const ContainerItens = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 2rem 6rem;

  > h2 {
    font-size: 2.7rem;
    line-height: 1.5em;
    color: ${props => props.theme.color.primary};
    text-align: center;
  }
  > span {
    margin-top: 3rem;
    color: ${props => props.theme.color.title};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1.5rem;
  }
`;

export const ContainerWhatsApp = styled.div``;

export const ButtonWhatsApp = styled.a`
  padding: 0.75rem 1.75rem;
  margin-top: 3rem;
  font-family: 'romantisch';
  font-size: 1.6rem;
  font-weight: 400;
  color: ${props => props.theme.color.buttonText};
  border-radius: 49px;
  background-color: ${props => props.theme.color.button};
  text-decoration: none;
  transition: 0.3s;
  display: inline-block;
  cursor: pointer;

  > svg {
    margin-top: 3px;
    margin-right: 1rem;
    vertical-align: top;
  }

  &:hover {
    background-color: ${props => props.theme.color.buttonHover};
  }
`;
