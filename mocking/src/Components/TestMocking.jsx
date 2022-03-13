import React, {useState} from 'react';

const Item = ({name, age}) => {
  return (<li>
    name: {name} / age: {age}
  </li>);
}

const url = "https://raw.githubusercontent.com/techoi/raw-data-api/main/simple-api.json?id=react";

function TestMocking() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => { //응답이 오면 response를 json형태로 꺼내서 setData해주거나 error가 발생했다면 setError
    fetch(url).then((response) => {
      return response.json();
    }).then((json) => {
      setData(json.data);
    }).catch((error) => {
      setError(`Somthing Wrong: ${error}`);
    });
  };

  const handleClick2 = () => { //login으로 요청을 보내서 응답을 받아옴 (mocked data를 받아올 것임)
    fetch('/login').then((response) => {
      return response.json();
    }).then((json) => {
      if (json.errorMessage) {
        throw new Error(json.errorMessage);
      }
      console.log(JSON.stringify(json))
    }).catch((error) => {
      setError(`Somthing Wrong: ${error}`);
    });
  };

  if (error) {
    return <p>{error}</p>;
  }

  return (<div>
    <button onClick={handleClick}>데이터 가져오기 mocking</button>
    <button onClick={handleClick2}>Login mocking</button>
    {data && (
        <ul>
          {data.people.map((person) => (
              <Item
                  key={`${person.name}-${person.age}`}
                  name={person.name}
                  age={person.age}/>
          ))}
        </ul>
    )}
  </div>);
}

export default TestMocking;