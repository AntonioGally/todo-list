import React, { useContext } from "react";

//Images
import noData from "../../assets/no-data.jpg";

//Scripts
import { filterArr } from "../../services/utils.js";

//Context
import { dataContext } from "../../context/dataContext.js";

import Card from "./card.js";
const CardContainer = () => {
  const { todoList, todoFilter, tagFilter } = useContext(dataContext);

  function filterTodosByTag() {
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
        <div style={{ textAlign: "center" }}>
          <img src={noData} style={{ width: "60%", margin: "10px auto" }} />
          <br />
          <h2 style={{ margin: 0 }}>It sims that you dont have any todo</h2>
        </div>
      )}
    </>
  );
};

export default CardContainer;
