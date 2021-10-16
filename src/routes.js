import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail'
import Favorites from './pages/Favorites'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/books" exact component={Main} />
        <Route path="/books/detail" component={Detail} />
        <Route path="/books/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
  );
}