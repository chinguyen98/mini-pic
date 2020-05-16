import React, { Suspense } from 'react';
import { Link, Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';

const Picture = React.lazy(() => import('./features/Picture'));

function App() {
  return (
    <div className="pic-app">
      <Suspense fallback={<div>Loading................</div>}>
        <BrowserRouter>
          <ul>
            <li><Link to='/pics'>Go to picture page!</Link></li>
            <li><Link to='/pics/add'>Go to Add new picture page!</Link></li>
            <li><Link to='/pics/123'>Go to edit picture page!</Link></li>
          </ul>
          <Switch>
            <Redirect exact from='/' to='/pics' />

            <Route path='/pics' component={Picture}></Route>
            <Route component={NotFound}></Route>
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
