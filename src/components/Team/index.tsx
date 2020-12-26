import React from 'react';

import team from '../../assets/images/team-bebride.png';

import { FaHeart } from 'react-icons/fa';

import {
  Container,
  ContainerContent,
  ContainerText,
  ContainerTeam,
  ContainerTeamImag,
  ContainerTeamText,
  ImageTeam,
  TeamDescr
} from './styles';

const Team: React.FC = () => {
  return (
    <Container>
      <ContainerContent>
        <ContainerText>
          <h2>
            <p>
              Nós gostamos de pessoas e gostamos de histórias de amor...
              <FaHeart size={28} />
            </p>
          </h2>
        </ContainerText>
        <ContainerTeam>
          <ContainerTeamImag>
            <ImageTeam src={team} alt="team" />
          </ContainerTeamImag>
          <ContainerTeamText>
            <TeamDescr>
              Olá, somos Bruna e Tamires, unimos essa paixão e nossa amizade aos
              nossos ideais, trazendo à tona uma empresa que se posiciona e
              levanta bandeiras. E é nisso que ganhamos reconhecimento e valor.
            </TeamDescr>
            <TeamDescr>
              Cada casal é mais do que um cliente, levamos como amigos para
              vida, quem nos segue nas redes sociais já sabe, não é difícil ver
              nossos noivos em nossos próprios lares. Gostamos de criar laços,
              proporcionar uma experiência única a quem nos escolhe para
              organizar e assessorar um dos dias mais importantes de sua vida.
            </TeamDescr>
            <TeamDescr>
              Gratidão e amor é o que nos move. Nossa missão é fazer a diferença
              na vida das pessoas, seja as ajudando a realizar seus sonhos,
              planejando e organizando seus casamentos ou incentivando seus
              negócios, dando prioridade em indicar mulheres como fornecedoras.
            </TeamDescr>
          </ContainerTeamText>
        </ContainerTeam>
      </ContainerContent>
    </Container>
  );
};

export default Team;
