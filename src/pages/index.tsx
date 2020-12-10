import Head from 'next/head';

import LogoWedding from '../assets/images/LogoLogin.svg';
import { Container } from '../styles/pages/home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>BeBride Assessoria</title>
      </Head>
      <Container>
        <h1>BeBride</h1>
        <p>Vem casar com a gente.</p>
        <LogoWedding />
      </Container>
    </>
  );
};

export default Home;
