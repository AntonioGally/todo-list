import React, { useState, useContext, memo } from "react";
import { useForm } from "react-hook-form";

//Scripts
import { dataContext } from "../../context/dataContext";
import { filterArr, idGenerator } from "../../services/utils.js";
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
} from "./styles";

//Style
import "./styles.css";

const ModalTodo = ({ hideModal, showModal }) => {
  const [tagSelector, setTagSelector] = useState([]);
  const { tagList, todoList, setTodoList } = useContext(dataContext);
  const [selectorError, setSelectorError] = useState(false);
  const [searchTag, setSearchTag] = useState("");
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function handleTagClick(index) {
    var auxArr = tagSelector.slice();
    if (auxArr.indexOf(index) > -1) {
      auxArr.splice(auxArr.indexOf(index), 1);
    } else {
      auxArr.push(index);
    }
    setTagSelector(auxArr);
  }

  function onSubmit(data) {
    var existingTodo = false;
    for (let i = 0; i < todoList?.length; i++) {
      if (
        todoList[i].title.replace(/\s+/g, "").toLowerCase() ===
        data.title.replace(/\s+/g, "").toLowerCase()
      ) {
        toast("This todo already exists");
        existingTodo = true;
      }
    }
    if (tagSelector.length <= 0) {
      setSelectorError(true);
    } else if (!existingTodo) {
      var tagArr = [];
      for (let i = 0; i < tagSelector.length; i++) {
        tagArr.push(tagList[tagSelector[i]]);
      }
      var date = new Date();
      var month = date.getMonth();
      var day = date.getDate();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var finalDate = `
        ${month < 10 ? '0' + month : month}/${day < 10 ? '0' + day : day}/${date.getFullYear()} - 
        ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}
      `
      var todoObj = {
        title: data.title,
        text: data.description || "",
        tags: tagArr,
        done: false,
        id: idGenerator(12),
        date: finalDate
      };
      var todoArr = todoList?.slice() || [];
      todoArr.push(todoObj);
      setTodoList(todoArr);

      setSelectorError(false);

      handleCancel();
      hideModal();
    }
  }

  function handleCancel() {
    setTagSelector([]);
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
              // defaultValue={data?.title}
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
          <div>
            <Title>Description</Title>
            <TextArea
              type="text"
              placeholder="add a description..."
              rows={5}
              {...register("description", {
                // required: true,
                // pattern: /^[A-Za-z0-9\s?]+$/,
                maxLength: 500,
              })}
            />
            {/* {errors.description?.type === "required" && (
              <Message error="Description is required" />
            )} */}
            {/* {errors.description?.type === "pattern" && (
                <Message error="Description isn't vallid" />
              )} */}
            {errors.description?.type === "maxLength" && (
              <Message error="Max length is 300 caracters" />
            )}
          </div>
        </Body>
        <Footer>
          <TitleContent>
            <Title style={{ margin: 0 }}>Tags</Title>
            {selectorError && <Message error={"Tags is required"} />}
            <SearchTag
              placeholder="Search your tag"
              onChange={(e) => {
                setSearchTag(e.target.value);
              }}
            />
          </TitleContent>
          <TagContent>
            {tagList?.length <= 0 && <>You don't have any tags</>}
            {filterArr(searchTag, tagList || [], "text").map((data, index) => (
              <Tag
                key={index}
                colorTag={data.color}
                onClick={() => handleTagClick(index)}
                isSelected={tagSelector.indexOf(index) > -1}
              >
                {data.text}
              </Tag>
            ))}
          </TagContent>
        </Footer>
      </form>
    </Modal>
  );
};

export default memo(ModalTodo);
