import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 3rem 0;
  margin: 3rem 0;
  background-color: ${props => props.theme.color.toggle};
`;

export const ContainerContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10px;
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
  font-family: 'Cormorant Garamond', serif;
  > h2 {
    text-align: start;
    font-size: 1.7em;
    @media (max-width: 870px) {
      text-align: center;
      font-size: 1.8em;
    }
    > p {
      margin: 2rem 6rem;
      font-size: 1.6em;
      line-height: 1.5em;
      color: ${props => props.theme.color.white};
      text-align: center;
      @media (max-width: 870px) {
        font-size: 1.6em;
        line-height: 1.5em;
        padding-left: 0;
        margin: 2rem 4rem;
      }

      @media (max-width: 570px) {
        margin: 2rem 2rem;
      }
    }
  }

  > span {
    margin: 1rem 3rem;
    font-size: 1.4em;
    text-align: center;
    color: ${props => props.theme.color.light};
    text-transform: uppercase;
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
