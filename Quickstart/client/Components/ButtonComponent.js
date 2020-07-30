import React from "react";

export default class ButtonComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currCount: this.props.count };
  }
  handleIncrement() {
    this.setState({ currCount: this.state.currCount + 1 });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleIncrement.bind(this)}>
          {this.state.currCount}
        </button>
      </div>
    );
  }
}
