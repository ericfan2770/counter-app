import React, { Component } from "react";

class Counter extends Component {
  // special property, state contains any data that the component needs
  state = {
    count: 1
  };

  render() {
    return (
      <React.Fragment>
        <span>{this.formatCount()}</span>
        <button>Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
