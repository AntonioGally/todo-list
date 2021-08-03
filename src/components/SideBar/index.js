import React, { memo } from "react";
import { Checkbox } from "antd";

//Minor components
import { Container, Head, Body, Tag, Foot } from "./styles";

const SideBar = (props) => {
  return (
    <>
      <Container>
        <div>
          <Head>
            <h3>todo</h3>
          </Head>
          <Body>
            {props.list?.length > 0 ? (
              <>
                {props.list.map((data, index) => (
                  <Tag color={data.color} key={index}>
                    {data.text}
                  </Tag>
                ))}
              </>
            ) : (
              <h3>You dont have any tags yet</h3>
            )}
          </Body>
        </div>
        <Foot>
          <Checkbox>Hide Done Tasks</Checkbox>
        </Foot>
      </Container>
    </>
  );
};

export default memo(SideBar);
