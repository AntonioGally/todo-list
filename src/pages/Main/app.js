import React, { useContext, useState } from "react";
import { Col } from "antd";

//Minor Components
import {
  Container,
  SideBarContent,
  CardContent,
  IconContent,
  AddIcon,
} from "./styles";

//Context
import { dataContext } from "../../context/dataContext.js";

//Components
import SideBar from "../../components/SideBar";
import CardContainer from "../../components/Card";
import DataContextProvider from "../../context/dataContext.js";
import ModalTodo from "../../components/Modal/modalTodo";

import { ToastContainer } from "react-toastify";

const App = () => {
  const { todoList, tagList } = useContext(dataContext);
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <DataContextProvider>
        <ToastContainer />
        <Container>
          <Col xs={24} sm={24} md={24} lg={6} xl={6}>
            <SideBarContent>
              <SideBar list={tagList} />
            </SideBarContent>
          </Col>
          <Col xs={24} sm={24} md={24} lg={18} xl={18}>
            <IconContent>
              <AddIcon onClick={() => setShowModal(true)} />
            </IconContent>
            <CardContent>
              <CardContainer list={todoList} />
            </CardContent>
          </Col>
        </Container>
        <ModalTodo
          hideModal={() => setShowModal(false)}
          showModal={showModal}
        />
      </DataContextProvider>
    </>
  );
};

export default App;
