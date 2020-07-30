import React from "react";
import axios from "axios";

export default class PostsComponent extends React.Component {
  constructor() {}
  componentDidMount() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/posts")
    //   .then(Response => console.log(Response));
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then(Response => this.setState({ posts: Response.data }));
  }
  render() {
    var postsToBeCreated = this.state.posts.map(p => (
      <li key={p.id}>{p.title}</li>
    ));
    return <ul>{postsToBeCreated}</ul>;
  }
}
