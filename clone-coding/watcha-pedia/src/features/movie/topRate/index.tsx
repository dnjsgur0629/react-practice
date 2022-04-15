import React from 'react';
import useTopRatedMovie from "./useTopRatedMovie";
import MovieCardSlider from "../../../components/MovieCardSlider";

const TopRatedSection: React.FC = () => {
  const {data, isLoading} = useTopRatedMovie();

  return (
      <MovieCardSlider title="평점 높은순" data={data} isLoading={isLoading}/>
  );
}

export default TopRatedSection;