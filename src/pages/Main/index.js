import React from "react";
import { Col } from "antd";

//Minor Components
import { Container, SideBarContent, CardContent } from "./styles";

//Components
import SideBar from "../../components/SideBar";
import Card from "../../components/Card";

const Main = () => {
  return (
    <>
      <Container>
        <Col span={6}>
          <SideBarContent>
            <SideBar />
          </SideBarContent>
        </Col>
        <Col span={18}>
          <CardContent>
            <Card />
          </CardContent>
        </Col>
      </Container>
    </>
  );
};

export default Main;
