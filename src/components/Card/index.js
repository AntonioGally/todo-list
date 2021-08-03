import React from "react";

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

//Utils
import { getTodos, setTodos, cleanStorage } from "../../services/utils.js";

//Components
import { Checkbox, Col } from "antd";
const Card = ({ dataProps, index }) => {
  const handleDataChange = () => {
    var auxTodos = getTodos();
    auxTodos[index].done = !auxTodos[index].done;
    cleanStorage();
    setTimeout(() => {
      setTodos(auxTodos);
    }, 200);
    console.log(auxTodos);
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

export default Card;
