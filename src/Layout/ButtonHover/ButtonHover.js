import style from './index.module.scss';
import{connect} from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions/bag';

import emty from '../../assets/images/emty.png';

class ButtonHover extends Component {
    
    render() {
        if(this.props.bag.length!==0 && this.props.bag)  {
        const shoppingItems =this.props.bag.map((item,i)=>{
                return(
                <div key={i} className={style.block} >
                    <img  src={item.pic} alt='pic'/>
                        <div className={style.topBlock}>
                        {/* <section className={style.recycleBin}>
                            <span className={style.sampah}>
                                <span></span>
                                <i></i>
                            </span>
                        </section> */}
                            <h3> {item.name} </h3>
                            <div className={style.size}>  {item.size} </div>
                            <div className={style.countmore}>
                                <h2  onClick={()=> this.props.findUnique(item, 1)} className={style.plusMinus}> <span> + </span>  </h2>
                                <div> {item.amount} </div>
                                <h2  onClick={()=>this.props.findUnique(item, -1)}className={style.plusMinus}> <span className={style.minus}> - </span> </h2>
                                <div className={style.cost}> {item.totalPrice} EUR </div> 
                            </div>
                              
                        </div>
                </div>
                );
        });
        
        const totalAmount = this.props.bag.reduce((total, price) => total + price.totalPrice, 0)
                return(
                    <div className={style.container}> 
                        {shoppingItems}
                        <div className={style.total}>
                            <div > Užsakymo suma :</div> 
                            <div className={style.sum}>{totalAmount} EUR </div>
                        </div>
                    </div>
                );
        } else {
                return(
                    <div className={style.container}>
                        <div className={style.pic}>
                            <img src={emty} alt="logo"></img>
                        </div>
                            <h1> Oj, tuščia!</h1>
                            <p>Pas mus pristatymas visada nemokamas, tačiau minimali užsakymo suma turi būti 7,95 €</p>
                    </div>
                )
        }
    } 
};



const mapStateToProps=(state)=>{
    return{
        pizzas:state.pizzas,
        bag:state.bag,
        drinks:state.drinks,
    };
};

export default connect(mapStateToProps, actions) (ButtonHover);