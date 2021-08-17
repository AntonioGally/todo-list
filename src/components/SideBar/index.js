import React, { useState, useContext } from "react";

//Scripts
import { dataContext } from "../../context/dataContext";

//Components
import ModalTag from "../Modal/modalTag";
// import { Checkbox } from "antd";

//Minor components
import {
  Container,
  Head,
  Body,
  TagContent,
  Tag,
  DeleteIcon,
  Foot,
  AddIcon,
} from "./styles";

const SideBar = () => {
  const { tagList, setTagList, todoList, setTodoList } =
    useContext(dataContext);
  const [showModal, setShowModal] = useState(false);

  function handleDelete(index) {
    var deletedTagID = tagList[index].id;
    var newArr = tagList.slice();
    newArr.splice(index, 1);
    setTagList(newArr);
    for (let i = 0; i < todoList.length; i++) {
      //Removing the deleted tag from all todo's
      for (let j = 0; j < todoList[i].tags.length; j++) {
        if (todoList[i].tags[j].id === deletedTagID) {
          var newTodo = todoList.slice();
          newTodo[i].tags.splice(j, 1);
          setTodoList(newTodo);
        }
      }
    }
  }

  return (
    <>
      <Container>
        <div>
          <Head>
            <h3>todo</h3>
          </Head>
          <Body>
            {tagList?.length > 0 ? (
              <>
                {tagList.map((data, index) => (
                  <TagContent>
                    <Tag color={data.color} key={index}>
                      {data.text}
                    </Tag>
                    <DeleteIcon
                      onClick={() => {
                        handleDelete(index);
                      }}
                    />
                  </TagContent>
                ))}
              </>
            ) : (
              <h3>You dont have any tags yet</h3>
            )}
          </Body>
        </div>
        <Foot>
          <AddIcon onClick={() => setShowModal(true)} />
          <span onClick={() => setShowModal(true)}>Add a new tag</span>
          {/* <Checkbox>Hide Done Tasks</Checkbox> */}
        </Foot>
      </Container>
      <ModalTag hideModal={() => setShowModal(false)} showModal={showModal} />
    </>
  );
};

export default SideBar;
