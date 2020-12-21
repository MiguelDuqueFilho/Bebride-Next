import { Container } from '../styles/pages/home';

import BannerBody from '../components/BannerBody';
import Team from '../components/Team';
import Plans from '../components/Plans';
import Depositions from '../components/Depositions';
import Final from '../components/Final';

const Home: React.FC = () => {
  return (
    <Container>
      <BannerBody />
      <Team />
      <Plans />
      <Depositions />
      <Final />
    </Container>
  );
};

export default Home;
