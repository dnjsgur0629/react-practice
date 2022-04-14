import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import { UseQueryResult} from "react-query/types/react/types";

import { EvolutionChainResponse } from '../types';

const useEvolutionChain = (url?: string): UseQueryResult<AxiosResponse<EvolutionChainResponse>, Error> => (
    useQuery(['evolution', { url }], () => url ? axios.get(url) : null)
)

export default useEvolutionChain;