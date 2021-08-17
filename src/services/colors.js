import { getTags } from "./utils";
const list = [
  {
    scale: "blue",
    colors: ["#1E90FF", "#187DE9", "#126AD2", "#0C56BC", "#0643A5", "#00308F"],
  },
  {
    scale: "gray",
    colors: ["#808080", "#909090", "#9F9F9F", "#AFAFAF", "#BEBEBE"],
  },
  {
    scale: "yellow",
    colors: ["#FFBA00", "#FFDB30", "#FCF33F", "#FFD319"],
  },
  {
    scale: "pink",
    colors: ["#FF5CCC", "#DC52BF", "#B947B1", "#973DA4", "#743296", "#512889"],
  },
];

export function colorsData() {
  const existingTags = getTags();
  var auxArr = [];
  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].colors.length; j++) {
      auxArr.push(list[i].colors[j]);
    }
  }
  for (let i = 0; i < existingTags?.length; i++) {
    for (let j = 0; j < auxArr.length; j++) {
      if (existingTags[i].color.toLowerCase() === auxArr[j].toLowerCase()) {
        auxArr.splice(j, 1);
      }
    }
  }
  return auxArr;
}
