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
import { Checkbox, Col } from "antd";
const Card = ({ dataProps, index }) => {
  const { todoList, setTodoList } = useContext(dataContext);
  const handleDataChange = () => {
    var auxArr = todoList.slice();
    auxArr[index].done = !auxArr[index].done;
    setTodoList(auxArr);
  };
  return (
    <>
      <Col sm={24} md={12} lg={12}>
        <Container>
          <Head>
            <Title>{dataProps.title}</Title>
            <MenuIcon />
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
              onChange={(e) => handleDataChange()}
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
