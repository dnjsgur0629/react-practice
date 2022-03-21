import './App.css';
import {RecoilRoot} from "recoil";
import FontButton from "./Components/RecoilExample/FontButton";
import Text from "./Components/RecoilExample/Text";
import CharacterCounter from "./Components/RecoilExample/CharacterCounter";
import TodoList from "./Components/RecoilExample/Todo/TodoList";
// import TestMocking from "./Components/TestMocking";
// import Profile from "./Components/SWRExample/Profile";
// import Cache from "./Components/SWRExample/Cache";
// import Counter from "./Features/Counter/Counter";
// import MobxExample from "./Components/MobxExample";
// import TodoList from "./Components/TodoList";
// import {observableTodoStore} from "./app/ObservableTodoStore";
// import Counter2 from "./Components/Counter2";

function App() {
    return (
        <div className="App">
            {/*<TodoList store={observableTodoStore}/>*/}
            {/*<MobxExample/>*/}
            {/*<Counter/>*/}
            {/*<br/>*/}
            {/*<Counter2/>*/}
            {/*<Profile/>*/}
            {/*<Cache/>*/}
            {/* <TestMocking />*/}
            <RecoilRoot>
                {/*<FontButton/>*/}
                {/*<Text/>*/}
                {/*<CharacterCounter/>*/}
                <TodoList/>
            </RecoilRoot>
        </div>
    );
}

export default App;
