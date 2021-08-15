import React, { useContext, memo } from "react";

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

//Context
import { dataContext } from "../../context/dataContext.js";

//Components
import { Checkbox, Col, Dropdown, Menu } from "antd";

const Card = ({ dataProps, index }) => {
  const { todoList, setTodoList } = useContext(dataContext);
  function deleteCard(indexProps) {
    var newArr = todoList.slice();
    newArr.splice(indexProps, 1);
    setTodoList(newArr);
  }
  function handleDoneClick() {
    var newArr = todoList.slice();
    newArr[index].done = !newArr[index].done;
    setTodoList(newArr);
  }
  const menuOverlay = () => {
    return (
      <Menu>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item onClick={() => deleteCard(index)}>Delete</Menu.Item>
      </Menu>
    );
  };
  return (
    <>
      <Col sm={24} md={12} lg={12}>
        <Container>
          <Head>
            <Title isDone={dataProps.done}>{dataProps.title}</Title>,
            <Dropdown overlay={menuOverlay} trigger={["click"]}>
              <MenuIcon />
            </Dropdown>
          </Head>
          <Body>
            <Text isDone={dataProps.done}>{dataProps.text}</Text>
          </Body>
          <Foot>
            <TagContent>
              {dataProps.tags.map((data, index) => (
                <Tag key={index} color={data.color} />
              ))}
            </TagContent>
            <Checkbox
              checked={dataProps.done}
              onChange={(e) => handleDoneClick()}
            >
              Done
            </Checkbox>
          </Foot>
        </Container>
      </Col>
    </>
  );
};

export default memo(Card);
