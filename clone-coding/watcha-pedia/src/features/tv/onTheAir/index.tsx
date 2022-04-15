import React from 'react';
import TvCardSlider from "../../../components/TvCardSlider";
import useOnTheAirTv from "./useOnTheAirTv";

const OnTheAirSection: React.FC = () => {
  const {data, isLoading} = useOnTheAirTv();

  return (
      <TvCardSlider title="실시간" data={data} isLoading={isLoading}/>
  );
}

export default OnTheAirSection;