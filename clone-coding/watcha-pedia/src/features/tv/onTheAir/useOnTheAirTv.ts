import {useQuery} from 'react-query';
import {AxiosError, AxiosResponse} from "axios";
import {ListResponse, TVDetail} from "../../../types";
import {onTheAirApi} from "../../../apis/tvApi";

const useOnTheAirTv = () => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('OnTheAirTv', onTheAirApi);
}

export default useOnTheAirTv;