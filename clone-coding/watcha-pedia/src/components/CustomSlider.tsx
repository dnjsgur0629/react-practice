import React from 'react';
import Slider, {Settings} from "react-slick";
import styled from "@emotion/styled";
import {css} from "@emotion/react";
import {MdArrowBackIos, MdArrowForwardIos} from 'react-icons/md'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowButton = styled.button<{ pos?: 'left' | 'right' }>`
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  z-index: 1;
  top: 50%;
  background-color: #ddffff;
  width: 40px;
  height: 40px;

  ${({pos}) =>
          pos === 'left' ?
                  css`
                    left: 0;
                    transform: translate(-50%, -50%)
                  ` : css`
                    right: 0;
                    transform: translate(50%, -50%)
                  `}
  &:before {
    content: initial;
  }

  > svg {
    position: absolute;
    top: 50%;
    left: 55%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    color: #222;
  }
`;

//settings의 default
const DEFAULT_SETTINGS: Settings = {  //react-slick의 Setting를 타입으로 사용
  dots: false,  //하단 indicator
  arrows: true, //좌우 화살표
  infinite: true, //마지막 슬라이드에서 처음으로 다시 이돌항지
  speed: 300, //slide speed
  slidesToShow: 5,  //slide당 표시될 화면 개수
  slidesToScroll: 5,  //스크롤 할 때 마다 표시되는 슬라이드 수
  //화살표 커스텀
  prevArrow: (
      <ArrowButton>
        <MdArrowBackIos/>
      </ArrowButton>
  ),
  nextArrow: (
      <ArrowButton>
        <MdArrowForwardIos/>
      </ArrowButton>
  ),
}

type Props = {
  settings?: Settings;
  children: any
}

const CustomSlider: React.FC<Props> = ({settings = DEFAULT_SETTINGS, children}) => {  //settings prop을 받을 때 default를 설정
  return (
      <section>
        <Slider
            {...settings}>
          {children}
        </Slider>
      </section>
  );
}

export default CustomSlider;
