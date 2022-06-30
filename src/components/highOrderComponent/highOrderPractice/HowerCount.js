import React, { Component } from "react";
import UpdatedComp from "./UpdatedComp";

class HowerCount extends Component {
  render() {
    const { count, increment } = this.props;
    return (
      <div>
        <h1 onMouseOver={increment}>Hower {count} times</h1>
      </div>
    );
  }
}

export default UpdatedComp(HowerCount, 10);
