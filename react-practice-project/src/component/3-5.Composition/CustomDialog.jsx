import React from "react";
import Dialog from "./Dialog";

function CustomDialog(props) {
  return (
    <Dialog>
      <h1>{props.title}</h1>
      <h5>{<button>{props.description}</button>}</h5>
    </Dialog>
  );
}

export default CustomDialog;
