import React from "react";
import axios from "axios";

export default class RequestComponent extends React.Component {
  constructor() {}
  componentDidMount() {
    axios
      .get("https://api.myjson.com/bins/lods6")
      .then(Response => this.setState({ posts: Response.data }));
  }
  render() {
    var postsToBeCreated = this.state.posts.map(p => (
      <li key={p.id}>{p.title}</li>
    ));
    return <ul>{postsToBeCreated}</ul>;
  }
}
