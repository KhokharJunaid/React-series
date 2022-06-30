import React from "react";

function Memo({ name }) {
  console.log("Memo rendering");
  return <div>{name}</div>;
}

// export default Memo;
export default React.memo(Memo); //memo will not render if the props of name will stay same

//React.memo is just like PureComponent of class
//PureComponent is clased based component.
//React.Memo is function based component.
