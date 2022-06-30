import React, { Component } from "react";


class ConditionalOperator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isSubscibed: true,
    };
  }

  changeText() {
    this.setState({
      isSubscibed: !this.state.isSubscibed,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.isSubscibed ? "Welcome Junaid" : "Welcome Guest"}</h1>
        <button
          style={{
            backgroundColor: "red",
            border: "none",
            padding: "5px 10px",
            borderRadius: "10px",
            color: "white",
            fontSize: "15px",
          }}
          onClick={() => this.changeText()}
        >
          {this.state.isSubscibed ? "log out" : "log in"}
        </button>
      </div>
    );
  }
}

export default ConditionalOperator;
