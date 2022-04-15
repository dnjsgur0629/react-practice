import {useQuery} from 'react-query';
import {upcomingApi} from '../../../apis/movieApi';
import {AxiosError, AxiosResponse} from "axios";
import {MovieDetail, ListResponse} from "../../../types";

const useUpComingMovie = () => {
  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upComingMovie', upcomingApi);
}

export default useUpComingMovie;