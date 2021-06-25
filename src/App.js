import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";

import DataFetching from "./components/DataFetching/DataFetching";
import Layout from "./containers/Layout";

import "./App.css";
import Counters from "./containers/Counters";
import ContextAPI from "./containers/ContextAPI";
import ContextHook from "./containers/ContextHook";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <Counters />
            </Route>
            <Route path="/fetching" exact>
              <DataFetching />
            </Route>
            <Route path="/context" exact>
              <ContextAPI />
              <ContextHook />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
