
import React from 'react';
import{connect} from 'react-redux';
import style from './index.module.scss';
import main from '../../assets/images/main.jpeg';
import Pizzas from '../Pizzas/Pizzas';
import Drinks from '../Drinks/Drinks';
import Desserts from '../Desserts/Desserts';


const Home = (props) => {
    return (
            <div className={style.container}>
            <h1 className={style.welcome}> </h1> 
            <div className={style.pic}><img src={main} alt="logo"></img></div>
            <Pizzas/>
            <Drinks/>
            <Desserts/>
            </div>
            
        
    );
};


const mapStateToProps=(state)=>{
    return{
        home:state.home
    }
}

export default connect(mapStateToProps)(Home);