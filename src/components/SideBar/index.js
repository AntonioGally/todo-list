import React, { useState, useContext } from "react";

//Scripts
import { dataContext } from "../../context/dataContext";

//Components
import ModalTag from "../Modal";
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

const SideBar = (props) => {
  const { tagList, setTagList } = useContext(dataContext);
  const [showModal, setShowModal] = useState(false);

  function handleDelete(index) {
    var newArr = tagList.slice();
    newArr.splice(index, 1);
    setTagList(newArr);
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
      <ModalTag
        hideModal={() => setShowModal(false)}
        showModal={showModal}
        type="tag"
      />
    </>
  );
};

export default SideBar;
