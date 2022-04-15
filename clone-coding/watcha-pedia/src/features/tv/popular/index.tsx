import React from 'react';
import TvCardSlider from "../../../components/TvCardSlider";
import usePopularTv from "./usePopularTv";

const PoplarSection: React.FC = () => {
  const {data, isLoading} = usePopularTv();

  return (
      <TvCardSlider title="인기 방영작" data={data} isLoading={isLoading}/>
  );
}

export default PoplarSection;