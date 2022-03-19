import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment, incrementByAmount} from "../Features/Counter/CounterSlice";

function Counter(props) {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
      <div>
        <div>
          <button onClick={() => dispatch(increment())}>increment</button>  {/*이벤트리스너에 action을 주입한 dispatch를 사용*/}
          <span>{count}</span>
          <button onClick={() => dispatch(decrement())}>decrement</button>
          <button onClick={() => dispatch(incrementByAmount(5))}>increment 5</button> {/*payload전달*/}
        </div>
      </div>
  );
}

export default Counter;