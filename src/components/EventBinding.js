import React, { Component } from "react";

class EventBinding extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };

    //approach 1 of binding click handler
    this.clickHandler = this.clickHandler.bind(this);
  }
  //click handler using approach 1
  clickHandler() {
    this.setState({
      message: "Good bye",
    });
  }

  //click handler function
  //approach 2
  //using arrow function
  //   clickHandler = () => {
  //     this.setState({
  //       message: "Good bye",
  //     });
  //   };

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBinding;
