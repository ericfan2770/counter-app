import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {

  render() {
    return (
      <React.Fragment>
        <button onClick={this.props.onReset} className="btn btn-primary btn-small m-2">Reset</button>
        {this.props.counters.map(counter => (
          <Counter
            key={counter.id} // used internally by React, can't be read
            onDelete={this.props.onDelete}
            onIncrement={this.props.onIncrement}
            counter={counter}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
