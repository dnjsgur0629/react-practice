import React from 'react';
import {ProgressBar, ProgressCircular} from 'react-onsenui'

function ProgessExample() {
    return (
        <div>
            <ProgressCircular indeterminate></ProgressCircular>
            <ProgressCircular value="30" secondaryValue="60"></ProgressCircular>
            <ProgressCircular modifier="material" indeterminate></ProgressCircular>
            <ProgressBar indeterminate></ProgressBar>
        </div>
    );
}

export default ProgessExample;