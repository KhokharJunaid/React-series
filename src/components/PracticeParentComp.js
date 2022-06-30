import React, { Component } from "react";
import PracticeChildComp from "./PracticeChildComp";

class PracticeParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "parent",
    };
    this.greetParent = this.greetParent.bind(this);
  }

  //greet parent
  greetParent(childName) {
    alert(`Hello ${this.state.message} from ${childName}`);
  }

  render() {
    return (
      <div>
        <PracticeChildComp greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default PracticeParentComp;
