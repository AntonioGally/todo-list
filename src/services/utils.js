import { card_list, tag_list } from "./api.js";

export function setTodos(cardListProps) {
  localStorage.setItem("todos", JSON.stringify(cardListProps || card_list));
  return true;
}

export function getTodos() {
  var todos = JSON.parse(localStorage.getItem("todos"));
  return todos;
}

export function setTags(tagListProps) {
  localStorage.setItem("tags", JSON.stringify(tagListProps || tag_list));
  return true;
}

export function getTags() {
  var tags = JSON.parse(localStorage.getItem("tags"));
  return tags;
}

export function cleanStorage() {
  localStorage.clear();
}
