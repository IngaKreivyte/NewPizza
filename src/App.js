import React, { Component } from 'react';
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
import spiner from './Layout/Spiner/spiner';
import NewNav from './Layout/NewNav/NewNav';

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
 

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

const HomeLayout = props => (
  <div>
    <Header/>
    {props.children}
  </div>
)





class App extends Component { 
  render() {
    const BagLayout = props => (
      <div>
        <NewNav />
        {props.children}
      </div>
    )
    return (
      <BrowserRouter>
      <Switch>
      <AppRoute exact path='/'  layout={ HomeLayout } component={Home}/> 
      <AppRoute exact path='/pizzas' layout={ HomeLayout }  component={Pizzas}/> 
      <AppRoute exact path='/desertai' layout={ HomeLayout }  component={Desserts}/> 
      <AppRoute exact path='/gerimai' layout={ HomeLayout }  component={Drinks}/> 
      <AppRoute exact path='/bag' layout={ BagLayout }   component={Bag }/> 
      <AppRoute path='/SignUp' layout={ HomeLayout }  component={SignUp}/>
      <AppRoute path='/login' layout={ HomeLayout }  component={Login}/>
      <AppRoute path='/DoneOrder'  layout={ BagLayout } component={DoneOrder}/>
      <AppRoute path='/customerData'  layout={ BagLayout } component={customerData}/>
      <AppRoute path='/CheckOut'layout={ BagLayout }  component={CheckOut}/>
      <AppRoute path='/spiner' layout={ HomeLayout }  component={spiner}/>
      
      </Switch>
    </BrowserRouter>
    );
  }
}




export default App;