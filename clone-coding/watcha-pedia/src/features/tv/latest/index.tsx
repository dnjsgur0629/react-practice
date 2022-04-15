import React from 'react';
import styled from "@emotion/styled";
import useLatestTv from './useLatestTv'
import Card from "../../../components/Card";

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const LatestTvSection: React.FC = () => {
  const {data, isLoading} = useLatestTv();

  const getYear = (date: string) => date.split('-')[0]; /*date를 받아서 '-'를 separtor로 split하고 첫번째 요소 (year)를 반환*/

  return (
      <Base>
        <Title>최근 방영작</Title>
        {
          isLoading || !data ? (
              <div>Loading...</div>
          ) : (
              <Card
                  linkUrl={`/tv/${data.data.id}`}  /*movie detail api?*/
                  title={data.data.name}
                  posterPath={`https://image.tmdb.org/t/p/w300/${data.data.poster_path}`}
                  voteAverage={data.data.vote_average}
                  year={getYear(data.data.first_air_date)}
              />
          )
        }
      </Base>
  );
}

export default LatestTvSection;