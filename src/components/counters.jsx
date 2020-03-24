import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    console.log("Counters - Rendered");

    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <React.Fragment>
        <button onClick={onReset} className="btn btn-primary btn-small m-2">Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id} // used internally by React, can't be read
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
