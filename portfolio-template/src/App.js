// App.js
import React, { Fragment } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./global";
import { theme } from "./theme";

import { SideNavBar } from "./NavSideBar/SideNavBar";
import { Home } from "./pages/home/Home";
import { NoMatch } from "./pages/noMatch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Fragment>
          <GlobalStyles />
          <SideNavBar key="SideNavBar" />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <Home />
            </Route>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Fragment>
      </Router>
    </ThemeProvider>
  );
}
export default App;
