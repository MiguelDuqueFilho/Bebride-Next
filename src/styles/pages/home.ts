import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: ${props => {
    return props.theme.color.background;
  }};
  width: 100vw;
  height: 100%;
  transition: 1.8s ease-in-out;
  overflow: scroll;

  overflow-x: hidden; /* Hide horizontal scrollbar */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;
