import React from "react";
import ComponentC from "../components/ContextAPI/ComponentC";

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

const ContextAPI = () => {
  document.title = "Context Hooks - Learning React Hooks";
  return (
    <div
      style={{ border: "2px solid purple", padding: "1rem", margin: "1rem" }}
    >
      <h1>Context API</h1>
      <UserContext.Provider value={"Amar"}>
        <ChannelContext.Provider value={"Cyogian"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ContextAPI;
