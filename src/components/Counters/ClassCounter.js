import React, { Component } from "react";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  render() {
    return (
      <div
        className="Box"
        style={{
          border: "2px solid green",
        }}
      >
        <button onClick={this.incrementCount}>Count: {this.state.count}</button>
      </div>
    );
  }
}

export default ClassCounter;
