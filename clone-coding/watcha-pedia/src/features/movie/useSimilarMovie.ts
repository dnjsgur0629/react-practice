import React from 'react';
import {useQuery} from "react-query";
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse, MovieDetail} from "../../types";
import {similarApi} from "../../apis/movieApi";

const useSimilarMovie = (id: string | undefined) => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>(
      ['similarMovie', id],
      () => similarApi(id) //query가 있을 때만 동작
  );
}

export default useSimilarMovie;