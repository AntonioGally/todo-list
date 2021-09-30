// import { card_list, tag_list } from "./api.js";

export function setTodos(cardListProps) {
  localStorage.setItem("todos", JSON.stringify(cardListProps));
  return true;
}

export function getTodos() {
  var todos = JSON.parse(localStorage.getItem("todos"));
  return todos;
}

export function setTags(tagListProps) {
  localStorage.setItem("tags", JSON.stringify(tagListProps));
  return true;
}

export function getTags() {
  var tags = JSON.parse(localStorage.getItem("tags"));
  return tags;
}

export function cleanStorage() {
  localStorage.clear();
}

export function shuffle(array) {
  return array.sort(() => (Math.random() > 0.5 ? 1 : -1));
}

/**
 * @param {string} query
 * @param {Array} array
 */

export function filterArr(query = "", array, param="text") {
  if (!array) {
    return []
  }
  return array.filter(function (el) {
    return el[param].toLowerCase().indexOf(query.toLowerCase()) > -1;
  });
}

export function idGenerator(size) {
  var randomized = Math.ceil(Math.random() * Math.pow(10, size));
  var digito = Math.ceil(Math.log(randomized));
  while (digito > 10) {
    digito = Math.ceil(Math.log(digito));
  }
  var id = randomized + "-" + digito;
  return id;
}
