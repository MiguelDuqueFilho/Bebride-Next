import Head from 'next/head';
import { useStyles } from './styles';

import AccessNotification from '../AccessNotification';
import TopBar from './TopBar';
import NavBar from './NavBar';

// const LayoutAdmin: React.FC = ({ children, title: string }) => {
function LayoutAdmin({ children, title }) {
  const classes = useStyles();
  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head> */}
      <AccessNotification />
      <div className={classes.root}>
        <TopBar />
        <NavBar />
        <div className={classes.wrapper}>
          <div className={classes.contentContainer}>
            <div className={classes.content}>
              <h1>conteudo</h1>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LayoutAdmin;
