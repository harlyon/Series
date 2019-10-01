import React from "react";
import { Route } from "react-router-dom";
import Shows from "./Shows";
import SingleShow from "./SingleShow";

const BRoute = () => (
  <>
    <Route exact path="/" component={Shows} />
    <Route path="/:objid" component={SingleShow} />
  </>
);

export default BRoute;
