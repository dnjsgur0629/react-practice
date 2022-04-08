import React, {useEffect, useState} from 'react';
import Pagination from "./components/Pagination";
import axios from "axios";

// fake api의 response type을 지정하기 위한 interface들
interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quarters: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline,
  __v: number
}

interface Response {
  totalPassengers: number,
  totalPages: number,
  data: Array<Passenger>;
}

function App() {
  const [page, setPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const [items, setItems] = useState<Array<Passenger>>([]);

  useEffect(() => {
    const fetch = async () => {
      const params = {page, size: 10};
      const {
        data: {
          totalPages,
          data
        }
      } = await axios.get<Response>('https://api.instantwebtools.net/v1/passenger', {params}) //fake api사용
      setTotalPage(totalPages);
      setItems(data);
    }
    fetch();
  }, []);

  const handlePageChange = (currentPage: number) => {
    setPage(currentPage);
  }

  return (
      <div>
        <ul>
          {
            items.map(item => (
                <li key={item._id}>{item.name}</li>
            ))
          }
        </ul>
        <Pagination count={totalPage} page={page} onPageChange={handlePageChange}/>
      </div>
  );
}

export default App;
