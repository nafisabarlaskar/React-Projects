import React, { Component } from "react";
import ButtonComponent from "./Components/ButtonComponent";

class ButtonComponents extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 2 },
      { id: 3, value: 1 },
      { id: 4, value: 3 }
    ]
  };
  render() {
    return this.state.counters.map(counter => (
      <ButtonComponent key={counter.id} value={counter.value} selected={true} />
    ));
  }
}
