import React, { Component } from "react";

class Counter extends Component {
  // special property, state contains any data that the component needs
  state = {
    count: 0
  };

  //   styles = {
  //     fontSize: 10,
  //     fontWeight: "bold"
  //   };

  render() {
    return (
      <React.Fragment>
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
