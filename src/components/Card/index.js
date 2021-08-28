import React, { useContext } from "react";

//Scripts
import { filterArr } from "../../services/utils.js";

//Context
import { dataContext } from "../../context/dataContext.js";

import Card from "./card.js";
const CardContainer = () => {
  const { todoList, todoFilter } = useContext(dataContext);
  return (
    <>
      {todoList?.length > 0 ? (
        <>
        {filterArr(todoFilter.title, todoList, "title").map((data, index) => (
            <Card dataProps={data} key={index} index={index} />
          ))}
        </>
      ) : (
        <h1 style={{ margin: 0 }}>It sims that you dont have any todo</h1>
      )}
    </>
  );
};

export default CardContainer;
