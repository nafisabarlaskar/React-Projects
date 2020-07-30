import React from "react";
import ReactDOM from "react-dom";
import ButtonComponent from "./ButtonComponent";

export default class ListOfButtonsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collection: this.props.initialValue };
  }
  handleAddition() {
    var txtInput = ReactDOM.findDOMNode(this.refs.inputValue).value;
    this.setState({ collection: [...this.state.collection, +txtInput] });
  }
  render() {
    var buttonList = this.state.collection.map((c, i) => (
      <ButtonComponent count={c} key={i} />
    ));
    return (
      <div>
        Enter Value : <input type="text" ref="inputValue" />
        <input
          type="button"
          value="Add"
          onClick={this.handleAddition.bind(this)}
        />
        {buttonList}
      </div>
    );
  }
}
