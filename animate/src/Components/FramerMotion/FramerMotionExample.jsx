import React from 'react';
import ScaleExample from "./ScaleExample";
import KeyFrameExample from "./KeyFrameExample";

function FramerMotionExample() {
  return (
      <div>
        <div style={{position:"absolute", top:300, left: 300}}>
          <ScaleExample />
        </div>
        <div style={{position:"absolute", top:300, left: 500}}>
          <KeyFrameExample/>
        </div>
      </div>
  );
}

export default FramerMotionExample;