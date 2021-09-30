import React, { useContext, useState } from "react";
import { Col, Drawer } from "antd";

//Minor Components
import {
  Container,
  MenuIcon,
  SideBarContent,
  CardContent,
  IconContent,
  AddIcon,
  Input,
} from "./styles";

//Context
import { dataContext } from "../../context/dataContext.js";

//Components
import SideBar from "../../components/SideBar";
import CardContainer from "../../components/Card";
import ModalTodo from "../../components/Modal/modalTodo";

import { ToastContainer } from "react-toastify";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const { todoFilter, setTodoFilter } = useContext(dataContext);
  const [showTagContent, setShowTagContent] = useState(false);
  const screenWidth = window.innerWidth

  return (
    <>
      <ToastContainer />
      <Container>
        {screenWidth < 768 ? (
          <div>
            <MenuIcon onClick={() => setShowTagContent(true)} />
            <Drawer
              contentWrapperStyle={{ minWidth: 300 }}
              title=""
              placement="left"
              closable={true}
              onClose={() => setShowTagContent(false)}
              visible={showTagContent}
              getContainer={false}
              size="large"
              style={{ position: "absolute" }}
            >
              <SideBarContent>
                <SideBar />
              </SideBarContent>
            </Drawer>
          </div>
        ) : (
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <SideBarContent>
              <SideBar />
            </SideBarContent>
          </Col>
        )}
        <Col xs={24} sm={24} md={24} lg={18} xl={18}>
          <IconContent>
            <Input
              type="text"
              value={todoFilter.title}
              placeholder="Search for todo's..."
              onChange={(e) => {
                setTodoFilter((prevState) => {
                  return { ...prevState, title: e.target.value };
                });
              }}
            />
            <AddIcon onClick={() => setShowModal(true)} />
          </IconContent>
          <CardContent>
            <CardContainer />
          </CardContent>
        </Col>
      </Container>
      <ModalTodo hideModal={() => setShowModal(false)} showModal={showModal} />
    </>
  );
};

export default App;
