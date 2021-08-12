import React from "react";
import { useForm } from "react-hook-form";

//Scripts
import { colorsData } from "../../services/colors.js";
import { shuffle } from "../../services/utils.js";
//Components
import { Modal } from "antd";
import Message from "./message";

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
  const handleTagClick = (index) => {};

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <Modal
      destroyOnClose
      visible={props.showModal}
      footer={null}
      closable={false}
      wrapClassName={"modal-todo"}
      onCancel={() => props.hideModal()}
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
            {props.type === "todo" && (
              <SearchTag placeholder="Search your tag" />
            )}
          </TitleContent>
          {props.type === "todo" && (
            <TagContent>
              {props.tagList.length <= 0 && <>You don't have any tags</>}
              {props.tagList?.map((data, index) => (
                <Tag
                  key={index}
                  colorTa={data.color}
                  onClick={handleTagClick(index)}
                >
                  {data.text}
                </Tag>
              ))}
            </TagContent>
          )}
          {props.type === "tag" && (
            <TagContent>
              {shuffle(colorsData()).map((data, index) => (
                <Color color={data} key={index} />
              ))}
              {/* <span onClick={() => console.log(list)}>Oi</span> */}
            </TagContent>
          )}
        </Footer>
      </form>
    </Modal>
  );
};

export default ModalTodo;
