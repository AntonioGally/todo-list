import React from "react";
import { tag_list } from "../../api";
import { Checkbox } from "antd";

//Minor components
import { Container, Scrolable, Head, Body, Tag, Foot } from "./styles";

const SideBar = () => {
  return (
    <>
      <Container>
        <div>
          <Head>
            <h3>todo</h3>
          </Head>
          <Body>
            {tag_list.map((data, index) => (
              <Tag color={data.color} key={index}>
                {data.text}
              </Tag>
            ))}
          </Body>
        </div>
        <Foot>
          <Checkbox>Hide Done Tasks</Checkbox>
        </Foot>
      </Container>
    </>
  );
};

export default SideBar;
