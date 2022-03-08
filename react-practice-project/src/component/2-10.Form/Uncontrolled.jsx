import React, { useRef } from "react";

function Uncontrolled() {
  const fileInputRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${fileInputRef.current.files[0].name}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInputRef} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Uncontrolled;
