import React, { Component } from "react";

class Refs extends Component {
  constructor(props) {
    super(props);
    //creating ref
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
    // console.log(this.inputRef.current.value);
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  };

  inputHandler = (event) => {
    this.inputRef.current.value = event.target.value;
    console.log(this.inputRef.current.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.inputRef}
          onChange={this.inputHandler}
        ></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default Refs;
