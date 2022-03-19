import logo from './logo.svg';
import './App.css';
// import TestMocking from "./Components/TestMocking";
// import Profile from "./Components/SWRExample/Profile";
// import Cache from "./Components/SWRExample/Cache";
import Counter from "./Features/Counter/Counter";
import Counter2 from "./Components/Counter2";

function App() {
  return (
      <div className="App">
        <Counter/>
        <br/>
        <Counter2/>
        {/*<Profile/>*/}
        {/*<Cache/>*/}
        {/* <TestMocking />*/}
      </div>
  );
}

export default App;
