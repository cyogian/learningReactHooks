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
      <NavLink to="/fetching-one" activeClassName="Active" exact>
        Data Fetching One
      </NavLink>
      <NavLink to="/fetching-two" activeClassName="Active" exact>
        Data Fetching Two
      </NavLink>
      <NavLink to="/callback" activeClassName="Active" exact>
        Callback Hook
      </NavLink>
      <NavLink to="/memo" activeClassName="Active" exact>
        Memo Hook
      </NavLink>
      <NavLink to="/ref" activeClassName="Active" exact>
        Ref Hook
      </NavLink>
      <NavLink to="/custom" activeClassName="Active" exact>
        Custom Hooks
      </NavLink>
    </ul>
    {props.children}
  </div>
);

export default Layout;
