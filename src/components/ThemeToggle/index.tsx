import React, { useState, useEffect } from 'react';

import { ContainerTheme, ThemeSelect, ThemeSelected } from './styles';

type themeProps = {
  Theme: Function;
  themeTitle: string;
};

function ThemeToggle({ Theme, themeTitle }: themeProps) {
  const [theme, setTheme] = useState(themeTitle);

  const handeClickTheme = (e: React.MouseEvent) => {
    const changeTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(changeTheme);
    Theme(changeTheme);
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

export default ThemeToggle;
