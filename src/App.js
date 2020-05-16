import React, { Suspense } from 'react';
import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import Header from './components/Header';

const Picture = React.lazy(() => import('./features/Picture'));

function App() {
  return (
    <div className="pic-app">
      <Suspense fallback={<div>Loading................</div>}>
        <BrowserRouter>
          <Header />

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
