import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../Features/Counter/CounterSlice"

export default configureStore({ //store 생성
  reducer: {
    counter: counterReducer //counterSlice에서 가져온 reducer
  } //store를 생성할 때는 reducer가 필요
});