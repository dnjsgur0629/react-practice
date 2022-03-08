import React, { useEffect, useState } from "react";

//HOC는 컴포넌트를 인자로 받는 일종의 함수이기 때문에 이름도 시작을 소문자로 함
//1초동안 Loading을 띄우고 1초 뒤에 그려주는 동작을 HOC로 뽑아냄
function withLoading(Component) {
  //컴포넌트가 아닌 함수에서 훅을 사용할 수는 없기 때문에 함수 안에서 새로운 컴포넌트를 만들어서 반환
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 1000);

      return () => clearTimeout(timer);
    }, []);
    //1초간 loading하고 인자로 받은 컴포넌트를 props도 같이 넘겨주면서 그려줌
    return loading ? <p>loading...</p> : <Component {...props} />;
  };
}

export default withLoading;
