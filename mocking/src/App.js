import logo from './logo.svg';
import './App.css';
// import TestMocking from "./Components/TestMocking";
import Profile from "./Components/SWRExample/Profile";
import Cache from "./Components/SWRExample/Cache";

function App() {
    return (
        <div className="App">
            <Profile/>
            <Cache/>
            {/* <TestMocking />*/}
        </div>
    );
}

export default App;
