import React from "react";
import { Switch, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/weatherApp" component={MainPage} />
      </Switch>
    </>
  );
}

export default App;
