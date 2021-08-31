import React, { useContext } from "react";

//Scripts
import { filterArr } from "../../services/utils.js";

//Context
import { dataContext } from "../../context/dataContext.js";

import Card from "./card.js";
const CardContainer = () => {
  const { todoList, todoFilter, tagFilter } = useContext(dataContext);

  function filterTodosByTag() {
    return todoList.filter((el) => {
      if (el.title.toLowerCase().indexOf(todoFilter.title.toLowerCase()) > -1) {
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

  return (
    <>
      {todoList?.length > 0 ? (
        <>
          {tagFilter.length > 0 ? (
            <>
              {filterTodosByTag().map((data, index) => (
                <Card dataProps={data} key={index} index={index} />
              ))}
            </>
          ) : (
            <>
              {filterArr(todoFilter.title, todoList, "title").map(
                (data, index) => (
                  <Card dataProps={data} key={index} index={index} />
                )
              )}
            </>
          )}
        </>
      ) : (
        <h1 style={{ margin: 0 }}>It sims that you dont have any todo</h1>
      )}
    </>
  );
};

export default CardContainer;
