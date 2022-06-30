import React from "react";

const UpdatedComp = (OriginalComponent, incrementNumber) => {
  class NewComponent extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        count: 0,
      };
    }

    incrementCount = () => {
      this.setState((prevState) => {
        return { count: prevState.count + incrementNumber };
      });
    };

    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increment={this.incrementCount}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComp;
