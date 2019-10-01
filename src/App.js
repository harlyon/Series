import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import BRoute from "./Components/Route";

const App = () => (
  <Router>
    <BRoute />
  </Router>
);

export default App;
