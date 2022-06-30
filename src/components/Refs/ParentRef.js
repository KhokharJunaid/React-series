import React, { Component } from "react";
import InputRef from "./InputRef";

class ParentRef extends Component {
  constructor(props) {
    super(props);

    this.compRef = React.createRef();
  }

  clickHandler = () => {
    this.compRef.current.focusInput();
  };

  render() {
    return (
      <div>
        <InputRef ref={this.compRef} />
        <button onClick={this.clickHandler}>focus input</button>
      </div>
    );
  }
}

export default ParentRef;
