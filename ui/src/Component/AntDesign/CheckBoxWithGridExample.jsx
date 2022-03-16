import React from 'react';
import {Checkbox, Col, Row} from "antd";

function CheckBoxWithGridExample() {

  function onChange(checkedValues) {
    console.log('checked = ', checkedValues);
  }

  return (
      <Checkbox.Group style={{ width: '100%' }} onChange={onChange}>
        <Row>
          <Col span={24}>
            <Checkbox value="A">A</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="B">B</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="C">C</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="D">D</Checkbox>
          </Col>
          <Col span={6}>
            <Checkbox value="E">E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
  );
}

export default CheckBoxWithGridExample;