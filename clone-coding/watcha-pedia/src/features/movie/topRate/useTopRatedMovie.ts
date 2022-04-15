import {useQuery} from 'react-query';
import {topRatedApi} from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, ListResponse} from "../../../types";

const useTopRatedMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('topRatedMovie', topRatedApi);
}

export default useTopRatedMovie;