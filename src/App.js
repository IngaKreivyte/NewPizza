import React from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Layout/Header/Header';
import Pizzas from './Pages/Pizzas/Pizzas';
import Desserts from './Pages/Desserts/Desserts';
import Drinks from './Pages/Drinks/Drinks';
import Bag from './Pages/Bag/Bag';
import SignUp from './Pages/Signup/SignUp';
import Login from './Pages/Login/Login';
import CheckOut from './Pages/CheckOut/CheckOut';
import customerData from './Pages/Customerdata/Customerdata';
import DoneOrder from './Pages/doneOrder/DoneOrder';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import axios from 'axios';
import jwt from 'jsonwebtoken';
import {store} from './Store';


//login user on app load
let token = localStorage.getItem('abc123');
if(token){
  //i request header irasom jwt token
  axios.defaults.headers.common['Authorization'] = 'Bearer ' +     
  token;
  const user = jwt.decode(token);
  
 //rankiniubudu i store perduoti action
  store.dispatch({
    type:'LOG_IN',
    user,
  })
}


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Switch>
      <Route exact path='/' component={Home}/> 
      <Route exact path='/pizzas' component={Pizzas}/> 
      <Route exact path='/desertai' component={Desserts}/> 
      <Route exact path='/gerimai' component={Drinks}/> 
      <Route exact path='/bag' component={Bag}/> 
      <Route path='/SignUp' component={SignUp}/>
      <Route path='/login' component={Login}/>
      <Route path='/DoneOrder' component={DoneOrder}/>
      <Route path='/customerData' component={customerData}/>
      <Route path='/CheckOut' component={CheckOut}/>
      
      </Switch>
    </BrowserRouter>
  );
}

export default App;
