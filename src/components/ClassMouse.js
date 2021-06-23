import React, { Component } from "react";

class ClassMouse extends Component {
  state = {
    x: 0,
    y: 0,
  };

  logMousePosition = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.logMousePosition);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.logMousePosition);
  }

  render() {
    return (
      <div
        className="Box"
        style={{
          border: "2px solid yellowgreen",
        }}
      >
        X - {this.state.x}
        <hr />Y - {this.state.y}
      </div>
    );
  }
}

export default ClassMouse;
