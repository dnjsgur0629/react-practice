import React from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "@emotion/styled";

const Base = styled.div`

`;

const TopInfo = styled.div`

`;

const PosterContainer = styled.div`

`;

const Backdrop = styled.div`

`;

const LeftBlur = styled.div`

`;

const RightBlur = styled.div`

`;

const LeftGridient = styled.div`

`;

const RightGradient = styled.div`

`;

const BackdropImage = styled.div`

`;

const PosterWrapper = styled.div`

`;

const Poster = styled.img`

`;

const Main = styled.div`

`;

const Container = styled.div`

`;

const ContainerWrapper = styled.div`

`;

const Title = styled.h1`

`;

const Keyword = styled.div`

`;

const AverageRate = styled.div`

`;

const Actions = styled.div`

`;

const StarRate = styled.div`

`

const StarRateText = styled.div`

`;

const RatingWrapper = styled.div`

`;

const Diveder = styled.div`

`;

const ActionButtonContainer = styled.div`

`;

const ActionButton = styled.button`

`;

const BottomInfo = styled.div`

`;

const ContentSectionContainer = styled.div`

`;

const MovieDetail: React.FC = () => {
  return (
      <div>
        <Header/>
        <TopInfo>
          <PosterContainer>
            <Backdrop>
              <LeftBlur/>
              <BackdropImage>
                <LeftGridient/>
                <RightGradient/>
              </BackdropImage>
              <RightBlur/>
            </Backdrop>
          </PosterContainer>
          <Main>
            <Container>
              <PosterWrapper>
                <Poster/>
              </PosterWrapper>
              <ContainerWrapper>
                <Title></Title>
                <Keyword></Keyword>
                <AverageRate></AverageRate>
                <Actions>
                  <StarRate>
                    <StarRateText></StarRateText>
                    <RatingWrapper>
                    </RatingWrapper>
                  </StarRate>
                  <Diveder/>
                  <ActionButtonContainer>
                    <ActionButton>
                      보고싶어요
                    </ActionButton>
                    <ActionButton>
                      코멘트
                    </ActionButton>
                    <ActionButton>
                      보는중
                    </ActionButton>
                    <ActionButton>
                      더보그
                    </ActionButton>
                  </ActionButtonContainer>
                </Actions>
              </ContainerWrapper>
            </Container>
          </Main>
        </TopInfo>
        <BottomInfo>
          <ContentSectionContainer>
            <DefaultInfo/>
            <Similar/>
          </ContentSectionContainer>
        </BottomInfo>
        <Footer/>
      </div>
  );
}

export default MovieDetail;