import React, {useState} from 'react';
import styled, {createGlobalStyle, keyframes, ThemeProvider} from "styled-components";

//Getting Started
// Title Component의 style
/*const Title = styled.h1`
        font-size: 1.5em;
        text-align: center;
        color: palevioletred;
        `;

// Wrapper Component의 style
const Wrapper = styled.section`
            padding: 4em;
            background: papayawhip;
            `;

//Adapting based on props
/!*props에 따라 변하는 style의 background와 font의 색*!/
const Button = styled.button`
    background: ${props => props.primary ? "palevioletred" : "white"};
    color: ${props => props.primary ? "white" : "palevioletred"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
    `;

//Extending Styles 스타일을 상속하거나 확장
//Button의 style을 상속받아서 사용. color와 border-color만 변경
const TomatoButton = styled(Button)`
 color: tomato;
 border-color: tomato;
 `;

//children을 역순으로 뒤집는 Button Component
const ReversedButton = props => <Button {...props} children={props.children.split('').reverse()}/>*/

//&로 자기자신을 가리키 수 있고, 아래와 같이 중첩된 구조로 만들면 나중에 적용되는 style로 덮어씌워짐
/*const Thing = styled.div.attrs((/!* props *!/) => ({tabIndex: 0}))`
  color: blue;
  <!--&: 자기자신을 의미-->
  &:hover {
    color: red; <!--<Thing> when hovered (마우스를 올렸을 때 글자가 붉은색으로 변함)-->
  }

  & ~ & {
    background: tomato; <!--<Thing> as a sibling of <Thing>, but maybe not directly next to it (뒤에 나오면서 같은 부모를 공유하는 형제)-->
  }
  
  & + & {
    background: lime; <!--<Thing> next to <Thing> (+: 바로 다음의) -->   
  }

  &.something {
    background: orange; <!--<Thing> tagged with an additional CSS class ".something" (className이 something인)-->
  }

  .something-else & {
    border: 1px solid; <!--<Thing> inside another element labeled ".something-else"(className이 something인 것의 자식인 Thing)-->
  }
`*/

//Attaching additional props
//Overriding .attrs - 이미 주어진 props를 조작할 수 있다
/*const Input = styled.input.attrs(props => ({    //.attrs를 이용해서 props를 사용
    type: "text",   //type을 text로 고정
    size: props.size || "1em",  //size는 props로 받는 size가 있으면 쓰고 없으면 1em(16px)
}))`
  border: 2px solid palevioletred;
  margin: ${props => props.size};
  padding: ${props => props.size};
`;  //style에서도 props 이용

// Input's attrs will be applied first, and then this attrs obj
const PasswordInput = styled(Input).attrs({     //Input의 Style을 상속받음
    type: "password",   //type만 password로 고정
})`
  border: 2px solid aqua;
`;*/

//keyframes(Animation을 사용하기 위한 도구)를 선언 (0도에서 360도까지 돌리기)
/*const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

//animation: ${rotate} 2s linear infinite; : 2초간 linear하게 무한히 rotate를 실행
const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;*/

// Define our button, but with the use of props.theme this time
// text color와 border color를 props.theme에 지정된 색으로
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  color: ${props => props.theme.color};
  border: 2px solid ${props => props.theme.borderColor};
`;

//ThemeProvider로 싸여 있지 않으면 default theme 적용
Button.defaultProps = {
    theme: {
        color: "red",
        borderColor: "pink",
    }
}

// Define what props.theme will look like
const greenTheme = {
    color: "green",
    borderColor: "lime"
};

const blueTheme = {
    color: "blue",
    borderColor: "skyblue",
}

//css가 global하게 적용되는 게 싫어서 styled를 사용했지만
//global한 적용이 필요할 때도 있다. 그럴 때는 createGlobalStyled을 활용할 수 있다.
const GlobalStyle = createGlobalStyle` 
  button {
    background-color: lightcyan;
  }
`

function StyledComponentsExample() {
    const [theme, setTheme] = useState(greenTheme); //theme을 상태로 관리해서 toggle할 수 있게
    return (
        <>
            <div>
                <GlobalStyle/> {/*createGlobalStyle로 만든 styled component를 먹여주면 global style을 전체에 주입할 수 있다.*/}
                <button onClick={() => setTheme(greenTheme)}>green</button>
                {/*theme을 toggle할 수 있는 버튼*/}
                <button onClick={() => setTheme(blueTheme)}>blue</button>
                <br/>
                <Button>default Theme</Button>
                <ThemeProvider theme={theme}> {/*Theme 적용 - 전에는 Context를 사용해서 했는데 훨씬 편해졌다!*/}
                    <Button>Themed</Button>
                </ThemeProvider>
            </div>
            <div>
                <button>심지어 GlobalStyle 컴포넌트를 작성한 영역뿐 아니라 바깥 영역까지 전부 다 먹힌다.</button>
            </div>
            {/*<Rotate>&lt; 💅🏾 &gt;</Rotate>*/
            }
            {/*<Input placeholder="A bigger text input" size="2em"/> 원래 input tag에는 없는 size 속성
            <br/>
             Notice we can still use the size attr from Input
            <PasswordInput placeholder="A bigger password input"/>*/
            }
            {/*<Thing>Hello world!</Thing>
            <Thing>How ya doing?</Thing>
            <Thing className="something">The sun is shining...</Thing>
            <div>Pretty nice day today.</div>
            <Thing>Don't you think?</Thing>
            <div className="something-else">
                <Thing>Splendid.</Thing>
            </div>*/
            }
            {/*<Wrapper>
            <Title>
                Hello World!
            </Title>
        </Wrapper>
        <div>
            <Button onClick={() => alert('normal')}>Normal</Button>
            <Button onClick={() => alert('primary')} primary>Primary</Button>
        </div>
        <TomatoButton>Tomato</TomatoButton>
        <br/>
        as="someTagName" : styled component가 native의 태그 처럼 동작할 수 있게함 (확장성)
        <Button as="a" href="#">Link with Button styles</Button>
        <TomatoButton as="a" href="#">Link with Tomato Button styles</TomatoButton>
        <br/>
        as 안에는 native tag만 들어갈 수 있는 것도 아니다
        <Button as={ReversedButton}>Custom Button with Normal Button styles</Button>*/}
        </>
    );
}

//컴포넌트를 따로 만들어 준 적이 없는데 styled만으로 style이 들어간 컴포넌트가 만들어지는 효과!

export default StyledComponentsExample;