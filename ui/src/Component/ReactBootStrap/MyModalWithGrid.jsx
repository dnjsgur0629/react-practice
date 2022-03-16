import React, {useState} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";

function MyModalWithGrid(props) {
    const [modalShow, setModalShow] = useState(false);  //모달창을 보여줄지 말지 상태

    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch modal with grid
            </Button>
            <Modal onHide={() => {      {/*onHide: Modal header의 X버튼이나 뒷 배결을 눌렀을 때 할 동작*/}
                setModalShow(false)
            }} show={modalShow}
                   aria-labelledby="contained-modal-title-vcenter"> {/*show를 modalShow로 해서 원할 때 모달창을 끄고 킬 수 있게*/}
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Using Grid in Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className="show-grid">
                    <Container>
                        <Row>
                            <Col className="col-color" xs={12} md={8}>
                                .col-xs-12 .col-md-8
                            </Col>
                            <Col className="col-color" xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col className="col-color" xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                            <Col className="col-color" xs={6} md={4}>
                                .col-xs-6 .col-md-4
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => {
                        setModalShow(false)     //Footer의 Close버튼 누르면 Modal 끄기
                    }}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default MyModalWithGrid;