import React from 'react';
import usePopularMovie from "./usePopularMovie";
import MovieCardSlider from "../../../components/MovieCardSlider";

const PopularSection: React.FC = () => {
  const {data, isLoading} = usePopularMovie();

  return (
      <MovieCardSlider title="인기 상영작" data={data} isLoading={isLoading}/>
  );
}

export default PopularSection;