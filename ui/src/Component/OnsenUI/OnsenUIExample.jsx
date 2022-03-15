import React from 'react';
import ButtonExample from "./ButtonExample";
import {Page} from "react-onsenui";
import ActionSheetExample from "./ActionSheetExample";
import CheckBoxExample from "./CheckBoxExample";
import FabExample from "./FabExample";
import ListExample from "./ListExample";
import ProgessExample from "./ProgessExample";
// import TabExample from "./TabExample";
import AlertExample from "./AlertExample"; //Page : 배경색을 약간 회색으로 함

function OnsenUiExample() {
    return (<Page>
            <AlertExample/>
            {/*<TabExample/>*/}
            <br/>
            <ProgessExample/>
            <br/>
            <ListExample/>
            <br/>
            <FabExample/>
            <br/>
            <CheckBoxExample/>
            <br/>
            <ActionSheetExample/>
            <br/>
            <ButtonExample/>
        </Page>);
}

export default OnsenUiExample;