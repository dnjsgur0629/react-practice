import React from 'react';
import {Space, Typography} from "antd";
import Text from "antd/es/typography/Text";
import Link from "antd/es/typography/Link"
import Title from "antd/es/typography/Title";

function TypograhtExample() {
    //const {Text, Link} = Typography;    //위에 import대신 이렇게 쓸 수도 있음

    return (
        <Space direction="vertical">
            <Title level={1}>Title level 1</Title>
            <Text>Ant Design (default)</Text>
            <Text type="secondary">Ant Design (secondary)</Text>
            <Text type="success">Ant Design (success)</Text>
            <Text type="warning">Ant Design (warning)</Text>
            <Text type="danger">Ant Design (danger)</Text>
            <Text disabled>Ant Design (disabled)</Text>
            <Text mark>Ant Design (mark)</Text>
            <Text code>Ant Design (code)</Text>
            <Text keyboard>Ant Design (keyboard)</Text>
            <Text underline>Ant Design (underline)</Text>
            <Text delete>Ant Design (delete)</Text>
            <Text strong>Ant Design (strong)</Text>
            <Text italic>Ant Design (italic)</Text>
            <Text editable>Ant Design (editable)</Text>
            <Text copyable>Ant Design (copyable)</Text>
            <Link href="https://ant.design" target="_blank">
                Ant Design (Link)
            </Link>
        </Space>
    );
}

export default TypograhtExample;