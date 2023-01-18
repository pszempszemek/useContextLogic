import React, { useState, useContext } from "react";
import { NameContext } from "../App";

export default function Component5() {
  const { name, setName } = useContext(NameContext);
  const [tempName, setTempName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTempName("");
    setName(tempName);
  };

  return (
    <div>
      <h2>Component5</h2>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={tempName}
            onChange={({ target }) => setTempName(target.value)}
          />
        </label>
        <button type="submit">Change name</button>
      </form>
      <h3>hello {name}!</h3>
    </div>
  );
}
