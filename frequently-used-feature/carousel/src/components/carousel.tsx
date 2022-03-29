import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled/macro';
import { css } from '@emotion/react';
import { RiArrowDropLeftLine, RiArrowDropRightLine } from 'react-icons/ri';

const Base = styled.div``;

const Container = styled.div`
  position: relative;
`;

const ArrowButton = styled.button<{ pos: 'left' | 'right'}>`
  position: absolute;
  top: 50%;
  z-index: 1;
  padding: 8px 12px;
  font-size: 48px;
  font-weight: bold;
  background-color: transparent;
  color: #fff;
  border: none;
  margin: 0;
  cursor: pointer;
  ${({ pos }) => pos === 'left' ? 
    css`
      left: 0;
    ` :
    css`
      right: 0;
    `};
`;

const CarouselList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow: hidden;
`;

const CarouselListItem = styled.li<{ activeIndex: number }>`
  width: 100%;
  flex: 1 0 100%;
  transform: translateX(-${({ activeIndex }) => activeIndex * 100}%);
  transition: 200ms ease;
  > img {
    width: 100%;
    height: fit-content;
  }
`;

const NavButton = styled.button<{ isActive?: boolean }>`
  width: 4px;
  height: 4px;
  background-color: #000;
  opacity: ${({ isActive }) => isActive ? 0.3 : 0.1};
`;

const NavItem = styled.li`
  display: inline-block;
`;

const Nav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  ${NavItem} + ${NavItem} {
    margin-left: 4px;
  }
`;

const banners = ['https://via.placeholder.com/600/92c952', 'https://via.placeholder.com/600/771796', 'https://via.placeholder.com/600/24f355'];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const handleNext = () => setActiveIndex(activeIndex => (activeIndex + 1) % banners.length);
  const handlePrev = () => setActiveIndex(activeIndex => (activeIndex - 1 + banners.length) % banners.length);
  const handleGoTo = (index: number) => setActiveIndex(index);

  const handleMouseEnter = () => setIsFocused(true);
  const handleMouseLeave = () => setIsFocused(false);

  //autoplay
  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    //carousel이 focus상태에서는 autoplay하지 않도록 함
    if (!isFocused) {
      intervalId = setInterval(handleNext, 3000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isFocused]);

  return (
      <Base onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <Container>
          {banners.length && <ArrowButton pos="left" onClick={handlePrev}>
            <RiArrowDropLeftLine />
          </ArrowButton>}
          <CarouselList>
            {
              banners.map((url, index) => (
                  <CarouselListItem activeIndex={activeIndex} key={index}>
                    <img src={url} alt="" />
                  </CarouselListItem>
              ))
            }
          </CarouselList>
          {banners.length && <ArrowButton pos="right" onClick={handleNext}>
            <RiArrowDropRightLine />
          </ArrowButton>}
        </Container>
        {banners.length && (
            <Nav>
              {
                Array.from({ length: banners.length }).map((_, index) => (  /*배너 개수 만큼 indicator 보여줌*/
                    <NavItem key={index}>
                      <NavButton isActive={activeIndex === index} onClick={() => handleGoTo(index)} />
                    </NavItem>
                ))
              }
            </Nav>
        )}
      </Base>
  )
}

export default Carousel;

