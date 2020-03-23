import React, { Component } from "react";

class Counter extends Component {
  // special property, state contains any data that the component needs
  state = {
    value: this.props.value
  };

  //   constructor() {
  //     super();
  //     console.log("Constructor", this);
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  handleIncrement = product => {
    // console.log("Increment Clicked", this);
    // this.state.count++;
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  //   doHandleIncrement = () => {
  //     this.handleIncrement({ id: 1 });
  //   };

  render() {
    // console.log("props", this.props);

    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          // onClick = { this.doHandleIncrement }
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
