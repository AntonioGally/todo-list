import React, { useEffect, useState, memo, useContext, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
//Scripts
import { dataContext } from "../../context/dataContext";

//Minor components
import { TagContent, Tag, DeleteIcon } from "./styles";

const TagComponent = ({ data, index, type, style, todoAmount, moveTag, id }) => {
  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: "tag",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      // Determine mouse position
      const clientOffset = monitor.getClientOffset();
      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      // Time to actually perform the action
      moveTag(dragIndex, hoverIndex);
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex;
    },
  });
  //eslint-disable-next-line
  const [{ isDragging }, drag] = useDrag({
    type: "tag",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drag(drop(ref));

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
    doneFilter,
    setDoneFilter,
  } = useContext(dataContext);

  useEffect(() => {
    setTimeout(() => {
      setOpacity(1);
    }, 150);
  }, []);

  function handleSelect(indexProps) {
    var auxTagArr = tagFilter.slice();
    if (type === "CheckDone" && doneFilter) {
      //Remove done selection
      setBackground("#f9f9f9");
      setPadding(0);
      setDoneFilter(false);
    }
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
      if (tagFilter.length < 2) {
        setSelectedIndex(indexProps);
        setBackground("var(--cardBackground)");
        setPadding(10);
        if (type === "CheckDone") {
          return setDoneFilter(true);
        }
        auxTagArr.push(tagList[indexProps]);
        setTagFilter(auxTagArr);
      }
    }
  }

  function handleDelete(index) {
    setOpacity(0);
    setTimeout(() => {
      var deletedTagID = tagList[index].id;
      var newArr = tagList.slice();
      newArr.splice(index, 1);
      if (newArr.length === 0) {
        setTagList(null);
      } else {
        setTagList(newArr);
      }
      for (let i = 0; i < todoList?.length; i++) {
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
        ref={ref}
        data-handler-id={handlerId}
        style={{
          ...style,
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
        {type !== "CheckDone" && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>({todoAmount[data.text]?.length})</div>
            <DeleteIcon
              onClick={(e) => {
                handleDelete(index);
                e.stopPropagation();
              }}
            />
          </div>
        )}
      </TagContent>
    </>
  );
};

export default memo(TagComponent);
