import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';


//Reducers
import homeReducer from './reducers/homeReducer';
import pizzasReducer from './reducers/pizzasReducer';
import dessertsReducer from './reducers/dessertsReducer';
import drinksReducer from './reducers/drinksReducers';
import bagReducer from './reducers/bagReducer';
import authReducer from './reducers/authReducer';
import profileReducer from './reducers/profileReducer';
import checkOutReducer from './reducers/checkOutReducer';





const rootReducer = combineReducers({
    home:homeReducer,
    pizzas:pizzasReducer,
    desserts:dessertsReducer,
    drinks:drinksReducer,
    bag:bagReducer,
    auth:authReducer,
    profile:profileReducer,
    checkOut:checkOutReducer,
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//sujungem i ta pati
// const store =createStore(rootReducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());// pirma buvo tokia
//sukuriame store
 export const store = createStore(
    rootReducer,
        composeEnhancers(applyMiddleware(thunk))
      );