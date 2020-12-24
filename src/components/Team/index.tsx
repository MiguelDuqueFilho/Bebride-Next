import React from 'react';

import team from '../../assets/images/team-bebride2.jpg';

import { FaHeart, FaFacebook, FaInstagram } from 'react-icons/fa';

import {
  Container,
  ContainerContent,
  ContainerText,
  ContainerTeam,
  ContainerTeamImag,
  ContainerTeamText,
  ImageTeam,
  TeamDescr,
  TeamSocial,
  SocialIcon
} from './styles';

const Team: React.FC = () => {
  return (
    <Container>
      <ContainerContent className="row col-12 mr-auto ml-auto">
        <ContainerText className="team-block ">
          <h2 className="team title">
            <p>
              Nós gostamos de pessoas e gostamos de histórias de amor...
              <FaHeart size={28} className="icon-heart" />
            </p>
          </h2>
        </ContainerText>
        <ContainerTeam className="row col-12 mr-auto ml-auto">
          <ContainerTeamImag className="col-md-3 team-content ">
            <ImageTeam
              src={team}
              alt="team"
              className="rounded-circle img-fluid"
            />
            <TeamSocial>
              <SocialIcon href="https://www.facebook.com/bebridecasamentos">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/bebridecasamentos">
                <FaInstagram />
              </SocialIcon>
            </TeamSocial>
          </ContainerTeamImag>
          <ContainerTeamText className="col-md-9 mt-5 mt-3">
            <TeamDescr className="team-descr">
              Olá, somos Bruna e Tamires, unimos essa paixão e nossa amizade aos
              nossos ideais, trazendo à tona uma empresa que se posiciona e
              levanta bandeiras. E é nisso que ganhamos reconhecimento e valor.
            </TeamDescr>
            <TeamDescr className="team-descr">
              Cada casal é mais do que um cliente, levamos como amigos para
              vida, quem nos segue nas redes sociais já sabe, não é difícil ver
              nossos noivos em nossos próprios lares. Gostamos de criar laços,
              proporcionar uma experiência única a quem nos escolhe para
              organizar e assessorar um dos dias mais importantes de sua vida.
            </TeamDescr>
            <TeamDescr className="team-descr">
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
