import CustomSlider from "./CustomSlider";
import Card from "./Card";
import React from "react";
import styled from "@emotion/styled";
import {ListResponse, TVDetail} from "../types";
import {AxiosResponse} from "axios";

type Props = {
  title: string;
  data: AxiosResponse<ListResponse<TVDetail>, any> | undefined;
  isLoading: boolean;
}

const Base = styled.div`
  margin-bottom: 42px;
`;

const Title = styled.h4`
  font-size: 22px;
  font-weight: 700;
  line-height: 30px;
  padding: 12px 0 14px;
`;

const TvCardSlider: React.FC<Props> = ({
                                         title,
                                         data,
                                         isLoading
                                       }) => {

  const getYear = (date: string) => date.split('-')[0] || '';

  return (
      <Base>
        <Title>{title}</Title>
        {
          isLoading || !data ? (
              <div>Loading...</div>
          ) : (
              <CustomSlider>
                {
                  data?.data?.results.map(tv => (
                      <div>
                        <Card
                            key={tv.id}
                            linkUrl={`/tv/${tv.id}`}
                            title={tv.name}
                            posterPath={`https://image.tmdb.org/t/p/w300/${tv.poster_path}`}
                            voteAverage={tv.vote_average}
                            year={getYear(tv.first_air_date)}
                        />
                      </div>
                  ))
                }
              </CustomSlider>
          )
        }
      </Base>
  )
}

export default TvCardSlider;