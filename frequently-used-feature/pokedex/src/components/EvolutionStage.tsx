//Evolution의 한 단계 단계
import React from 'react';
import styled from '@emotion/styled/macro';

import { Color } from '../types';
import { mapColorToHex } from '../utils';

interface Props {
  level: number;
  color?: Color;
  from: { // 진화 전
    name: string
    url: string
  }
  to:{  // 진화 후
    name: string
    url: string
  }
}

const DividerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Text = styled.div<{ color: string }>`
  text-align: center;
  color: ${({ color }) => color};
  font-size: 12px;
`;

const Divider = styled.div`
  background-color: #D1D5DB;
  border-radius: 12px;
  height: 8px;
  margin-inline: 8px;
  margin-top: 4px;
`;

const ImageWrapper = styled.div`
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Base = styled.li`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EvolutionStage: React.FC<Props> = ({ level, color }) => (
    <Base>
      <ImageWrapper>
        <Image src={''} />
      </ImageWrapper>
      <DividerWrapper>
        {level && <Text color={mapColorToHex(color?.name)}>{`Level ${level}`}</Text>}
        <Divider />
      </DividerWrapper>
      <ImageWrapper>
        <Image src={''} />
      </ImageWrapper>
    </Base>
);

export default EvolutionStage;