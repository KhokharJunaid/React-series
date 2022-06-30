import React from "react";

function PresonListRendering({ personHandler }) {
  return (
    <div>
      <h1>
        Hello I am {personHandler.name}. I am {personHandler.age} years old and
        i know {personHandler.skills}
      </h1>
    </div>
  );
}

export default PresonListRendering;
