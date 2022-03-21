import React from 'react';
import {useRecoilValue} from "recoil";
import {fontSizeState} from "./RecoilStore";

function Text() {
    const fontSize = useRecoilValue(fontSizeState);  //값만 꺼내 쓰는 hook
    return <p style={{fontSize}}>This text will increase in size too.</p>;
}

export default Text;