import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  top: 50%;
  width: 100vw;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  flex-direction: column;
`;

export const ContainerButton = styled.div``;

export const ButtonLogin = styled.a`
  width: 200px;
  padding: 0.75rem 1.75rem;
  margin-top: 3rem;
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
