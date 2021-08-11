import React from "react";

//Components
import { Modal } from "antd";

//Style
import "./styles.css";

const ModalTodo = (props) => {
  return (
    <Modal
      destroyOnClose
      visible={props.showModal}
      footer={null}
      closable={false}
      wrapClassName={"modal-todo"}
      onCancel={() => props.hideModal()}
    >
      <Navbar>
        <span>Cancel</span>
        <span>Add</span>
      </Navbar>
      <Body>
        <div>
          <Title>Title</Title>
          <Input />
        </div>
        <div>
          <Title>Description</Title>
          <Input />
        </div>
      </Body>
      <Footer>
        <Title>Tags</Title>
        <TagContent></TagContent>
      </Footer>
    </Modal>
  );
};

export default ModalTodo;
