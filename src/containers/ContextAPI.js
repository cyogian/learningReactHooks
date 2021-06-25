import React from "react";
import ComponentC from "../components/Context/ComponentC";

import { UserContext, ChannelContext } from "../components/Context/Context";

const ContextAPI = () => {
  document.title = "Context Hook - Learning React Hooks";
  return (
    <div id="ContextAPI" className="Box" style={{ border: "2px solid purple" }}>
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
