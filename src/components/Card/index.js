import React, { useContext } from "react";


//Context
import { dataContext } from "../../context/dataContext.js";

import Card from "./card.js";
const CardContainer = () => {
  const { todoList } = useContext(dataContext);
  return (
    <>
      {todoList?.length > 0 ? (
        <>
          {todoList.map((data, index) => (
            <Card dataProps={data} key={index} index={index} />
          ))}
        </>
      ) : (
        <h1>It sims that you dont have any todo</h1>
      )}
    </>
  );
};

export default CardContainer;
