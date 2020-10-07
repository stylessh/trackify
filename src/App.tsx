import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "components/Navbar";
import Track from "pages/Track";

import "./App.scss";

const App: FC = () => {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route path="/" exact render={() => <h1>Hola</h1>} />
        <Route path="/track" exact render={() => <Track />} />
      </Switch>
    </Router>
  );
};

export default App;
