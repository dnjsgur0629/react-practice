import React from 'react';
import {useRecoilState, useRecoilValue} from "recoil";
import {fontSizeLabelState, fontSizeState} from "./RecoilStore";
import {textState} from "./CounterStore";

function FontButton() {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);
    const fontSizeLabel = useRecoilValue(fontSizeLabelState);
    const text = useRecoilValue(textState)

    return (
        <>
            <div>Current font size: {fontSizeLabel}</div>
            <button
                onClick={() => setFontSize(fontSize + 1)}
                style={{fontSize}}>
                Click to Enlarge {text}
            </button>
        </>
    );
}

export default FontButton;