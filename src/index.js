import React from 'react';
import ReactDOM from 'react-dom';
// import {Provider} from 'react-redux';


import store from './store';
//To Manually Test we must import actions using destructuting (take function vals not capitalized vals)
//and do store.dispatch with a specific action and associated values(if any needed)
//(ex: '5' for guess in the ADD_GUESS action):
import {addGuess, restartGame, generateAuralUpdate} from './actions';

import './reset.css';
import './index.css';

import Game from './components/game';

ReactDOM.render(
    <Game />,
  document.getElementById('root')
);

store.dispatch(addGuess(5));
console.log(store.getState());

store.dispatch(addGuess(12));
console.log(store.getState());

store.dispatch(restartGame());
console.log(store.getState());

store.dispatch(addGuess(25));
console.log(store.getState());

store.dispatch(generateAuralUpdate());
console.log(store.getState());
