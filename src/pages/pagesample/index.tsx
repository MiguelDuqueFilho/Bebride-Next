import { Button } from '../pagesample/styles';
import {
  Container,
  ContainerText,
  Title,
  PanelContent,
  BtnTransparent
} from './styles';

const PageSample: React.FC = () => {
  return (
    <Container>
      <ContainerText>
        <Title className="title">Page Sample</Title>
      </ContainerText>
      <PanelContent className={`content`}>
        <h3>Novo aqui?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <h4>
          Quod, in non. Molestias optio, quod mollitia ratione facere quibusdam
          necessitatibus quo officia iste blanditiis.{' '}
        </h4>
        <BtnTransparent
          type="button"
          className="btn transparent"
          value="transparente"
        />
        <Button type="button" className="btn transparent" value="Botão" />
      </PanelContent>
    </Container>
  );
};

export default PageSample;
