import React, { Component } from "react";
import UpdatedComp from "./UpdatedComp";

class ClickCount extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <button onClick={increment}>
          {this.props.name} Clicked {count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComp(ClickCount, 5);
