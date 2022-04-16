import React, {useMemo} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "@emotion/styled";
import {useParams} from "react-router-dom";
import useTvDetail from "../features/tv/useTvDetail";
import {AiFillEye, AiOutlinePlus} from 'react-icons/ai';
import {FaPen} from "react-icons/fa"
import {FiMoreHorizontal} from "react-icons/fi";
import {Rating} from "@mui/material";
import DefaultInfo from "../features/tv/detail/DefaultInfo";
import Similar from "../features/tv/detail/Similar";

const Base = styled.div`  
  position: relative;
  background: #f8f8f8;
  
`;

const TopInfo = styled.div`
  border-bottom: 1px solid rgb(227, 227, 227);
  background: rgb(255, 255, 255);
`;

const PosterContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Backdrop = styled.div`
  display: flex;
  width: 100%;
  height: 394px;
  background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.35) 2%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.5) 100%);
  overflow: hidden;
`;

const LeftBlur = styled.div`
  flex: 1 1 0;
  background:  rgb(178, 196, 229);
`;

const RightBlur = styled.div`
  flex: 1 1 0;
  background:  rgb(184, 184, 184);
`;

const LeftGradient = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  background-image: linear-gradient(-90deg, rgba(178, 196, 229, 0) 0%, rgb(178, 196, 229) 100%);
`;

const RightGradient = styled.div`
  width: 150px;
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  background-image: linear-gradient(90deg, rgba(184, 184, 184, 0) 0%, rgb(184, 184, 184) 100%);
`;

const BackdropImage = styled.div<{imageUrl:string}>`
  background: url(${({imageUrl})=>imageUrl}) center center / cover no-repeat;
  width: 1024px;
  position: relative;
  top: auto;
  left: auto;
  height: 100%;
  filter: none;
`;

const PosterWrapper = styled.div`
  position: absolute;
  width: 166px;
  height: 238px;
  border-bottom: solid 2px #fff;
  top: -48px;
  left: 0;
  border-radius: 3px;
  box-shadow: 0 0 2px rgb(0 0 0 / 30%);
  background: #fff;
`;

const Poster = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Main = styled.div`
  padding: 14px 16px 22px;
  text-align: center;
`;

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  position: relative;
`;

const ContainerWrapper = styled.div`
  margin: 0 0 0 191px;
  text-align: left;
`;

const Title = styled.h1`
  font-size: 33px;
  font-weight: 700;
  line-height: 40px;
`;

const Keyword = styled.div`
  font-size: 17px;
  font-weight: 400;
  margin-top: 4px;
  color: rgba(0, 0, 0, 0.5);
`;

const AverageRate = styled.div`
  font-size: 17px;
  font-weight: 400;
  line-height: 22px;
  padding: 8px 0;
  margin-top: 14px;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
`;

const Actions = styled.div`
  margin-top: 20px;
  height: 58px;
  display: flex;
  align-items: center;
`;

const StarRate = styled.div`
  width: 238px;
  height: 57px;
  margin: 0;
  text-align: center;
`;

const StarRateText = styled.div`
  font-size: 12px;
  line-height: 16px;
  color: #787878;
`;

const RatingWrapper = styled.div`
  margin-top: 8px;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: #ededed;
  float: left;
`;

const ActionButtonContainer = styled.div`
  width: 461px;
  padding: 0 30px;
  margin: 0 -16px;
  display: flex;
  align-items: center;
`;

const ActionButton = styled.button`
  border: none;
  background: transparent;
  font-size: 14px;
  margin: 0 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  > svg {
    margin-right: 7px;
    &:hover {
      transform: scale(1.4);
    }
  }
`;

const BottomInfo = styled.div`
  padding: 28px 0 48px;
  max-width: 960px;
  margin: 0 auto;
`;

const ContentSectionContainer = styled.div`
  border-right: 1px solid;
  border-left: 1px solid;
  border-top: 1px solid;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: #fff;
  border-color: #e3e3e3;
`;

type Params = {
  id: string;
}


const TvDetail: React.FC = () => {
  // 쿼리 스트링으로 id를 전달 받음
  const { id } = useParams<Params>();
  //@ts-ignore
  const {isLoading, data} = useTvDetail(id);

  const year = useMemo(() => {
        return data?.data.first_air_date?.split('-')[0] || ''}
      ,[data])

  const genres = useMemo(() =>{
    return data?.data.genres?.map(
        genre => genre.name).join('.')
  }, [data]);

  return (
      <div>
        <Header/>
        <>
          {
            isLoading || !data ? (
                <div>Loading...</div>
            ) : (
                <Base>
                  <TopInfo>
                    <PosterContainer>
                      <Backdrop>
                        <LeftBlur/>
                        <BackdropImage imageUrl={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.backdrop_path}`}>
                          <LeftGradient/>
                          <RightGradient/>
                        </BackdropImage>
                        <RightBlur/>
                      </Backdrop>
                    </PosterContainer>
                    <Main>
                      <Container>
                        <PosterWrapper>
                          <Poster src={`${process.env.REACT_APP_IMAGE_PREFIX}/${data.data.poster_path}`}/>
                        </PosterWrapper>
                        <ContainerWrapper>
                          <Title>{data.data.name}</Title>
                          <Keyword>{year} - {genres}</Keyword>
                          <AverageRate>평균 *{data.data.vote_average} ({data.data.vote_count}명)</AverageRate>
                          <Actions>
                            <StarRate>
                              <StarRateText>평가하기</StarRateText>
                              <RatingWrapper>
                                <Rating/>
                              </RatingWrapper>
                            </StarRate>
                            <Divider/>
                            <ActionButtonContainer>
                              <ActionButton>
                                <AiOutlinePlus/>보고싶어요
                              </ActionButton>
                              <ActionButton>
                                <FaPen/>코멘트
                              </ActionButton>
                              <ActionButton>
                                <AiFillEye/>보는중
                              </ActionButton>
                              <ActionButton>
                                <FiMoreHorizontal/>더보기
                              </ActionButton>
                            </ActionButtonContainer>
                          </Actions>
                        </ContainerWrapper>
                      </Container>
                    </Main>
                  </TopInfo>
                  <BottomInfo>
                    <ContentSectionContainer>
                      <DefaultInfo
                          title={data.data.name}
                          year={year}
                          genres={genres}
                          overview={data.data.overview}/>
                      <Similar id={id}/>
                    </ContentSectionContainer>
                  </BottomInfo>
                </Base>
            )
          }
        </>
        <Footer/>
      </div>
  );
}

export default TvDetail;