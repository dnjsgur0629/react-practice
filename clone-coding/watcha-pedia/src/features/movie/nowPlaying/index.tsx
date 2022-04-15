import React from 'react';
import useNowPlayingMovie from "./useNowPlayingMovie";
import MovieCardSlider from "../../../components/MovieCardSlider";

const NowPlayingSection: React.FC = () => {
  const {data, isLoading} = useNowPlayingMovie();

  return (
      <MovieCardSlider title="현재 상영작" data={data} isLoading={isLoading}/>
  );
}

export default NowPlayingSection;