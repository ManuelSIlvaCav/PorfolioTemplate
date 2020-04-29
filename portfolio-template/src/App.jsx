// App.js
import React, { Fragment, useReducer, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import { SideNavBar } from "./NavSideBar/SideNavBar";
import { Home } from "./pages/home/Home";
import { NoMatch } from "./pages/noMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { SideNavDispatch } from "./AppContext";
import { Resume } from "./pages/resume/Resume";

export function App() {
  const [state, dispatch] = useReducer(reducer, { open: false });
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "open", value: true });
    }, 600);
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <SideNavDispatch.Provider value={dispatch}>
          <Fragment>
            <GlobalStyles />

            <Switch>
              <Route exact path="/">
                <Home open={state.open} />
              </Route>
              <Route path="/about">
                <NoMatch />
              </Route>
              <Route path="/resume">
                <Resume />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
            <SideNavBar key="SideNavBar" open={state.open} />
          </Fragment>
        </SideNavDispatch.Provider>
      </Router>
    </ThemeProvider>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { open: !state.open };
    case "open":
      return { open: action.value };
    default:
      throw new Error();
  }
}

export default App;
