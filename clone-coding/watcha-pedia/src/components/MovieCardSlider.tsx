import CustomSlider from "./CustomSlider";
import Card from "./Card";
import React from "react";
import styled from "@emotion/styled";
import {ListResponse, MovieDetail} from "../types";
import {AxiosResponse} from "axios";

type Props = {
  title: string;
  data: AxiosResponse<ListResponse<MovieDetail>, any> | undefined;
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

const MovieCardSlider: React.FC<Props> = ({
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
                  data?.data?.results.map(movie => (
                      <div>
                        <Card
                            key={movie.id}
                            linkUrl={`/movie/${movie.id}`}
                            title={movie.title}
                            posterPath={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                            voteAverage={movie.vote_average}
                            year={getYear(movie.release_date)}
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

export default MovieCardSlider;