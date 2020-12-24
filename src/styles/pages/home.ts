import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  width: 100vw;
  height: 100%;
  transition: 1.8s ease-in-out;
  overflow: scroll;
  background-color: ${props => props.theme.color.background};
  overflow-x: hidden; /* Hide horizontal scrollbar */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;
