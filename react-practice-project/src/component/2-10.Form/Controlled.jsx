import React, { useState } from "react";

function Controlled() {
  const [userName, setUserName] = useState("");
  const [essay, setEssay] = useState("Please write an essay.");
  const [flavor, setFlavor] = useState("coconut");

  function handleChange(event) {
    const name = event.target.name;
    if (name === "name") {
      setUserName(event.target.value);
    } else if (name === "essay") {
      setEssay(event.target.value);
    } else if (name === "flavor") {
      setFlavor(event.target.value);
    }
  }

  function handleSubmit(event) {
    alert(`name: ${userName}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          name="name"
          type="text"
          value={userName}
          onChange={handleChange}
        />
      </label>
      <br />
      <br />
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br />
      <br />
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Controlled;
