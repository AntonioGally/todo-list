import React, { useContext } from "react";
import { Col } from "antd";

//Images
import noData from "../../assets/no-data-2.png";

//Context
import { dataContext } from "../../context/dataContext.js";

import Card from "./card.js";
const CardContainer = () => {
  const { todoList, setTodoList, todoFilter, tagFilter } =
    useContext(dataContext);

  function filterTodo() {
    if (tagFilter.length > 0) {
      if (tagFilter[0]?.type === "done") {
        return todoList.filter((el) => {
          if (
            el.title.toLowerCase().indexOf(todoFilter.title.toLowerCase()) > -1
          ) {
            if (el.done) {
              return false;
            } else return true;
          } else return false;
        });
      } else {
        return todoList.filter((el) => {
          if (
            el.title.toLowerCase().indexOf(todoFilter.title.toLowerCase()) > -1
          ) {
            for (let i = 0; i < el.tags.length; i++) {
              for (let j = 0; j < tagFilter.length; j++) {
                if (el.tags[i].id === tagFilter[j].id) {
                  return true;
                }
              }
            }
          }
          return false;
        });
      }
    } else {
      return todoList.filter(function (el) {
        return (
          el.title.toLowerCase().indexOf(todoFilter.title.toLowerCase()) > -1
        );
      });
    }
  }

  function deleteHandler(id) {
    var newArr = todoList.slice();
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id === id) {
        newArr.splice(i, 1);
      }
    }
    if (newArr.length === 0) {
      return setTodoList(null);
    } else {
      return setTodoList(newArr);
    }
  }

  function doneHandler(id) {
    var newArr = todoList.slice();
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i].id === id) {
        newArr[i].done = !newArr[i].done;
      }
    }
    return setTodoList(newArr);
  }

  return (
    <>
      {todoList?.length > 0 ? (
        <>
          <Col sm={24} md={12} lg={12}>
            {filterTodo().map((data, index) => {
              if (index % 2 === 0) {
                return (
                  <Card
                    dataProps={data}
                    key={index}
                    onDelete={() => deleteHandler(data.id)}
                    onDone={() => doneHandler(data.id)}
                  />
                );
              } else return null;
            })}
          </Col>
          <Col sm={24} md={12} lg={12}>
            {filterTodo().map((data, index) => {
              if (index % 2 !== 0) {
                return (
                  <Card
                    dataProps={data}
                    key={index}
                    onDelete={() => deleteHandler(data.id)}
                    onDone={() => doneHandler(data.id)}
                  />
                );
              } else return null;
            })}
          </Col>
        </>
      ) : (
        <div style={{ textAlign: "center", width: "100%" }}>
          <img
            src={noData}
            style={{ width: "50%", margin: "10px auto" }}
            alt="No data"
          />
          <br />
          <h2 style={{ margin: 0 }}>It sims that you dont have any todo</h2>
        </div>
      )}
    </>
  );
};

export default CardContainer;
