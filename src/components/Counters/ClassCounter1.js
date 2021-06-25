import React, { Component } from "react";

class ClassCounter1 extends Component {
  state = {
    count: 0,
    name: "",
  };

  componentDidMount() {
    console.log("Updating document title");
    document.title = `Class Clicked ${this.state.count} times - Learning React Hooks`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("Updating document title");
      document.title = `Class Clicked ${this.state.count} times - Learning React Hooks`;
    }
  }

  render() {
    return (
      <div
        className="Box"
        style={{
          borderColor: "cyan",
        }}
      >
        <input
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button
          onClick={() =>
            this.setState((prevState) => ({ count: prevState.count + 1 }))
          }
        >
          Click {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ClassCounter1;
