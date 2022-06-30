import React from "react";

function PracticeChildComp(props) {
  return (
    <div>
      <button onClick={() => props.greetHandler("junaid")}>Greet Parent</button>
    </div>
  );
}

export default PracticeChildComp;
