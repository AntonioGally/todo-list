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
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <SideBarContent>
            <SideBar />
          </SideBarContent>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <CardContent>
            <Card />
          </CardContent>
        </Col>
      </Container>
    </>
  );
};

export default Main;
