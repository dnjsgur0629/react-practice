import create from "zustand";

const useStore = create((set) => ({
    textState: "",
    setTextState: (text) => set(() => ({textState: text})),
}));

function CharacterCounter() {
    return (
        <div>
            <TextInput/>
            <CharacterCount/>
        </div>
    );
}

function TextInput() {
    const [text, setText] = useStore((state) => [ //배열로 꺼낼 수도 있다.
        state.textState,
        state.setTextState,
    ]);

    const onChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div>
            <input type="text" value={text} onChange={onChange}/>
            <br/>
            Echo: {text}
        </div>
    );
}

function CharacterCount() {
    const count = useStore((state) => state.textState.length);

    return <>Character Count: {count}</>;
}

export default CharacterCounter;