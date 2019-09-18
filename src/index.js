import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Sass/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import {store} from './Store';
// //Reducers
// import homeReducer from './reducers/homeReducer';
// import pizzasReducer from './reducers/pizzasReducer';
// import dessertsReducer from './reducers/dessertsReducer';
// import drinksReducer from './reducers/drinksReducers';
// import bagReducer from './reducers/bagReducer';
// import authReducer from './reducers/authReducer';
// import signupReducer from './reducers/signupReducer';

// const rootReducer = combineReducers({
//     home:homeReducer,
//     pizzas:pizzasReducer,
//     desserts:dessertsReducer,
//     drinks:drinksReducer,
//     bag:bagReducer,
//     auth:authReducer,
//     signup:signupReducer,
// });
ReactDOM.render(
    <Provider store={store}> <App /> </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
