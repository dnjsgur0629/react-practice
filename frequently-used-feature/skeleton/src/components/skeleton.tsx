import React, {useMemo} from 'react';
import styled from "@emotion/styled";
import {css, keyframes} from "@emotion/react";

interface Props{
  width?: number;
  height?: number;
  circle?: boolean;   //원형 스켈레톤
  rounded?: boolean;  // border radius가 적용되어 모서리가 둥글게됨
  count?: number;     // width, height을 지정하지 않았을 때 글자의 개수를 제한
  unit?: string;  //width, height등의 단위 (px, rem)
  animation?: boolean;  //애니메이션 유무
  color?: string;
  style?: React.CSSProperties;  //추가적인 스타일 객체
}

//pulse animation을 위한 keyframe
const pulseKeyframe =  keyframes`
  0%{
    opacity: 1;
  }
  50%{
    opacity: 0.3;
  }
  100%{
    opacity: 1;
  }
`

//계속 깜빡이는 pulse animation
const pulseAnimation = css`
  animation: ${pulseKeyframe} 1.5s ease-in-out infinite;
`

//각 요소가 들어왔을 때 알맞은 스타일을 먹여주기
const Base = styled.div<Props>`
  ${({ color }) => color && `background-color: ${color}`};
  ${({ rounded }) => rounded && 'border-radius: 8px'};
  ${({ circle }) => circle && 'border-radius: 50%'};
  ${({ width, height }) => (width || height) && 'display: block'};
  ${({animation}) => animation && pulseAnimation};
  width: ${({width, unit}) => width && unit && `${width}${unit}`};
  height: ${({height, unit}) => height && unit && `${height}${unit}`};
`;

const Content = styled.span`
  opacity: 0;
`;

const Skeleton: React.FC<Props> = ({
                                     animation = true,
                                     children,
                                     width,
                                     height,
                                     circle,
                                     rounded,
                                     count,
                                     unit = 'px',
                                     color = '#F4F4F4',
                                     style,
                                   }) => {
  //count 숫자만큼 길이의 array를 만들어주고 그 array를 -으로 join (ex. count=6 => 'content:------')
  const content = useMemo(() => [...Array({length: count})].map(() => '-').join(''), [count]);
  return (
      <Base
          style={style}
          rounded={rounded}
          circle={circle}
          width={width}
          height={height}
          animation={animation}
          unit={unit}
          color={color}
      >
        <Content>{content}</Content>
      </Base>
  );
}

export default Skeleton;