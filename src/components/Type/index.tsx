import React, { useEffect } from 'react';

import { ContainerItem, ContainerIcon } from './styles';
import { PlanType } from '../../interfaces';

import * as Go from 'react-icons/go';

const Icon = (props: any) => {
  const { iconName } = props;
  let icon = null;
  icon = React.createElement(Go[iconName]);
  return icon;
};

type Props = {
  item: PlanType;
};

function Types({ item }: Props) {
  return (
    <ContainerItem>
      <ContainerIcon>
        <Icon iconName={item.icon} />
        <h4>{`${item.title}`}</h4>
        <p>{item.resume}</p>
        <a href={item.url}>Saiba Mais</a>
      </ContainerIcon>
    </ContainerItem>
  );
}

export default Types;
