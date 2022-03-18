import React, {useState} from 'react';
import {config, useSpring, animated} from "react-spring";

function ReactSpringExample() {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: {opacity: 1, color: 'red', scale: 1},
        from: {opacity: 0.2, color: 'blue', scale: 5},
        reset: true,
        reverse: flip,
        delay: 100,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return <animated.h1 style={props}>hello</animated.h1>;
}

export default ReactSpringExample;