import React from 'react';
import useUpComingMovie from "./useUpComingMovie";
import MovieCardSlider from "../../../components/MovieCardSlider";

const UpComingSection: React.FC = () => {
  const {data, isLoading} = useUpComingMovie();

  return (
      <MovieCardSlider title="개봉 예정작" data={data} isLoading={isLoading}/>
  );
}

export default UpComingSection;