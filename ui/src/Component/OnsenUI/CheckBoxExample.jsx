import React from 'react';
import {Checkbox, List, ListItem} from "react-onsenui";

function CheckBoxExample() {
    return (
        <List>
            <ListItem tappable>
                <label className="left">   {/* className="left"도 onsenui에서 무언가 css가 먹여져 있는 것이다.*/}
                    <Checkbox input-id="check-1"></Checkbox>
                </label>
                <label htmlFor="check-1" className="center">
                    Apple
                </label>
            </ListItem>
            <ListItem tappable>
                <label className="left">
                    <Checkbox input-id="check-2" checked></Checkbox>
                </label>
                <label htmlFor="check-2" className="center">
                    Banana
                </label>
            </ListItem>
        </List>
    );
}

export default CheckBoxExample;