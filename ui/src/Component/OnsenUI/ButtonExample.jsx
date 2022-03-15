import React from 'react';
import {Button} from "react-onsenui";

function ButtonExample() {
    const handleClick = () => {
        alert("pressed");
    }
    return (
        <>
            <Button onClick={handleClick} modifier="large--cta">    {/*modifier: 버튼의 스타일*/}
                large--cta
            </Button>
            <br/>
            <br/>
            <Button onClick={handleClick} modifier="cta">
                cta
            </Button>
            <br/>
            <br/>
            <Button onClick={handleClick} modifier="outline">
                outline
            </Button>
            <br/>
            <br/>
            <Button onClick={handleClick} modifier="light">
                light
            </Button>
            <br/>
            <br/>
            <Button onClick={handleClick} modifier="quiet">
                quiet
            </Button>
            <br/>
            <br/>
            <Button onClick={handleClick} modifier="large--quiet">
                large-quiet
            </Button>
            <br/>
            <br/>
            <Button onClick={handleClick} modifier="material">
                material
            </Button>
            <br/>
            <br/>
            <Button onClick={handleClick} modifier="material--flat">
                material--flat
            </Button>
            <br/>
            <br/>
            <Button onClick={handleClick} disabled={true}>
                Disabled
            </Button>
        </>
    );
}

export default ButtonExample;