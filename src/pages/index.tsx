import { GetStaticProps } from 'next';
import { Container } from '../styles/pages/home';

import { PlanTypes, DepositionItens } from '../utils/sampdata';
import { PlanType, DepositionItem } from '../interfaces';
import BannerBody from '../components/BannerBody';
import Team from '../components/Team';
import Plans from '../components/Plans';
import Why from '../components/Why';
import Depositions from '../components/Depositions';
import Final from '../components/Final';

type Props = {
  items: PlanType[];
  depositionItens: DepositionItem[];
};

function Home({ items, depositionItens }: Props) {
  return (
    <Container>
      <BannerBody />
      <Team />
      <Why />
      <Plans items={items} />
      <Depositions depositionItens={depositionItens} />
      <Final />
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const items: PlanType[] = PlanTypes;
  const depositionItens: DepositionItem[] = DepositionItens;
  return { props: { items, depositionItens } };
};

export default Home;
