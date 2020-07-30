import React from "react";
import ReactDOM from "react-dom";

export default class LifeCycleComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    console.log(e.target.value);
    this.setState({ companyName: e.target.value });
  }

  handleUnmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById("content"));
  }

  componentWillMount() {
    this.state = { companyName: "" };
    console.log("Within componentWillMount!!");
  }

  componentDidMount() {
    console.log("Within componentDidMount");
    console.log("Deleting resources!!");
  }

  shouldComponentUpdate() {
    console.log("Within shouldComponentUpdate");
    console.log(arguments);
    return true;
  }

  componentWillUpdate() {
    console.log(this.state.companyName);
    console.log("Within componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("Within componentDidUpdate");
  }

  render() {
    console.log("Within render");
    return (
      <div>
        <input type="text" onChange={this.handleChange.bind(this)} />
        <h1>{this.state.companyName}</h1>

        <input
          type="button"
          value="Delete!"
          onClick={this.handleUnmount.bind(this)}
        />
      </div>
    );
  }
}
