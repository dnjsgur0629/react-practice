import React from "react";
import Dialog from "./Dialog";

function PurpleDialog() {
  return (
    <Dialog
      title={<h1 style={{ color: "purple" }}>Purple Flame</h1>}
      description="I’m Salamander. Man I surf. I’m on a flame, I’m on a fire."
      button={<button style={{ backgroundColor: "plum" }}>It's hot!</button>}
    />
  );
}

export default PurpleDialog;
