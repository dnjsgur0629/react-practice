import React from 'react';

function Launches({data}) {
  if (data == null){
    return <div>Loading...</div>
  }

  return (
  <div>
    <ol>
      {data.map((launch, index) => (
      <li key={index}>{launch.mission_name}</li>
      ))}
    </ol>
  </div>
  );
}

export async function getStaticProps(context) {
  const res = await fetch("https://api.spacexdata.com/v3/launches")
  const data = await res.json();  //launches의 useEffect에서 data를 가져오던 부분을 가져와서 serve side에서 미리 그려질 수 있도록 함
  console.log("Server side props")
  return {
    props: {data}, // page 컴포넌트에 props로 전달이 될 것임
  };
}

// export async function getServerSideProps(context) {
//     const res = await fetch("https://api.spacexdata.com/v3/launches")
//     const data = await res.json();  //launches의 useEffect에서 data를 가져오던 부분을 가져와서 serve side에서 미리 그려질 수 있도록 함
//   console.log("Server side props")
//   return {
//     props: {data}, // page 컴포넌트에 props로 전달이 될 것임
//   };
// }

export default Launches;