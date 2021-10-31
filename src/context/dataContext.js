import React, { createContext, useState, useEffect } from "react";

//Utils
import { setTags, setTodos, getTodos, getTags } from "../services/utils.js";

export const dataContext = createContext({});

export default function DataContextProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  const [tagList, setTagList] = useState([]);

  const [tagFilter, setTagFilter] = useState([]);
  const [todoFilter, setTodoFilter] = useState({ title: "" });
  const [doneFilter, setDoneFilter] = useState(false);

  const [relationTagTodo, setRelationTagTodo] = useState({});

  useEffect(() => {
    //Sync the local storage with state data
    if (todoList?.length > 0 || todoList == null) setTodos(todoList);
  }, [todoList]);

  useEffect(() => {
    //Sync the local storage with state data
    if (tagList?.length > 0 || tagList == null) setTags(tagList);
  }, [tagList]);
  useEffect(() => {
    //Sync the react state with local storage data
    if (getTodos()) {
      setTodoList(getTodos());
    }
    if (getTags()) {
      setTagList(getTags());
    }
  }, []);

  useEffect(() => {
    // Inserting tags and todos relations into state ex: (tag01: [todos], tag02: [todos])
    var obj = {};
    tagList?.forEach((value) => {
      obj[value.text] = [];
    });
    todoList?.forEach((value) => {
      value.tags.forEach((todoTags) => {
        obj[todoTags.text].push(value);
      });
    });
    setRelationTagTodo(obj);
    //eslint-disable-next-line
  }, [todoList]);

  return (
    <dataContext.Provider
      value={{
        todoList,
        tagList,
        setTodoList,
        setTagList,
        tagFilter,
        setTagFilter,
        todoFilter,
        setTodoFilter,
        relationTagTodo,
        doneFilter,
        setDoneFilter,
      }}
    >
      {children}
    </dataContext.Provider>
  );
}
