import React, { Component } from "react";
import styles from "./formStyles.module.css";
class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }

  nameHandler = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  commentHandler = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  topicHandler = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  formSubmitHandler = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
  };

  render() {
    const { username, comment, topic } = this.state;
    return (
      <form onSubmit={this.formSubmitHandler}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.nameHandler}
          ></input>
        </div>
        <div>
          <label>Comment</label>
          <textarea value={comment} onChange={this.commentHandler}></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.topicHandler}>
            <option value="react">react</option>
            <option value="angular">angular</option>
            <option value="vue">vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
