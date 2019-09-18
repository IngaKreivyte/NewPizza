
import React from 'react';
import{connect} from 'react-redux';
import style from './index.module.scss';
import main from '../../assets/images/main.jpg';

const Home = (props) => {
    return (
            <div className={style.container}>
            <h1 className={style.welcome}> </h1> 
            <div><img src={main} alt="logo"></img></div>
            </div>
        
    );
};


const mapStateToProps=(state)=>{
    return{
        home:state.home
    }
}

export default connect(mapStateToProps)(Home);