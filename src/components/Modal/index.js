import React, { useState, useContext, memo } from "react";
import { useForm } from "react-hook-form";

//Scripts
import { dataContext } from "../../context/dataContext";
import { colorsData } from "../../services/colors.js";
import { filterArr } from "../../services/utils.js";
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
  const { tagList, setTagList, todoList, setTodoList } =
    useContext(dataContext);
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
        };
        var auxArr = tagList.slice();
        auxArr.push(auxObj);
        setTagList(auxArr);

        setSelectorError(false);

        handleCancel();
        props.hideModal();
      }
    } else if (props.type === "todo") {
      var existingTodo = false;
      for (let i = 0; i < todoList.length; i++) {
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
        var todoObj = {
          title: data.title,
          text: data.description,
          tags: tagArr,
          done: false,
        };
        var todoArr = todoList.slice();
        todoArr.push(todoObj);
        setTodoList(todoArr);

        setSelectorError(false);

        handleCancel();
        props.hideModal();
      }
    }
  }
  // var obj = {
  //   id: 0,
  //   title: "The first task title",
  //   text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ante quam, blandit id mollis nec, scelerisque vel augue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed ac lectus aliquet, lobortis dui condimentum, fringilla turpis",
  //   tags: [
  //     { name: "work", color: "#69665C" },
  //     { name: "study", color: "#B2AFA1" },
  //     { name: "college", color: "#D2CEFF" },
  //   ],
  //   done: false,
  // };
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
          {props.type === "todo" && (
            <div>
              <Title>Description</Title>
              <TextArea
                type="text"
                placeholder="add a description..."
                {...register("description", {
                  required: true,
                  // pattern: /^[A-Za-z0-9\s?]+$/,
                  maxLength: 300,
                })}
              />
              {errors.description?.type === "required" && (
                <Message error="Description is required" />
              )}
              {/* {errors.description?.type === "pattern" && (
                <Message error="Description isn't vallid" />
              )} */}
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
            {selectorError && (
              <Message
                error={
                  props.type === "todo"
                    ? "Tags is required"
                    : "Colors is required"
                }
              />
            )}
            {props.type === "todo" && (
              <SearchTag
                placeholder="Search your tag"
                onChange={(e) => {
                  setSearchTag(e.target.value);
                }}
              />
            )}
          </TitleContent>
          {props.type === "todo" && (
            <TagContent>
              {tagList.length <= 0 && <>You don't have any tags</>}
              {filterArr(searchTag, tagList).map((data, index) => (
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
