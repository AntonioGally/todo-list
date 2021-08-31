import React, { useEffect, useState, memo, useContext } from "react";

//Scripts
import { dataContext } from "../../context/dataContext";

//Minor components
import { TagContent, Tag, DeleteIcon } from "./styles";

const TagComponent = ({ data, index }) => {
  const [opacity, setOpacity] = useState(0);
  const [background, setBackground] = useState("");
  const [padding, setPadding] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(undefined);

  const {
    tagList,
    setTagList,
    todoList,
    setTodoList,
    tagFilter,
    setTagFilter,
  } = useContext(dataContext);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 150);
  }, []);

  function handleSelect(indexProps) {
    var auxTagArr = tagFilter.slice();
    if (indexProps === selectedIndex) {
      setSelectedIndex(undefined);
      setBackground("#f9f9f9");
      setPadding(0);
      for (let i = 0; i < tagFilter.length; i++) {
        if (tagFilter[i].id === tagList[indexProps].id) {
          auxTagArr.splice(i, 1);
          setTagFilter(auxTagArr);
          return true;
        }
      }
    } else {
      setSelectedIndex(indexProps);
      setBackground("var(--cardBackground)");
      setPadding(10);
      auxTagArr.push(tagList[indexProps]);
      setTagFilter(auxTagArr);
    }
  }

  function handleDelete(index) {
    setOpacity(0);
    setTimeout(() => {
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
      setOpacity(1);
    }, 250);
  }

  return (
    <>
      <TagContent
        style={{
          opacity: opacity,
          background: background,
          padding: padding,
          borderRadius: "4px",
          transition: "all .25s ease",
        }}
        onClick={() => {
          handleSelect(index);
        }}
      >
        <Tag color={data.color}>{data.text}</Tag>
        <DeleteIcon
          onClick={(e) => {
            handleDelete(index);
            e.stopPropagation();
          }}
        />
      </TagContent>
    </>
  );
};

export default memo(TagComponent);
