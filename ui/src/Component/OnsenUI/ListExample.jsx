import React from 'react';
import {List, ListItem, ListHeader, Button} from "react-onsenui";

function ListExample() {
    //className에 따라 요소가 어떻게 배치되는 지 주목하자
    return (
        <>
            {/*js 설명서를 보고 작성해본 List*/}
            <List>
                <ListHeader>Thumbnails and titles</ListHeader>
                <ListItem>
                    <div className="left">
                        <img className="list-item__thumbnail" src="https://placekitten.com/g/40/40"/>
                    </div>
                    <div className="center">
                        <span className="list-item__title">Cutest kitty</span><span
                        className="list-item__subtitle">On the Internet</span>
                    </div>
                </ListItem>
            </List>
            {/*react 설명서를 보고 작성해본 List (좀 더 확장성 있어보인다.)*/}
            <List
                dataSource={['Row 1', 'Row 2']}
                renderHeader={() => <ListHeader>List header</ListHeader>}
                renderRow={(row, idx) => (
                    <ListItem>
                        {row}
                        <Button modifier="quiet">Remove</Button>
                    </ListItem>
                )}
                renderFooter={() => <ListHeader>List footer</ListHeader>}
            />
        </>
    );
}

export default ListExample;