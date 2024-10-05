import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Schedule from './Schedule';
import Facilities from './Facilities';
import Map from './Map'; // You can add this next

const MainApp = () => (
  <Router>
    <Header />
    <Switch>
      <Route path="/schedule" component={Schedule} />
      <Route path="/facilities" component={Facilities} />
      <Route path="/map" component={Map} />
      <Route exact path="/" component={Schedule} />
    </Switch>
  </Router>
);

export default MainApp;
