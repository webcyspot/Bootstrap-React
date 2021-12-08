import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Blog from './pages/Blog';
import Blogdetail from './pages/Blogdetail';
import Contact from './pages/Contact';
import Customrecipe from './pages/Customrecipe';

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/shop" component={Shop} />
      <Route path="/blog" component={Blog} />
      <Route path="/blogdetail" component={Blogdetail} />
      <Route path="/contact" component={Contact} />
      <Route path="/customrecipe" component={Customrecipe} />
    </Switch>
  );
}

export default Routes;
