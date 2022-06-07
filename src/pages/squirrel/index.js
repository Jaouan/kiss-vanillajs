import template from "./squirrel.partial.html";
import "../../images/squirrel.gif";
import "./squirrel.css";

export default {
  template,
  mainStyle: "main-squirrel",
  controller: async ({ $ }) => {
    const animalDiv = $("#animal");

    await new Promise((resolve) => setTimeout(resolve, 3000));

    animal.classList.add("loading-placeholder-out");
    animalDiv.innerText = "Squirrel !";
  },
};
