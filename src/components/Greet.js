import React from "react";

const salam = (props) => {
  //   console.log(props);
  //extracting elements which we need
  const { name, gender, knownAs } = props;
  return (
    <div>
      <h1 style={{ textTransform: "capitalize" }}>
        Hello {name} {gender} is known as {knownAs}
      </h1>
      {props.children}
    </div>
  );
};

export default salam;
