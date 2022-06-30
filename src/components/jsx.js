import React from "react";

// ==== with jsx html code ====

const jsx = () => {
  return (
    <div>
      <h1 className="name">Khokhar</h1>
    </div>
  );
};

// ==== without jsx html code

// const jsx = () => {
//   return React.createElement(
//     "div",
//     { className: "name" },
//     React.createElement("h1", null, "Khokhar Ali")
//   );
// };

export default jsx;
