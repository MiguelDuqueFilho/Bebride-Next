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
import { ServerStyleSheet } from 'styled-components';

type Props = {
  depositionItens: DepositionItem[];
};

function Depositions({ depositionItens }: Props) {
  return (
    <Container>
      <ContainerContent>
        <ContainerTitle>
          <h2>Depoimentos</h2>
        </ContainerTitle>
        <ContainerItens className="itens-content">
          {depositionItens.map(list => {
            return (
              <ContainerItem key={list.id}>
                <ContainerCard className="card ">
                  <StyledImage
                    src={`/deposition_${list.id}.jpeg`}
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
