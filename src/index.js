import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import ListInfo from './components/listInfo';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);
const NoMatch = ({ location }) => {
  return <h2>404 NOT FOUND, the page "{location.pathname}" you looking for do not exist</h2>
}

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Route path="/listInfo" component={ListInfo} />
          <Route exact path="/" component={App} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    </Provider>
  , document.querySelector('.app'));
