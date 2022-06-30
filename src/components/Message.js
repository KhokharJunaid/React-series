//state is changing using class components
import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "welcome visitor",
    };
  }
  //changing message
  changeMessage() {
    this.setState({
      message: "thank you for subscribing",
    });
  }
  //rendering into the screen
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
