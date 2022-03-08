import React, { useState } from "react";

//Dialog에 style을 줘서 좀 더 우리가 평소에 보던 Dialog처럼 만들어보자
function Dialog(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Open</button>
      {/*Condition && expression 사용*/}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            zIndex: 99,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            border: "1px solid black",
            padding: 24,
            backgroundColor: "white",
          }}
        >
          {/*title이 string이라면 title을 그려주고 아니라면 props.title자체를 return한다
          이 컴포넌트를 사용하는 컴포넌트에서 커스텀해서 사용할 수도 있다.*/}
          {typeof props.title === "string" ? (
            <h1>{props.title}</h1>
          ) : (
            props.title
          )}

          {typeof props.description === "string" ? (
            <h5>{props.description}</h5>
          ) : (
            props.description
          )}

          {typeof props.button === "string" ? (
            <button
              style={{
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => setIsOpen(false)}
            >
              {props.button}
            </button>
          ) : (
            <div onClick={() => setIsOpen(false)}>{props.button}</div>
          )}
          {/* props를 커스텀하고 싶지만 이벤트는 그대로 쓰고 싶다면
        새로운 부모 태그로 묶어서 이벤트를 먹여줄 수 있다.*/}
        </div>
      )}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: "lightgray",
          }}
        />
      )}
    </>
  );
}

export default Dialog;
