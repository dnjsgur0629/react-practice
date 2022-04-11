import React from 'react';
import {atom, RecoilRoot, selector, useRecoilValue} from "recoil";
import axios from "axios";
import Calendar from "./componenents/Calendar";

const todoIdState = atom({
  key: 'todoIdState',
  default: 1,
});

const todoItemQuery = selector({
  key: 'todoIdState',
  get: async ({get}) => {
    const id = get(todoIdState);

    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)

    return response.data;
  }
})

function App() {
  return (
      <RecoilRoot>
        <Calendar/>
      </RecoilRoot>
  );
}

export default App;
