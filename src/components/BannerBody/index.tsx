import React, { useState } from 'react';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

import {
  useStyles,
  MyContainer,
  ContainerContent,
  ContainerLogo,
  LogoHome
} from './styles';

const BannerBody: React.FC = () => {
  const classes = useStyles();

  return (
    <MyContainer>
      <ContainerContent>
        <p>be bride</p>
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
    </MyContainer>
  );
};

export default BannerBody;
