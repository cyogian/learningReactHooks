import React from "react";
import { NavLink } from "react-router-dom";

const Layout = (props) => (
  <div id="Layout">
    <ul id="Links">
      <NavLink to="/" activeClassName="Active" exact>
        Counters
      </NavLink>
      <NavLink to="/fetching" activeClassName="Active" exact>
        Data Fetching
      </NavLink>
      <NavLink to="/context" activeClassName="Active" exact>
        Context Hook
      </NavLink>
      <NavLink to="/reducer" activeClassName="Active" exact>
        Reducer Hook
      </NavLink>
      <NavLink to="/context-reducer" activeClassName="Active" exact>
        Context Reducer
      </NavLink>
    </ul>
    {props.children}
  </div>
);

export default Layout;
