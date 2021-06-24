import React, { Component } from "react";

class IntervalClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  tick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
        className="Box"
        style={{
          border: "2px solid pink",
        }}
      >
        Count: {this.state.count}
      </div>
    );
  }
}

export default IntervalClassCounter;
