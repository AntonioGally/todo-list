import React, { useState, useContext, memo } from "react";
import { useForm } from "react-hook-form";

//Scripts
import { dataContext } from "../../context/dataContext";
import { colorsData } from "../../services/colors.js";
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
  TextArea,
  Footer,
  TagContent,
  Tag,
  TitleContent,
  SearchTag,
  Color,
} from "./styles";

//Style
import "./styles.css";

const ModalTodo = (props) => {
  const [tagSelector, setTagSelector] = useState([]);
  const [colorSelector, setColorSelector] = useState([]);
  const { tagList, setTagList } = useContext(dataContext);
  const [selectorError, setSelectorError] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function handleTagClick(index) {
    var auxArr = tagSelector.slice();
    auxArr.push(index);
    setTagSelector(auxArr);
  }
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
    if (props.type === "tag") {
      var existingTag = false;
      for (let i = 0; i < tagList.length; i++) {
        if (tagList[i].text.toLowerCase() === data.title.toLowerCase()) {
          toast("This tag already exists");
          existingTag = true;
        }
      }
      if (colorSelector.length === 0) {
        setSelectorError(true);
      } else if (!existingTag) {
        var auxObj = {
          id: tagList.length + 1,
          color: colorsData()[colorSelector],
          text: data.title,
        };
        var auxArr = tagList.slice();
        auxArr.push(auxObj);
        setTagList(auxArr);

        setSelectorError(false);

        handleCancel();
        props.hideModal();
      }
    }
  }

  function handleCancel() {
    setColorSelector([]);
    setTagSelector([]);
    setSelectorError(false);
    reset();
  }

  return (
    <Modal
      destroyOnClose
      visible={props.showModal}
      footer={null}
      closable={false}
      wrapClassName={"modal-todo"}
      onCancel={() => {
        handleCancel();
        props.hideModal();
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Navbar>
          <span onClick={() => props.hideModal()}>Cancel</span>
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
                pattern: /^[A-Za-z0-9]+$/,
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
          {props.type === "todo" && (
            <div>
              <Title>Description</Title>
              <TextArea
                type="text"
                placeholder="add a description..."
                {...register("description", {
                  required: true,
                  pattern: /^[A-Za-z0-9]+$/,
                  maxLength: 300,
                })}
              />
              {errors.description?.type === "required" && (
                <Message error="Description is required" />
              )}
              {errors.description?.type === "pattern" && (
                <Message error="Description isn't vallid" />
              )}
              {errors.description?.type === "maxLength" && (
                <Message error="Max length is 300 caracters" />
              )}
            </div>
          )}
        </Body>
        <Footer>
          <TitleContent>
            <Title style={{ margin: 0 }}>
              {props.type === "todo" ? "Tags" : "Colors"}
            </Title>
            {selectorError && <Message error="Color is required" />}
            {props.type === "todo" && (
              <SearchTag placeholder="Search your tag" />
            )}
          </TitleContent>
          {props.type === "todo" && (
            <TagContent>
              {tagList.length <= 0 && <>You don't have any tags</>}
              {tagList.map((data, index) => (
                <Tag
                  key={index}
                  colorTag={data.color}
                  onClick={() => handleTagClick(index)}
                >
                  {data.text}
                </Tag>
              ))}
            </TagContent>
          )}
          {props.type === "tag" && (
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
          )}
        </Footer>
      </form>
    </Modal>
  );
};

export default memo(ModalTodo);
