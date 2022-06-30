import React, { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }
  //rendering value
  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>increment</button>
      </div>
    );
  }
  //increment
  increment() {
    //this state is good for how many times you want to increment .. just like incrementFive() called on button
    this.setState(
      (prevState) => ({
        count: prevState.count + 1,
      }),
      () => console.log("call back value is: ", this.state.count)
    );

    // this.setState(
    //   {
    //     count: this.state.count + 1,
    //   },
    //   () => {
    //     console.log("call back value is: ", this.state.count);
    //   }
    // );
    // here the value of count is 1 less because at that stage of code execution, state of count is still one, state will change later the execution of the code, so use the way which i used above comment setState
    // console.log(this.state.count);
  }
  //increment five times
  incrementFive() {
    //for incrementing using previous state we modify the increment()
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
}

export default Counter;
