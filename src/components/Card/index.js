import React, { useContext } from "react";
import { Col } from "antd";

//Images
import noData from "../../assets/no-data-2.png";

//Scripts
import { arrayIntersection } from "../../services/utils.js";

//Context
import { dataContext } from "../../context/dataContext.js";

import Card from "./card.js";
const CardContainer = () => {
  const {
    todoList,
    setTodoList,
    todoFilter,
    tagFilter,
    relationTagTodo,
    doneFilter,
  } = useContext(dataContext);

  function filterTodo() {
    function firstFilterLayer() {
      //Filter by tag or title
      if (tagFilter.length > 0) {
        if (tagFilter[0].type === "done") {
          return [];
        }
        if (tagFilter.length === 1 || tagFilter.length === 0) {
          return relationTagTodo[tagFilter[0].text];
        } else {
          var masterArr = [];
          tagFilter.forEach((value) => {
            masterArr.push(relationTagTodo[value.text]);
          });
          return arrayIntersection(masterArr[0], masterArr[1], "id");
        }
      } else {
        return todoList.filter(function (el) {
          return (
            el.title.toLowerCase().indexOf(todoFilter.title.toLowerCase()) > -1
          );
        });
      }
    }
    //Filter by done
    if (doneFilter) {
      return firstFilterLayer().filter((el) => {
        return el.done;
      });
    } else {
      return firstFilterLayer();
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
