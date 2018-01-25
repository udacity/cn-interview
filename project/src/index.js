import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { fetchCourses } from './actions';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const loggerMiddleware = createLogger();

const store = createStore(
  reducer,
  compose(applyMiddleware(thunkMiddleware, loggerMiddleware))
);

store.dispatch(fetchCourses());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
