import React from "react";
import { list } from "./data";
import { Checkbox } from "antd";

//Minor components
import { Container, Scrolable, Head, Body, Tag, Foot } from "./styles";

const SideBar = () => {
  return (
    <>
      <Container>
        <Scrolable>
          <Head>
            <h3>todo</h3>
          </Head>
          <Body>
            {list.map((data, index) => (
              <Tag color={data.color} key={index}>
                {data.text}
              </Tag>
            ))}
          </Body>
        </Scrolable>
        <Foot>
          <Checkbox>Hide Done Tasks</Checkbox>
        </Foot>
      </Container>
    </>
  );
};

export default SideBar;
