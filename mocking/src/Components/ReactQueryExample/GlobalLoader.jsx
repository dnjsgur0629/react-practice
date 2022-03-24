import {useIsFetching} from 'react-query'

export default function GlobalLoader() {
    const isFetching = useIsFetching()

    return isFetching ? (
        <div style={{color: "orange", backgroundColor: "black"}}>Queries are fetching in the background...</div>
    ) : null;
}