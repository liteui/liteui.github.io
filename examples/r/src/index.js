import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { loadState, saveState, throttle } from './redux/localStorage';
import reducer from './redux/reducers';
import './index.css';
import App from './App';

const initialState = {
  items: [
    {id: 1, name: 'I1', value: '10'},
    {id: 2, name: 'I2', value: '15'},
    {id: 3, name: 'I3', value: '20'}
  ],
  materials: [
    {id: 1, name: 'M1', value: '80'},
    {id: 2, name: 'M2', value: '90'},
    {id: 3, name: 'M3', value: '100'}
  ]
};
const persistedState = loadState();

const store = createStore(reducer, {...initialState, ...persistedState});

store.subscribe(throttle(() => {
  saveState(store.getState());
}), 1000);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
