import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Switch } from "react-router";

import DataFetching from "./components/DataFetching/DataFetching";
import Layout from "./containers/Layout";

import "./App.css";
import Counters from "./containers/Counters";
import ContextAPI from "./containers/ContextAPI";
import ContextHook from "./containers/ContextHook";
import ReducerHook from "./containers/ReducerHook";
import ContextReducer from "./containers/ContextReducer";
import DataFetchingOne from "./components/DataFetching/DataFetchingOne";
import DataFetchingTwo from "./components/DataFetching/DataFetchingTwo";
import CallbackHook from "./containers/CallbackHook";

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
            <Route path="/reducer" exact>
              <ReducerHook />
            </Route>
            <Route path="/context-reducer" exact>
              <ContextReducer />
            </Route>
            <Route path="/fetching-one" exact>
              <DataFetchingOne />
            </Route>
            <Route path="/fetching-two" exact>
              <DataFetchingTwo />
            </Route>
            <Route path="/callback" exact>
              <CallbackHook />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
