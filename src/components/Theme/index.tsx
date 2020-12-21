import React, { useState, useEffect } from 'react';

import { ContainerTheme, ThemeSelect, ThemeSelected } from './styles';

type themeProps = {
  toggleTheme: Function;
  themeTitle: string;
};

function Theme({ toggleTheme, themeTitle }: themeProps) {
  const [theme, setTheme] = useState(themeTitle);

  const handeClickTheme = (e: React.MouseEvent) => {
    const changeTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(changeTheme);
    toggleTheme(changeTheme);
  };

  useEffect(() => {
    setTheme(themeTitle === 'light' ? 'light' : 'dark');
  }, [themeTitle]);

  return (
    <ContainerTheme className="menu-container">
      <ThemeSelect className="theme-select" />
      <ThemeSelected
        className={`theme-selected ${theme === 'light' ? '' : 'dark'}`}
        onClick={handeClickTheme}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </ThemeSelected>
    </ContainerTheme>
  );
}

export default Theme;
