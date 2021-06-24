import React from "react";
import { UserContext, ChannelContext } from "../../containers/ContextAPI";

const ComponentF = (props) => {
  return (
    <div>
      <h4>Component F</h4>
      <UserContext.Consumer>
        {(userName) => {
          return (
            <ChannelContext.Consumer>
              {(channelName) => {
                return (
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
                );
              }}
            </ChannelContext.Consumer>
          );
        }}
      </UserContext.Consumer>
    </div>
  );
};

export default ComponentF;
