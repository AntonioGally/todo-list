import React from "react";
import { Col } from "antd";

//Minor Components
import { Container, SideBarContent, CardContent } from "./styles";

//API
import { tag_list, card_list } from "../../api.js";

//Components
import SideBar from "../../components/SideBar";
import Card from "../../components/Card";

const Main = () => {
  return (
    <>
      <Container>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <SideBarContent>
            <SideBar list={tag_list} />
          </SideBarContent>
        </Col>
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <CardContent>
            {card_list.map((data, index) => (
              <Card dataProps={data} key={index}/>
            ))}
          </CardContent>
        </Col>
      </Container>
    </>
  );
};

export default Main;
