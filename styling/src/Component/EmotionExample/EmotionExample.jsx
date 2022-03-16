import React from 'react';
//create-react-app으로 만든 react app은 /** @IconLabelButtons.jsx IconLabelButtons.jsx */를 사용할 수 없다
//import {css, IconLabelButtons.jsx} from "@emotion/react";
/** @jsxImportSource @emotion/react */ //대신 이걸 사용할 수 있다.
import {ClassNames, Global, css} from '@emotion/react'
import styled from "@emotion/styled"; //emotion에서 styled방식을 사용할 수 있게 해줌

//styled 라이브러리를 선호하는 경우 styled의 방식을 사용할 수도 있음
/*const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }`

const color = 'white'

//css로 style을 줄글로 전달할 수도 있고
const hotpinkStyle = css`
  color: hotpink;
`

const SomeComponent = ({ children }) => (
    <div css={hotpinkStyle}>
      Some hotpink text.
      {children}
    </div>
)

//css로 객체를 전달할 수도 있다.
const anotherStyle = css({
  textDecoration: 'underline'
})

//여러개의 style을 배열 형태로 겹쳐서 먹일 수도 있음
const AnotherComponent = () => (
    <div css={[anotherStyle, hotpinkStyle]}>Some text with an underline.</div>
)*/

/*//미리 style을 담은 component를 만들어 놓고
const P = props => (
    <p
        css={{
          margin: 0,
          fontSize: 12,
          lineHeight: '1.5',
          fontFamily: 'Sans-Serif',
          color: 'black'
        }}
        {...props} // <- props contains the `className` prop
    />
)

//style을 담은 component를 재사용 (override해서 사용도 가능)
const ArticleText = props => (
    <P
        css={{
          fontSize: 14,
          fontFamily: 'Georgia, serif',
          color: 'darkgray'
        }}
        {...props} // <- props contains the `className` prop
    />
);*/

/*const danger = css`
  color: red;
`

const base = css`
  background-color: darkgreen;
  color: turquoise;
`*/

// this might be a component from npm that accepts a wrapperClassName prop
let ClassNamesComponent = props => (
    <div className={props.wrapperClassName}>
      in the wrapper!
      <div className={props.className}>{props.children}</div>
    </div>
)

function EmotionExample() {
  //css props를 제공해서 style을 먹일 수 있도록 함
  //styled와 비슷하게 template literal로 표현 (``)
  //&: 자기자신을 가리키는 가상선택자 (styled와 동일)
  return (
      <>
        <ClassNames>
          {({ css, cx }) => (
              <ClassNamesComponent
                  wrapperClassName={css({ color: 'green' })}
                  className={css`
          color: hotpink;
        `}
              >
                from children!!
              </ClassNamesComponent>
          )}
        </ClassNames>
      {/*<Global
          styles={css`
        .some-class {
          color: hotpink !important;
        }
      `}
      />
      <Global
          styles={{
            '.some-class': {
              fontSize: 50,
              textAlign: 'center'
            }
          }}
      />
      <div className="some-class">This is hotpink now!</div>*/}
        {/*media query로 창의 width가 420px보다 크면 font-size가 50px 작으면 30px가 되게함*/}
       {/* <p
            css={css`
              font-size: 30px;
              @media (min-width: 420px) {
              font-size: 50px;
              }
            `}
        >
          Some text!
        </p>
        <div css={base}>This will be turquoise</div>
        <div css={[danger, base]}>
          This will be also be turquoise since the base styles overwrite the danger
          styles.
        </div>
        <div css={[base, danger]}>This will be red</div>*/}
        {/*겹치는 style만 override하는 것이지 대체하는 것이 아님*/}
        {/*<P>PPPPP</P>
        <ArticleText>Article</ArticleText>*/}
        {/*<div
            css={css`
      padding: 32px;
      background-color: hotpink;
      font-size: 24px;
      border-radius: 4px;
      &:hover {
        color:  ${color};
      }
    `}>
          Hover to change color.
        </div>
        <Button>Hello</Button>
        <SomeComponent />
        <AnotherComponent />*/}
      </>
  );
}

export default EmotionExample;