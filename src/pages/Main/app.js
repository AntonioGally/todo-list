import React, { useContext, useState } from "react";
import { Col } from "antd";

//Minor Components
import {
  Container,
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
// import DataContextProvider from "../../context/dataContext.js";
import ModalTodo from "../../components/Modal/modalTodo";

import { ToastContainer } from "react-toastify";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const { todoFilter, setTodoFilter } = useContext(dataContext);
  return (
    <>
      <ToastContainer />
      <Container>
        <Col xs={24} sm={24} md={24} lg={6} xl={6}>
          <SideBarContent>
            <SideBar />
          </SideBarContent>
        </Col>
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
