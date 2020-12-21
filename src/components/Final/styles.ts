import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  background-color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: ${props => props.theme.color.background};
  font-family: 'Cormorant Garamond', serif;
  > h1 {
    color: ${props => props.theme.color.title};
  }
`;
