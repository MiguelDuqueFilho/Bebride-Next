import {
  Container,
  ContainerContent,
  ContainerLeft,
  ContainerRight
} from './styles';

const About: React.FC = () => {
  return (
    <>
      <Container>
        <ContainerContent>
          <ContainerLeft>
            <h1>Sobre nós</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              deleniti necessitatibus ipsa repellendus asperiores libero eum,
              eveniet reprehenderit voluptates nostrum ex atque. Ex, soluta
              dolor deserunt atque saepe explicabo mollitia?
            </p>
          </ContainerLeft>
          <ContainerRight>
            <h1>Nossa Missão</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              deleniti necessitatibus ipsa repellendus asperiores libero eum,
              eveniet reprehenderit voluptates nostrum ex atque. Ex, soluta
              dolor deserunt atque saepe explicabo mollitia?
            </p>
            <h1>Nossa Visão</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              deleniti necessitatibus ipsa repellendus asperiores libero eum,
              eveniet reprehenderit voluptates nostrum ex atque. Ex, soluta
              dolor deserunt atque saepe explicabo mollitia?
            </p>
            <h1>Nosso valores</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste
              deleniti necessitatibus ipsa repellendus asperiores libero eum,
              eveniet reprehenderit voluptates nostrum ex atque. Ex, soluta
              dolor deserunt atque saepe explicabo mollitia?
            </p>
          </ContainerRight>
        </ContainerContent>
      </Container>
    </>
  );
};

export default About;
