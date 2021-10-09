import React, { useContext, useState, useEffect } from "react";
import { Col, Drawer } from "antd";

//Minor Components
import {
  Container,
  MenuIcon,
  SideBarContent,
  CardContent,
  IconContent,
  TrashIcon,
  ArrowDownIcon,
  AddIcon,
  Input,
} from "./styles";

//Context
import { dataContext } from "../../context/dataContext.js";

//Components
import SideBar from "../../components/SideBar";
import CardContainer from "../../components/Card";
import ModalTodo from "../../components/Modal/modalTodo";
import { Dropdown, Menu } from "antd";

import { ToastContainer } from "react-toastify";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    todoFilter,
    setTodoFilter,
    tagList,
    setTagList,
    setTodoList,
    todoList,
  } = useContext(dataContext);
  const [showTagContent, setShowTagContent] = useState(false);
  const screenWidth = window.innerWidth;

  useEffect(() => {
    if (tagList.length === 0 && !localStorage.getItem("tags")) {
      setTagList([
        { color: "#1E90FF", text: "Work", id: "0" },
        { color: "#DC52BF", text: "Study", id: "1" },
        { color: "#FCF33F", text: "School", id: "2" },
      ]);
    }
    // eslint-disable-next-line
  }, []);

  function handleClickAdd() {
    window.gtag("event", "click-event", {
      event_category: "Open",
      action: "Openned todo creation modal",
      label: "Todo Modal",
    });
    setShowModal(true);
  }

  function onDeleteAll() {
    setTodoList(null);
  }
  function onDeleteDone() {
    var cloneArr = todoList.slice();
    for (let i = cloneArr.length - 1; i >= 0; i--) {
      if (cloneArr[i].done) {
        cloneArr.splice(i, 1);
      }
    }
    setTodoList(cloneArr);
  }

  const menuOverlay = () => {
    return (
      <Menu>
        <Menu.Item key={1} onClick={() => onDeleteAll()}>
          Delete all
        </Menu.Item>
        <Menu.Item key={2} onClick={() => onDeleteDone()}>
          Delete done
        </Menu.Item>
      </Menu>
    );
  };

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
            <div>
              <div>
                <Dropdown
                  overlay={menuOverlay}
                  trigger={["click"]}
                  destroyPopupOnHide={true}
                  arrow={true}
                >
                  <div>
                    <TrashIcon />
                    <ArrowDownIcon />
                  </div>
                </Dropdown>
              </div>
              <AddIcon
                onClick={() => {
                  handleClickAdd();
                }}
              />
            </div>
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
