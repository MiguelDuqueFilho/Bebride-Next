import styled from 'styled-components';

export const ContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20%;

  @media (max-width: 959px) {
    width: 40%;
  }

  @media (max-width: 570px) {
    width: 70%;
  }
`;

export const ContainerIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;

  > svg {
    font-size: 3rem;
    color: ${props => props.theme.color.primary};
  }

  > h4 {
    color: ${props => props.theme.color.title};
    font-size: 1.3rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  > p {
    color: ${props => props.theme.color.text};
    font-size: 1rem;
    padding-top: 1rem;
    min-height: 8rem;
    text-align: justify;
  }

  > a {
    display: inline-block;
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    color: ${props => props.theme.color.buttonText};
    background-color: ${props => props.theme.color.button};

    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    :hover {
      background-color: ${props => props.theme.color.buttonHover};
    }
  }
`;

export const referencia = styled.div`
  .info a {
    display: inline-block;
    font-weight: 400;
    text-decoration: none;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;

    background-color: var(--primary);
    color: white;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  .info a:hover {
    background-color: #a79ad8;
    border-color: #9f91d4;
  }
`;
