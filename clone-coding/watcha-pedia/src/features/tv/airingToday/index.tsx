import React from 'react';
import TvCardSlider from "../../../components/TvCardSlider";
import useAiringTodayTv from "./useAiringTodayTv";

const AiringTodaySection: React.FC = () => {
  const {data, isLoading} = useAiringTodayTv();

  return (
      <TvCardSlider title="현재 방영작" data={data} isLoading={isLoading}/>
  );
}

export default AiringTodaySection;