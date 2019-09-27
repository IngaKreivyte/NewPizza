
import React from 'react';
import{connect} from 'react-redux';
import style from './index.module.scss';
import main from '../../assets/images/main.jpeg';
import secondimg from '../../assets/images/secondmain.jpeg';
import thirdimg from '../../assets/images/thirdmain.jpeg';
import Pizzas from '../Pizzas/Pizzas';
import Drinks from '../Drinks/Drinks';
import Desserts from '../Desserts/Desserts';
import ScrollUpButton from "react-scroll-up-button";
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

const handleOnDragStart = e => e.preventDefault()

const Home = (props) => {
    return (
        <React.Fragment>
            <div className={style.container}>
                <h1 className={style.welcome}> </h1> 
                <AliceCarousel
                mouseDragEnabled 
                buttonsDisabled 
                duration={1500}
                autoPlay={true} >
                    <img src={main} alt="logo" onDragStart={handleOnDragStart} className="yours-custom-class" />
                    <img src={secondimg} alt="logo" onDragStart={handleOnDragStart} className="yours-custom-class" />
                    <img src={thirdimg} alt="logo"onDragStart={handleOnDragStart} className="yours-custom-class" />
                </AliceCarousel>
                {/* <div className={style.pic}><img src={main} alt="logo"></img></div> */}
                <div className={style.scroll} id='pizzas'/><Pizzas/>
               <div className={style.scroll} id='desertai'/><Desserts/>
               <div className={style.scroll} id='gerimai'/><Drinks/>
                <ScrollUpButton style={{outline: 'none', width:70}}   ToggledStyle={{outline: 'none'}}/>
            </div>
        </React.Fragment>
    );
};


const mapStateToProps=(state)=>{
    return{
        home:state.home
    }
}

export default connect(mapStateToProps)(Home);