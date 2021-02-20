import {
  Container,
  ContainerContent,
  ContainerTitle,
  ContainerItens,
  ContainerItem,
  ContainerCard,
  StyledImage,
  CardBody
} from './styles';

import { DepositionItem } from '../../interfaces/index';
import deposition1 from '../../assets/images/deposition_1.jpeg';
import deposition2 from '../../assets/images/deposition_2.jpeg';
import deposition3 from '../../assets/images/deposition_3.jpeg';

import team from '../../assets/images/team-bebride.png';

type Props = {
  depositionItens: DepositionItem[];
};

function Depositions({ depositionItens }: Props) {
  return (
    <Container>
      <ContainerContent>
        <ContainerTitle>
          <h2>
            <p>Depoimentos</p>
          </h2>
        </ContainerTitle>
        <ContainerItens className="itens-content">
          {depositionItens.map(list => {
            return (
              <ContainerItem key={list.id}>
                <ContainerCard className="card ">
                  <StyledImage
                    src={deposition1}
                    alt="depositions"
                    width={600}
                    height={400}
                  />
                  <CardBody className="card-body ">
                    <h4 className="card-title">{list.Events[0].eventName}</h4>
                    <p className="card-text">{list.depositionDescription}</p>
                  </CardBody>
                </ContainerCard>
              </ContainerItem>
            );
          })}
        </ContainerItens>
      </ContainerContent>
    </Container>
  );
}

export default Depositions;
