import React from 'react';
import {Fab, Icon} from 'react-onsenui'

function FabExample() {
    return (
        <>
            <Fab position="bottom right">
                <Icon icon="md-plus"></Icon>
            </Fab>
            <Fab position="top right">
                <Icon icon="fa-dove" rotate="90"></Icon>
            </Fab>
        </>
    );
}

export default FabExample;