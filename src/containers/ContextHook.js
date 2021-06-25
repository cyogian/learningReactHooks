import React from "react";
import HookComponentC from "../components/Context/HookComponentC";

import { UserContext, ChannelContext } from "../components/Context/Context";

const ContextHook = () => {
  return (
    <div id="ContextHook" className="Box Hook" style={{ borderColor: "red" }}>
      <h1>Context Hook</h1>
      <UserContext.Provider value={"Amar"}>
        <ChannelContext.Provider value={"Cyogian"}>
          <HookComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default ContextHook;
