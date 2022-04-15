import React from 'react';
import TvCardSlider from "../../../components/TvCardSlider";
import useTopRatedTv from "./useTopRatedTv";

const TopRatedSection: React.FC = () => {
  const {data, isLoading} = useTopRatedTv();

  return (
      <TvCardSlider title="평점 높은 순" data={data} isLoading={isLoading}/>
  );
}

export default TopRatedSection;
