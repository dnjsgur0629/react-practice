import axios from "axios";
import {useEffect, useRef, useState} from "react";
import * as React from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

interface Airline {
  id: number;
  name: string;
  country: string;
  logo: string;
  slogan: string;
  head_quarter: string;
  website: string;
  established: string;
}

interface Passenger {
  _id: string;
  name: string;
  trips: number;
  airline: Airline;
  __v: number;
}

interface Props {
  isLastItem: boolean;
  onFetchMorePassengers: () => void
}

const Passenger: React.FC<Props> = ({
                                      isLastItem,
                                      onFetchMorePassengers,
                                      children
                                    }) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});
  const isIntersecting = !!entry?.isIntersecting;

  useEffect(() => {
    isLastItem && isIntersecting && onFetchMorePassengers();
  }, [isLastItem, isIntersecting])

  return (
      <div
          ref={ref}
          style={{
            minHeight: '100vh',
            display: 'flex',
            border: '1px dashed #000'
          }}>
        {children}
      </div>
  )
}

function App() {
  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);  //현재 페이지

  useEffect(() => {
    !isLast && getPassengers();
  }, [page])

  const getPassengers = async (init?: boolean) => {
    const params = {size: 30, page}
    try {
      const response = await axios.get('https://api.instantwebtools.net/v1/passenger', {params});
      const passengers = response.data.data;
      const isLast = response.data.totalPages === page; //현재 페이지가 totalPage랑 같으면 마지막인 것

      setPassengers(prev => [...prev, ...passengers]);  //처음에는 받은 passenger 그대로 set 이후부터는 이전 passengers에 덧붙이기
      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  }
  return (
      <div>
        {
          passengers.map((passenger, idx) => (
              <Passenger
                  key={passenger._id}
                  isLastItem={passengers.length - 1 === idx}
                  onFetchMorePassengers={() => setPage(prev => page + 1)}  /*다음 항목을 불러오는 함수*/
              >{passenger.name}</Passenger>
          ))
        }
      </div>
  );
}

export default App;
