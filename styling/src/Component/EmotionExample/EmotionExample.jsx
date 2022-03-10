import React from 'react';
//create-react-app으로 만든 react app은 /** @jsx jsx */를 사용할 수 없다
//import {css, jsx} from "@emotion/react";
/** @jsxImportSource @emotion/react */ //대신 이걸 사용할 수 있다.
import {css} from '@emotion/react'


const color = 'white'

function EmotionExample() {
    //css props를 제공해서 style을 먹일 수 있도록 함
    return (
        <div
            css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color: ${color};
      }
    `}>
            Hover to change color.
        </div>
    );
}

export default EmotionExample;