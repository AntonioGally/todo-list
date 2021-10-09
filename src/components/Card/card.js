import React, { useState, memo, useEffect } from "react";

import parse from "html-react-parser";

import "./parsedTags.css";

//Minor Components
import {
  Container,
  Head,
  Title,
  MenuIcon,
  Body,
  Text,
  Foot,
  TagContent,
  Tag,
} from "./styles";

//Components
import { Checkbox, Row, Dropdown, Menu } from "antd";
import ModalEdit from "../Modal/modalEdit";

const Card = ({ dataProps, onDelete, onDone }) => {
  const [showModal, setShowModal] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function deleteCard() {
    setOpacity(0);
    setTimeout(() => {
      onDelete();
      setOpacity(1);
    }, 250);
  }

  const menuOverlay = () => {
    return (
      <Menu>
        <Menu.Item onClick={() => setShowModal(true)} key={1}>
          Edit
        </Menu.Item>
        <Menu.Item onClick={() => deleteCard()} key={2}>
          Delete
        </Menu.Item>
      </Menu>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 150);
  }, []);

  return (
    <>
      <Row style={{ width: "100%" }}>
        <Container
          style={{ opacity: opacity }}
          isDone={dataProps.done}
          onDoubleClick={() => onDone()}
        >
          <Head>
            <Title isDone={dataProps.done}>
              {dataProps.title}
              <span>{dataProps.date}</span>
            </Title>
            <Dropdown overlay={menuOverlay} trigger={["click"]}>
              <MenuIcon />
            </Dropdown>
          </Head>
          <Body>
            <Text isDone={dataProps.done}>{parse(dataProps.text)}</Text>
          </Body>
          <Foot>
            <TagContent>
              {dataProps.tags.map((data, index) => (
                <Tag key={index} color={data.color} />
              ))}
            </TagContent>
            <Checkbox checked={dataProps.done} onChange={() => onDone()}>
              Done
            </Checkbox>
          </Foot>
        </Container>
      </Row>
      <ModalEdit
        hideModal={() => setShowModal(false)}
        showModal={showModal}
        defaultData={{
          content: dataProps,
          tagList: dataProps.tags,
        }}
      />
    </>
  );
};

export default memo(Card);
