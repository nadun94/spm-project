import React from 'react'
import { Route, IndexRoute } from 'react-router'

import LayoutComponent from './components/LayoutComponent';
import HomeComponent from './components/HomeComponent';
import ContactComponent from './components/ContactComponent';
// import AthletePage from './components/AthletePage';
import NotFoundComponent from './components/NotFoundComponent';
import './assets/css/main.css'

const routes = (
  <Route path="/" component={LayoutComponent}>
    <IndexRoute component={HomeComponent} />
    <Route path="contact" name="contact" component={ContactComponent} />
    <Route path="*" component={NotFoundComponent} />
  </Route>
);

export default routes;
