import React from "react";
import ReactDOM from "react-dom";

const text = document.createElement("h4");
text.innerHTML = "this way to create the text with the javascript";
const show = document.getElementById("js");
show.appendChild(text);
const reactText = React.createElement("h3", {}, "this is the react test ed");
const reactOthertext = React.createElement("h3", {}, "this anthor text");
const MultipulText = React.createElement("div", {}, [
  reactText,
  reactOthertext,
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(MultipulText);
