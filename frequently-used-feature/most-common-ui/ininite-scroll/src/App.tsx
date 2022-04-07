import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {throttle} from "throttle-debounce";

interface Airline {
  id:number;
  name:string;
  country:string;
  logo:string;
  slogan:string;
  head_quarter:string;
  website:string;
  established:string;
}

interface Passenger {
  _id:string;
  name:string;
  trips:number;
  airline:Airline;
  __v:number;
}

function App() {
  const [passengers, setPassengers] = useState<Array<Passenger>>([]);
  const [isLast, setIsLast] = useState<boolean>(false);
  const [isScrollBottom, setIsScrollBottom] = useState<boolean>(false);
  const currentPageRef = useRef<number>(0);
  const listRef = useRef<HTMLUListElement>(null);

  const getPassengers = async (init?: boolean) => {
    const params = {page: currentPageRef.current, size: 30}
    try{
      const response = await axios.get('https://api.instantwebtools.net/v1/passenger', {params});
      const passengers = response.data.data;
      const isLast = response.data.totalPages === currentPageRef.current; //현재 페이지가 totalPage랑 같으면 마지막인 것

      init ? setPassengers(passengers): setPassengers(prev => [...prev, ...passengers]);  //처음에는 받은 passenger 그대로 set 이후부터는 이전 passengers에 덧붙이기
      setIsLast(isLast);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    getPassengers(true);  //최초에 init에 true를 전달
  },[])

  useEffect(() => {
    if (isScrollBottom) {
      currentPageRef.current += 1;
      !isLast && getPassengers();
    }
  },[isScrollBottom, isLast]);


  const handleScroll=throttle(500, ()=>{
    if(listRef.current){
      const { scrollHeight, offsetHeight, scrollTop } = listRef.current;
      const offset = 50;

      setIsScrollBottom(scrollHeight - offsetHeight - scrollTop < offset);
    }
  })

  return (
    <div>
      <ul ref={listRef} className="list" onScroll={handleScroll}>
        <li className="item">
          {
            passengers.map(passenger => (<li className="item" key={passenger._id}>{passenger.name}</li>))
          }
        </li>
      </ul>
    </div>
  );
}

export default App;
