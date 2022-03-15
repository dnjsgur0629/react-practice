import React from 'react';
import {Progress} from "antd";

function ProgressExample() {
  return (
      <>
        <Progress strokeLinecap="square" percent={75}/>
        <Progress strokeLinecap="square" type="circle" percent={75} trailColor="red"/>
        <Progress strokeLinecap="square" type="dashboard" percent={75}/>
        <Progress strokeLinecap="square" type="dashboard" percent={100}/>
      </>
  );
}

export default ProgressExample;