import React, { useContext } from "react";
import { Col } from "antd";

//Minor Components
import { Container, SideBarContent, CardContent } from "./styles";

//Context
import { dataContext } from "../../context/dataContext.js";

//Components
import SideBar from "../../components/SideBar";
import CardContainer from "../../components/Card";
import DataContextProvider from "../../context/dataContext.js";

const App = () => {
  const { todoList, tagList } = useContext(dataContext);
  return (
    <>
      <DataContextProvider>
        <Container>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <SideBarContent>
              <SideBar list={tagList} />
            </SideBarContent>
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <CardContent>
              <CardContainer list={todoList} />
            </CardContent>
          </Col>
        </Container>
      </DataContextProvider>
    </>
  );
};

export default App;
