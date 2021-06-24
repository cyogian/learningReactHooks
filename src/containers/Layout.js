import React from "react";
import { NavLink } from "react-router-dom";

const Layout = (props) => (
  <div>
    <ul id="Links">
      <NavLink to="/" activeClassName="Active" exact>
        Counters
      </NavLink>
      <NavLink to="/fetching" activeClassName="Active" exact>
        Data Fetching
      </NavLink>
      <NavLink to="/context" activeClassName="Active" exact>
        Context Hooks
      </NavLink>
    </ul>
    {props.children}
  </div>
);

export default Layout;
