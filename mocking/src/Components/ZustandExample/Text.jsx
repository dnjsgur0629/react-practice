import React from 'react';
import create from "zustand";

const useStore = create((set) => ({
    fontSize: 14,
    increaseFontSize: () => set((state) => ({fontSize: state.fontSize + 1})),    /*객체를 return*/
    trigger: false,
    toggleTrigger: () => set((state) => ({trigger: !state.trigger})),
}));

function FontLabel() {
    const {fontSize, increaseFontSize, fontSizeLabel, trigger, toggleTrigger} = useStore(
        (state) => ({   //useStore를 비구조화해서 한 번에 여러개 가져옴
            fontSize: state.fontSize,
            increaseFontSize: state.increaseFontSize,
            fontSizeLabel: state.fontSize + 'px',
            trigger: state.trigger,
            toggleTrigger: state.toggleTrigger,
        }), (oldState, newState) => oldState.trigger === newState.trigger
    );
    //oldState.trigger와 newState.trigger가 같으면 state를 update하지 않음
    //즉 trigger가 toggle 될 때만 update

    return (<>
        <div style={{fontSize}}>Current font size: {fontSizeLabel}</div>
        <button onClick={increaseFontSize}>font size up</button>
        <button onClick={toggleTrigger}>toggle {trigger.toString()}</button>
    </>)
}

function Text() {
    const fontSize = useStore((state) => state.fontSize)

    return <>
        <p style={{fontSize}}>This text will increase in size too.</p>
        <FontLabel/>
    </>;
}

export default Text;