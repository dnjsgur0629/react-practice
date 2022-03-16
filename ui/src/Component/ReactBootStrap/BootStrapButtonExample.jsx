import React from 'react';
import {Button, ButtonGroup, Spinner} from "react-bootstrap";

function BootStrapButtonExample() {
    return (
        <>
            <ButtonGroup size="lg" className="mb-2">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <br/>
            <ButtonGroup className="mb-4">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <br/>
            <ButtonGroup size="sm">
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>
            <br/>
            <br/>
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="border"   /*Spinner모양 종류*/
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                <span className="visually-hidden">Loading...</span>   {/*visually-hidden: 숨김*/}
            </Button>{' '}
            <Button variant="primary" disabled>
                <Spinner
                    as="span"
                    animation="grow"    /*Spinner모양 종류*/
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </>
    );
}

export default BootStrapButtonExample;