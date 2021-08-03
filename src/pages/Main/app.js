import React, { useContext } from "react";
import { Col } from "antd";

//Minor Components
import { Container, SideBarContent, CardContent } from "./styles";

//Context
import { dataContext } from "../../context/dataContext.js";

//Components
import SideBar from "../../components/SideBar";
import Card from "../../components/Card";
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
              {todoList?.length > 0 ? (
                <>
                  {todoList.map((data, index) => (
                    <Card dataProps={data} key={index} index={index} />
                  ))}
                </>
              ) : (
                <h1>It sims that you dont have any todo</h1>
              )}
            </CardContent>
          </Col>
        </Container>
      </DataContextProvider>
    </>
  );
};

export default App;
