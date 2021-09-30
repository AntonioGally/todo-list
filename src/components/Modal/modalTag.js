import React, { useState, useContext, memo } from "react";
import { useForm } from "react-hook-form";

//Scripts
import { dataContext } from "../../context/dataContext";
import { colorsData } from "../../services/colors.js";
import { idGenerator } from "../../services/utils.js";
//Components
import { Modal } from "antd";
import Message from "./message";
import { toast } from "react-toastify";
//Minor Components
import {
  Navbar,
  Body,
  Title,
  Input,
  Footer,
  TagContent,
  TitleContent,
  Color,
} from "./styles";

//Style
import "./styles.css";

const ModalTag = ({ hideModal, showModal }) => {
  const [colorSelector, setColorSelector] = useState([]);
  const { tagList, setTagList } = useContext(dataContext);
  const [selectorError, setSelectorError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function handleColorClick(index) {
    var auxArr = colorSelector.slice();
    if (auxArr.indexOf(index) > -1) {
      auxArr.pop();
    } else {
      if (auxArr.length <= 0) {
        auxArr.push(index);
      } else {
        auxArr.pop();
        auxArr.push(index);
      }
    }
    setColorSelector(auxArr);
  }

  function onSubmit(data) {
    var existingTag = false;
    for (let i = 0; i < tagList?.length; i++) {
      if (
        tagList[i].text.replace(/\s+/g, "").toLowerCase() ===
        data.title.replace(/\s+/g, "").toLowerCase()
      ) {
        toast("This tag already exists");
        existingTag = true;
      }
    }
    if (colorSelector.length === 0) {
      setSelectorError(true);
    } else if (!existingTag) {
      var auxObj = {
        color: colorsData()[colorSelector],
        text: data.title,
        id: idGenerator(5),
      };
      var auxArr = tagList?.slice() || [];
      auxArr.push(auxObj);
      setTagList(auxArr);

      setSelectorError(false);

      handleCancel();
      hideModal();
    }
  }

  function handleCancel() {
    setColorSelector([]);
    setSelectorError(false);
    reset();
  }

  return (
    <Modal
      destroyOnClose={true}
      visible={showModal}
      footer={null}
      closable={false}
      wrapClassName={"modal-todo"}
      onCancel={() => {
        handleCancel();
        hideModal();
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Navbar>
          <span onClick={() => hideModal()}>Cancel</span>
          <button type="submit">
            <span>Add</span>
          </button>
        </Navbar>
        <Body>
          <div>
            <Title>Title</Title>
            <Input
              type="text"
              placeholder="add a title..."
              {...register("title", {
                required: true,
                pattern: /^[A-Za-z0-9\s?]+$/,
                maxLength: 70,
              })}
            />
            {errors.title?.type === "required" && (
              <Message error="Title is required" />
            )}
            {errors.title?.type === "pattern" && (
              <Message error="Title isn't vallid" />
            )}
            {errors.title?.type === "maxLength" && (
              <Message error="Max length is 50 caracters" />
            )}
          </div>
        </Body>
        <Footer>
          <TitleContent>
            <Title style={{ margin: 0 }}>Colors</Title>
            {selectorError && <Message error={"Colors is required"} />}
          </TitleContent>
          <TagContent>
            {colorsData().map((data, index) => (
              <Color
                color={data}
                key={index}
                onClick={() => handleColorClick(index)}
                isSelected={colorSelector.indexOf(index) > -1}
              />
            ))}
          </TagContent>
        </Footer>
      </form>
    </Modal>
  );
};

export default memo(ModalTag);
