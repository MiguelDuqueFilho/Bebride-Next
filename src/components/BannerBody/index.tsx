import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {
  useStyles,
  Container,
  ContainerContent,
  ContainerLogo,
  LogoHome,
  P
} from './styles';

const BannerBody: React.FC = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  // function parallax(element: EventTarget, distance: number, speed: number) {
  //   element.style.transform = translateY(`${distance - speed}px`);
  // }

  // function handleScroll(e: Event) {
  //   let element = e.target;
  //   parallax('header', window.scrollY, 1);
  //   parallax('.small-rose', window.scrollY, 0.4);
  //   parallax('.big-rose', window.scrollY, 0.2);
  // }

  return (
    // <Container onScroll={handleScroll}>
    <Container>
      <ContainerContent className="content">
        <P>be bride</P>
        <span>ASSESSORIA E CERIMONIAL</span>
      </ContainerContent>
      <ContainerLogo>
        <LogoHome src="/images/love.svg" />
        <Paper component="form" className={classes.search}>
          <InputBase
            className={classes.input}
            placeholder="Pesquisar"
            inputProps={{ 'aria-label': 'search google maps' }}
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </ContainerLogo>
    </Container>
  );
};

export default BannerBody;
