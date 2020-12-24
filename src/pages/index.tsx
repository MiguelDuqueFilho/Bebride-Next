import { GetStaticProps } from 'next';
import { Container } from '../styles/pages/home';

import { PlanTypes } from '../utils/sampdata';
import { PlanType } from '../interfaces';
import BannerBody from '../components/BannerBody';
import Team from '../components/Team';
import Plans from '../components/Plans';
import Why from '../components/Why';
import Depositions from '../components/Depositions';
import Final from '../components/Final';

type Props = {
  items: PlanType[];
};

function Home({ items }: Props) {
  return (
    <Container>
      <BannerBody />
      <Team />
      <Why />
      <Plans items={items} />
      <Depositions />
      <Final />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const items: PlanType[] = PlanTypes;
  return { props: { items } };
};

export default Home;
