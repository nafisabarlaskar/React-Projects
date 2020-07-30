// Code Here
import React from "react";
import ReactDOM from "react-dom";
import ListOfButtonsComponent from "./Components/ListOfButtonsComponent";
import LifeCycleComponent from "./Components/LifeCycleComponent";
import PostsComponent from "./Components/PostsComponent";

// ReactDOM.render(
//   <ListOfButtonsComponent initialValue={[10, 20, 30, 40, 50]} />,
//   document.getElementById("content")
// );

ReactDOM.render(<PostsComponent />, document.getElementById("content"));
