import React, { Component } from "react";
import { ThemeConsumer } from "./ThemeContext";
import { UserConsumer } from "./UserContext";

class ComponentF extends Component {
  render() {
    return (
      <UserConsumer>
        {(name) => {
          console.log(name);
          return (
            <ThemeConsumer>
              {(theme) => {
                console.log(theme);

                return (
                  <div>
                    <div>Hello {name}</div>
                    <div>Hello {theme}</div>
                  </div>
                );
              }}
            </ThemeConsumer>
          );
        }}
      </UserConsumer>
    );
  }
}

export default ComponentF;
