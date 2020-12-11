import Head from 'next/head';

import Menu from '../components/Menu';

import {
  Container,
  ContainerContent,
  ContainerLogo,
  LogoHome,
  Btn
} from '../styles/pages/home';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>BeBride Assessoria</title>
      </Head>
      <Menu />
      <Container>
        <ContainerContent className="content">
          <h1>Be Bride</h1>
          <p>Vem casar com a gente.</p>
          <ContainerLogo>
            <LogoHome src="/images/logoHome.svg" />
            <LogoHome src="/images/logoHome_2.svg" />
          </ContainerLogo>
          <Btn href="#" className="btn">
            Vamos Juntos?
          </Btn>
        </ContainerContent>
      </Container>
    </>
  );
};

export default Home;
