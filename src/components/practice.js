import React from "react";

class Practice extends React.Component {
  constructor() {
    super();
    this.state = {
      subscribe: false,
    };
  }
  //rendering into screen
  render() {
    return (
      <div>
        <h1>
          {this.state.subscribe
            ? "Thank you for subscribing"
            : "Subscribe my channel"}
        </h1>
        <button onClick={() => this.changeText()}>
          {this.state.subscribe ? "Unsubscribe" : "Subscribes"}
        </button>
      </div>
    );
  }
  //change text
  changeText() {
    this.setState({
      subscribe: !this.state.subscribe,
    });
  }
}

export default Practice;
