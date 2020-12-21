import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  background-color: #fff;
  width: 100vw;
  height: 100%;
  transition: 1.8s ease-in-out;
  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;
