import React from "react";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import DataPokemonAll from "./pages/DataPokemonAll";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/data-all" component={DataPokemonAll} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
