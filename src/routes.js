import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Detail from './pages/Detail'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/books" exact component={Main} />
        <Route path="/books/detail" component={Detail} />
      </Switch>
    </BrowserRouter>
  );
}