import React from 'react';

import { PlanType } from '../../interfaces';
import Type from '../Type';

import {
  Container,
  ContainerContent,
  ContainerTitle,
  ContainerWhatsApp,
  ButtonWhatsApp,
  ContainerItens
} from './styles';

import { FaHeart, FaWhatsapp } from 'react-icons/fa';

type Props = {
  items: PlanType[];
};

function Plans({ items }: Props) {
  function onWhatsapp() {
    const celular_bebride = '5511940768615';
    const urlWhatsapp = `https://wa.me/${celular_bebride}`;
    window.location.assign(urlWhatsapp);
  }

  return (
    <Container>
      <ContainerContent>
        <ContainerTitle>
          <h2 className="title text-center">
            Noiva tranquila é noiva organizada.{' '}
            <FaHeart size={28} className="text-primary" />
          </h2>
          <span className="description text-center">
            Cada dia da organização do seu casamento deve ser celebrado.
          </span>
        </ContainerTitle>
        <ContainerItens>
          {items.map((item: PlanType) => (
            <Type key={item.id} item={item} />
          ))}
        </ContainerItens>
        <ContainerWhatsApp>
          <ButtonWhatsApp type="button" onClick={onWhatsapp}>
            <FaWhatsapp size={34} />
            #vamosjuntas?
          </ButtonWhatsApp>
        </ContainerWhatsApp>
      </ContainerContent>
    </Container>
  );
}

export default Plans;
