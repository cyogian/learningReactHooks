import React, { useContext } from "react";
import { UserContext, ChannelContext } from "./Context";

const HookComponentF = (props) => {
  const userName = useContext(UserContext);
  const channelName = useContext(ChannelContext);
  return (
    <div>
      <h4>HookComponent F</h4>
      <div
        style={{
          textAlign: "left",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <p>User context value &emsp;&emsp;-->&ensp;{userName}</p>
        <p>Channel context value &ensp;-->&ensp;{channelName}</p>
      </div>
    </div>
  );
};

export default HookComponentF;
