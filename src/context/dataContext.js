import React, { createContext, useState, useEffect } from "react";

//Utils
import { setTags, setTodos, getTodos, getTags } from "../services/utils.js";

export const dataContext = createContext({});

export default function DataContextProvider({ children }) {
  const [todoList, setTodoList] = useState();
  const [tagList, setTagList] = useState();

  useEffect(() => {
    //Sync the local storage
    setTodos(todoList);
  }, [todoList]);

  useEffect(() => {
    //Sync the local storage
    setTags(tagList);
  }, [tagList]);

  useEffect(() => {
    //Checking if there is a data on API
    if (getTodos()) {
      setTodoList(getTodos());
    }
    if (getTags()) {
      setTagList(getTags());
    }
  }, []);

  return (
    <dataContext.Provider
      value={{ todoList, tagList, setTodoList, setTagList }}
    >
      {children}
    </dataContext.Provider>
  );
}
