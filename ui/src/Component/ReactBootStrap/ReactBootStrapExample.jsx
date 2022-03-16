import React from 'react';
import BootStrapButtonExample from "./BootStrapButtonExample";
import AlertDismissible from "./AlertDismissible";
import LayoutGridExample from "./LayoutGridExample";
import CarouselExample from "./CarouselExample";
import MyModalWithGrid from "./MyModalWithGrid";

function ReactBootStrapExample() {
    return (
        <div>
            <MyModalWithGrid/>
            <AlertDismissible/>
            <LayoutGridExample/>
            <BootStrapButtonExample/>
            <CarouselExample/>
        </div>
    );
}

export default ReactBootStrapExample;