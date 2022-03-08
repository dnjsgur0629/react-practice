import React from "react";

export default function Event() {
  const handleButtonClick = (e) => {
    console.dir(e);
    console.log("button click");
  };

  const handleClickCapture = () => {
    console.log("capture");
  };

  const handleClickCapture2 = () => {
    console.log("capture2");
  };

  const handleClickBubble = () => {
    console.log("Bubble");
  };

  return (
    <div onClickCapture={handleClickCapture}>
      <div onClickCapture={handleClickCapture2} onClick={handleClickBubble}>
        <button onClick={handleButtonClick}>Button</button>
      </div>
    </div>
  );
}
