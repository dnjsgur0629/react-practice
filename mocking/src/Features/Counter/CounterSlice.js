import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIncrement = createAsyncThunk(
    'Counter/fetchIncrement',
    async (value) => {
      const response = await axios.put("/counter/increment", { value: value })  //axios
      return response.data;
    }
)

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
  extraReducers: {  //새로운 reducer 생성
    [fetchIncrement.fulfilled]: (state, action) => {   //fetchIncrement가 성공했을 때
      state.value = action.payload.value;   //state의 value를 action에서 payload로 넘어온 값으로
    },
  }
});

export const { increment, decrement, incrementByAmount } = CounterSlice.actions   //reducer에서 만든 동작들은 자동으로 actions로 만들어져있다.

export default CounterSlice.reducer;  //reducer를 반환