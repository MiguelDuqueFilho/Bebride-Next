import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: 100vh;
  background-color: ${props => props.theme.color.background};
  overflow: hidden;
  color: ${props => props.theme.color.title};
  top: 200px;
    min-height: 600px;
    height: 100vh;
  }

  @media (max-width: 570px) {
    min-height: 400px;
    height: 100vh;
  }
`;

export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 65px;
  background-color: ${props => props.theme.color.backgroundTitle};
`;

export const Title = styled.h2`
  font-size: 2.2rem;
  color: ${props => props.theme.color.title};
  margin-top: 10px;
`;

export const PanelContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 300px;
  width: 80vw;
  background: transparent;
  margin-top: 10px;

  color: ${props => props.theme.color.text};

  @media (max-width: 870px) {
    padding-right: 15px;
    transition: 0.9s 0.8s ease-in-out;
  }

  @media (max-width: 570px) {
    padding: 0.5rem 1rem;
  }

  > h3 {
    font-weight: 600;
    line-height: 1;
    font-size: 1.5rem;

    @media (max-width: 870px) {
      font-size: 1.2rem;
    }
  }
  > h4 {
    font-weight: 200;
    line-height: 1;
    font-size: 0.8rem;
    padding-bottom: 20px;
    @media (max-width: 870px) {
      font-size: 0.5rem;
    }
  }
  > p {
    font-size: 0.95rem;
    padding: 0.7rem 0;

    @media (max-width: 870px) {
      font-size: 0.7rem;
      padding: 0.5rem 0;
    }
  }
`;

export const Button = styled.input`
  width: 250px;
  height: 80px;
  border: none;
  outline: none;
  border-radius: 49px;
  background-color: ${props => props.theme.color.button};
  color: ${props => props.theme.color.buttonText};
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: 0.5s;

  :hover {
    background-color: ${props => props.theme.color.buttonHover};
    color: ${props => props.theme.color.white};
  }
`;

export const BtnSubmit = styled(Button)``;

export const BtnTransparent = styled(Button)`
  margin: 0;
  background: none;
  border: 2px solid ${props => props.theme.color.button};
  width: 250px;
  height: 80px;
  font-weight: 600;
  font-size: 0.8rem;

  :hover {
    background-color: ${props => props.theme.color.buttonHover};
    color: ${props => props.theme.color.white};
  }

  @media (max-width: 870px) {
    width: 110px;
    height: 60px;
    font-size: 0.7rem;
  }
`;
