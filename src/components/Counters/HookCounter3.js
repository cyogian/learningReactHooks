import React, { useState } from "react";

const HookCounter3 = () => {
  // State ReferenceType
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form
      className="Box Hook"
      style={{
        border: "2px solid purple",
      }}
    >
      <input
        type="text"
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
        placeholder="First Name"
        value={name.firstName}
      />
      <input
        type="text"
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
        placeholder="Last Name"
        value={name.lastName}
      />
      <h2>Your first name is : {name.firstName}</h2>
      <h2>Your last name is : {name.lastName}</h2>
    </form>
  );
};

export default HookCounter3;
