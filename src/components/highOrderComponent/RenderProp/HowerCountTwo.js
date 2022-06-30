import React, { Component } from "react";

class HowerCountTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={incrementCount}>Hower {count} times</h1>
      </div>
    );
  }
}

export default HowerCountTwo;
