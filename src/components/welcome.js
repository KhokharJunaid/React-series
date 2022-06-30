//using class component
import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //if we donot extract name from this.props then in h1 tag i would write this.props.name instead of only name
    const { name } = this.props;
    return <h1 style={{ color: "red" }}>Hello {name} How are you</h1>;
  }
}

export default Welcome;
