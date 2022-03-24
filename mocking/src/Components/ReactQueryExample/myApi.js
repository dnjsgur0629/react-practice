import axios from "axios";

//사용할 fetcher들을 모아놓은 파일
export const getTodos = () => axios.get("/api/todos").then((res) => res.data);

export const postTodo = (todo) => axios.post("/api/todo", {todo}).then((res) => res.data);