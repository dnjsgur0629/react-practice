import React, {useState} from 'react';
import styled from "@emotion/styled/macro";
import Modal from '../../componenents/Modal';

const ModalBody = styled.div`
  width: 100vw;
  max-width: 386px;
  padding: 8px;
`;

const Date = styled.small`
  display: block;
  color: #C9C8CC;
`;

const InputTodo = styled.input`
  padding: 16px 24px;
  border: none;
  width: 100%;
  box-sizing: border-box;
  background-color: transparent;
  color: #C9C8CC;
  caret-color: #C9C8CC;
`;

const Card = styled.div`
  width: 100%;
  max-width: 370px;
  border-radius: 16px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  padding: 24px;
  box-sizing: border-box;
  background-color: #19181A;
  ${Date} + ${InputTodo} {
    margin-top: 24px;
  };
`;

const TodoFormModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  return (
      <Modal isOpen={isOpen} onClose={handleClose}>
        <ModalBody>
          <Card>
            <Date>2021-09-12</Date>
            <InputTodo placeholder="새로운 이벤트"/>
          </Card>
        </ModalBody>
      </Modal>
  );
}

export default TodoFormModal;