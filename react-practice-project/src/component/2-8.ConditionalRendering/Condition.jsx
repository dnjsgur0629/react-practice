import React from "react";

function UserGreeting(props) {
  //Condition && expression형태태fh name이나 count가 전달 됐을 때를 구분함
  return (
    <h1>
      {props.name && `${props.name},`} Welcome
      {Boolean(props.count) && `It's ${props.count} times`}
      {/*또는 이렇게 {props.count ? `It's ${props.count} times` : null*/}
      {/*0은 false가 아닌 falsy한 값이다. Boolean(0)은 false지만 0은 false는 아니다.*/}
    </h1>
  );
}

function GuestGreeting() {
  return <h1>Plaese Sign up.</h1>;
}

function Greeting(props) {
  /*if (props.isLoggedIn) {
    return <UserGreeting name={"hyeok"} count={0} />;
  }
  return <GuestGreeting />;
  삼항연사자로 아래처럼 표현 가능
  */
  return props.isLoggedIn ? (
    <UserGreeting name="hyeok" count={0} />
  ) : (
    <GuestGreeting />
  );
}

export default function Condition() {
  const isLoggedIn = true;

  return (
    <div>
      <Greeting isLoggedIn={isLoggedIn} />
    </div>
  );
}
