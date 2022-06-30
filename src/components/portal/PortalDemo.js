import React from "react";
import ReactDOM from "react-dom";

//using portal we create new element after the div of id App .. inspect this element and check wheather it is in app's element or portal-root's element
// <div id="App"></div> //this one is by default
// <div id="portal-root"></div>

function PortalDemo() {
  return ReactDOM.createPortal(
    <h1>Portal demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
