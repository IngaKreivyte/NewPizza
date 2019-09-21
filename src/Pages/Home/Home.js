
import React from 'react';
import{connect} from 'react-redux';
import style from './index.module.scss';
import main from '../../assets/images/main.jpeg';

const Home = (props) => {
    return (
            <div className={style.container}>
            <h1 className={style.welcome}> </h1> 
            <div className={style.pic}><img src={main} alt="logo"></img></div>
            </div>
        
    );
};


const mapStateToProps=(state)=>{
    return{
        home:state.home
    }
}

export default connect(mapStateToProps)(Home);