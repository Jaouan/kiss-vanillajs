import template from "./hi.partial.html";

export default {
  template,
  mainStyle: "main-hi",
  controller: () => console.log("%cHi ! 🐿️", "font-size: 2em; color: orange;"),
};
