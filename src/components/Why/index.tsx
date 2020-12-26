import React from 'react';

import teamadesivo from '../../assets/images/team-adesivo.png';

import {
  Container,
  ContainerContent,
  ContainerWhyTitle,
  ContainerWhyText,
  ContainerTeam2Imag,
  ImageTeam2
} from './styles';

import {
  FaHeart,
  FaProjectDiagram,
  FaTasks,
  FaVenus,
  FaMoneyBill
} from 'react-icons/fa';

const Why: React.FC = () => {
  return (
    <Container>
      <ContainerWhyTitle className="why-block ">
        <h2>
          Por que nos contratar?{' '}
          <FaHeart size={28} className="text-primary align-baseline " />
        </h2>
        <span>
          (MOTIVOS PARA TER A GENTE COMO MELHORES AMIGAS, OPS... ASSESSORAS!)
        </span>
      </ContainerWhyTitle>
      <ContainerContent className="row">
        <ContainerWhyText>
          <p className="why-descr">
            <FaTasks />
            Nós cuidamos de cada detalhe do seu Grande Dia como se fosse o
            nosso, com muito amor e respeito pela história do casal. Ouvimos
            cada ideia e trazemos juntas o seu sonho para a realidade.
          </p>
          <p className="why-descr">
            <FaProjectDiagram />
            Casamento é toda a trajetória, não somente um único dia e queremos
            que vocês aproveitem cada etapa dos preparativos. Por isso,
            orientamos passo a passo para que o casal se sinta amparado e
            seguro.
          </p>

          <p className="why-descr">
            <FaHeart />
            Amamos o que fazemos, por isso sempre estamos disponíveis para
            atender e ouvir nosso casal, inclusive papear sobre os detalhes é
            uma das coisas que mais gostamos de fazer!
          </p>
          <p className="why-descr">
            <FaVenus />É importante dizer que damos prioridade à indicação de
            mulheres como fornecedores do seu Grande Dia. Uma das nossas missões
            é fortalecer o empreendedorismo feminino.
          </p>
          <p className="why-descr">
            <FaMoneyBill />
            Conseguimos melhores preços junto aos fornecedores.
          </p>
        </ContainerWhyText>
        <ContainerTeam2Imag>
          <ImageTeam2 src={teamadesivo} alt="team" />
        </ContainerTeam2Imag>
      </ContainerContent>
    </Container>
  );
};

export default Why;
