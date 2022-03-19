import {createSlice} from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = CounterSlice.actions   //reducer에서 만든 동작들은 자동으로 actions로 만들어져있다.

export default CounterSlice.reducer;  //reducer를 반환