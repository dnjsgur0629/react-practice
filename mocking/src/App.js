import './App.css';
// import Fetcher from "./Components/SWRExample/Fetcher";
// import Text from "./Components/ZustandExample/Text";
// import CharacterCounter from "./Components/ZustandExample/CharacterCounter";
// import TodoList from "./Components/ZustandExample/Todo/TodoList";
// import CurrentUserInfo from "./Components/ZustandExample/CurrentUserInfo";
// import Scratches from "./Components/ZustandExample/Scratches";
// import {RecoilRoot} from "recoil";
// import FontButton from "./Components/RecoilExample/FontButton";
// import CharacterCounter from "./Components/RecoilExample/CharacterCounter";
// import TodoList from "./Components/RecoilExample/Todo/TodoList";
// import CurrentUserInfo from "./Components/RecoilExample/CurrentUserInfo";
// import TestMocking from "./Components/TestMocking";
// import Profile from "./Components/SWRExample/Profile";
// import Cache from "./Components/SWRExample/Cache";
// import Mutate from "./Components/SWRExample/Mutate";
// import Pagination from "./Components/SWRExample/Pagination";
import Example from "./Components/ReactQueryExample/Example";
import {QueryClient, QueryClientProvider} from "react-query";
import QuickStart from "./Components/ReactQueryExample/QuickStart";
import {ReactQueryDevtools} from 'react-query/devtools'
import Pagination from "./Components/ReactQueryExample/Pagination";
// import Counter from "./Features/Counter/Counter";
// import MobxExample from "./Components/MobxExample";
// import TodoList from "./Components/TodoList";
// import {observableTodoStore} from "./app/ObservableTodoStore";
// import Counter2 from "./Components/Counter2";

const queryClient = new QueryClient();  //새로운 QueryClient생성

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
            {/*<RecoilRoot>
            <FontButton/>
            <Text/>
            <CharacterCounter/>
            <TodoList/>
            <CurrentUserInfo/>
        </RecoilRoot>*/}
            {/*<Text/>*/}
            {/*<CharacterCounter/>*/}
            {/*<TodoList/>*/}
            {/*<CurrentUserInfo/>*/}
            {/*<Scratches/>*/}
            {/*<Fetcher/>*/}
            {/*<Mutate/>*/}
            {/*<Pagination/>*/}
            <QueryClientProvider client={queryClient}>  {/*Provider에 client로 queryClient주입*/}
                <ReactQueryDevtools initialIsOpen={false}/>
                <Example/>
                <QuickStart/>
                <Pagination/>
            </QueryClientProvider>
        </div>
    );
}

export default App;
