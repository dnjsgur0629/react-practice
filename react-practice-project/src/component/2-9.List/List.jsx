import React from "react";

export default function List() {
  const todos = [
    { id: 1, text: "Drink Water" },
    { id: 2, text: "Wash Car" },
    { id: 3, text: "Listen Lecture" },
    { id: 4, text: "Go to Bed" },
  ];

  const Item = (props) => {
    return (
      <li>
        {/*{props.key} key는 props가 아니라 고유성을 판단할 때만 사용한다 (자식에게 넘어오지 않음)*/}
        {props.text}
      </li>
    );
  };

  //Component에 unique한 key부여
  const todoList = todos.map((todo) => <Item key={todo.id} {...todo} />);

  return <>{todoList}</>;
}
