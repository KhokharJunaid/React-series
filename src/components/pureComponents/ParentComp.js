import React, { Component, PureComponent } from "react";
import Memo from "./Memo";
import PureComp from "./PureComp";
import RegComp from "./RegComp";

//put Component instead of PureComponent then Parent and its all regular component will render after 2 seconds ... but the pure components will check if the array and the object (reference) and state is same then it will not render
// If parent component is Pure Component then it's child Regular component will also not render after two seconds (interval which i wrote in method below)
class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "junaid",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "junaid",
      });
    }, 2000);
  }

  render() {
    console.log("================ Parent Component render ================");

    return (
      <div>
        Parent Component
        {/* these two are for Class component */}
        {/* <RegComp name={this.state.name} /> */}
        {/* <PureComp name={this.state.name} /> */}
        {/* for memo */}
        <Memo />
      </div>
    );
  }
}

export default ParentComp;
