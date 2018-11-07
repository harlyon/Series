import React from 'react';
import { Route } from 'react-router-dom';
import Shows from './Shows';
import SingleShow from './SingleShow'

const BRoute = () => {
    return (
        <div>
            <Route exact path = "/" component={Shows} />
            <Route path = "/:objid" component={SingleShow} />
        </div>
    );
};

export default BRoute;