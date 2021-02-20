import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const MyContainer = styled(Box)`
  position: relative;
  background-color: #fff;
  width: 100vw;
  height: 100%;
  transition: 1.8s ease-in-out;
  overflow: scroll;
  ${({ theme }) => `
      background-color:  ${theme.color.background};
    `}

  overflow-x: hidden; /* Hide horizontal scrollbar */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent; /* make scrollbar transparent */
  }
`;
