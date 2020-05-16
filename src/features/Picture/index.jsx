import React from 'react';
import { Switch, useRouteMatch, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';
import NotFound from '../../components/NotFound';

Picture.propsType = {}

function Picture() {
  const match = useRouteMatch();
  console.log(match);

  return (
    <Switch>
      <Route exact path={match.url} component={MainPage}></Route>

      <Route path={`${match.url}/add`} component={AddEditPage}></Route>
      <Route path={`${match.url}/:picId`} component={AddEditPage}></Route>

      <Route component={NotFound}></Route>
    </Switch>
  )
}

export default Picture;