import React from 'react';
import LatestTvSection from "../features/tv/latest";
import AiringTodaySection from "../features/tv/airingToday";
import OnTheAirSection from "../features/tv/onTheAir";
import PopularSection from "../features/tv/popular";
import TopRatedSection from "../features/tv/topRated";
import styled from "@emotion/styled";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`

const TvPage: React.FC = () => {
  return (
      <div>
        <Header/>
        <Main>
          <Container>
            <LatestTvSection/>
            <AiringTodaySection/>
            <OnTheAirSection/>
            <PopularSection/>
            <TopRatedSection/>
          </Container>
        </Main>
        <Footer/>
      </div>
  );
}

export default TvPage;