import React, {useEffect, useState} from 'react';
import styled from '@emotion/styled/macro';

import {Chain, Color} from '../types';
import EvolutionStage from './EvolutionStage';
import {mapColorToHex} from '../utils';

type Props = {
  isLoading: boolean;
  id?: string;
  color?: Color;
  url?: string; //evolution 정보를 가져오는 api
}

const Base = styled.div`
  margin-top: 32px;
  padding: 0 20px 20px;
`;

const Title = styled.h4<{ color: string }>`
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  color: ${({color}) => color};
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  object-fit: contain;
`;

const List = styled.ul`
  list-style: none;
  margin: 20px 0 0 0;
  padding: 0;
  > li + li {
    margin-top: 24px;
  }
`;

//진화 정보는 없을 수도 있다.
const EmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 444px);
`;

const Empty = styled.div<{ color: string }>`
  color: ${({color}) => color};
`;

const Evolution: React.FC<Props> = ({url, color}) => {
  return (
      <Base>
        <Title color={mapColorToHex(color?.name)}>Evolution</Title>
        <ImageWrapper>
          <Image/>
        </ImageWrapper>
        <List>
        </List>
        <EmptyWrapper>
          <Empty color={mapColorToHex(color?.name)}>This Pokémon does not evolve.</Empty>
        </EmptyWrapper>
      </Base>
  )
}

export default Evolution;