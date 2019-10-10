import style from'./index.module.scss';
import{connect} from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions/bag';
import {Link} from 'react-router-dom';

class Bag extends Component {
   
    
    render() {
        
        
        if(this.props.bag.length!==0 && this.props.bag)  {
        const shoppingItems =this.props.bag.map((item,i)=>{
            return(
                <div key={i} className={style.block} >
                        <img  src={item.pic} alt='pic'/>
                        <h3>  {item.size &&  <span>({item.size})</span> }   {item.name} </h3>
                       {/* galima rasyti ir toki patikrinima  kai yra size, prideti toki span*/}
                       {/* <div className={style.size}>  {item.size} </div> */}
                        <div className={style.totalPrice} > {item.totalPrice} &#8364; </div>   
                        <div className={style.counterBlock}>
                            <div  onClick={()=> this.props.findUnique(item, 1)} className={style.plusMinus}><span> &#43; </span>  </div>
                            <div className={style.amount}> {item.amount} </div>
                            <div  onClick={()=>this.props.findUnique(item, -1)} className={style.plusMinus}> <span className={style.minus}> &#8722;</span> </div>
                        </div>
                </div>
                );
        });
        const itemsInBag= this.props.bag.reduce((total, price) => total + price.amount, 0)
        const totalAmount = this.props.bag.reduce((total, price) => total + price.totalPrice, 0)
                return(
                    <div className={style.container}> 
                        {shoppingItems}
                        <div className={style.total}>
                            <h3> viso prekių : {'  ' + itemsInBag} </h3>
                            <h3> viso suma : { '  ' + totalAmount} &#8364;</h3>
                        </div>
                        <div className={style.btnBlock}>
                            <div>
                                <Link className={style.btn} to ='/'> Grįžti į Meniu</Link>
                            </div>
                            <div onClick={()=>{this.props.userBag(this.props.bag)}}>
                                <Link className={style.btn} to ='/customerData' > Toliau </Link>
                            </div>
                        </div>
                    </div>
                );
        } else {
                return(
                    <div className={style.container}>
                        <h1> Pridėkite ką nors iš meniu</h1>
                        <div>
                            <Link className={style.btn1} to ='/'> Grįžti į Meniu</Link>
                        </div>
                    </div>
                )
        }
    } 
};



const mapStateToProps=(state)=>{
    return{
        pizzas:state.pizzas,
        bag:state.bag,
    };
};

export default connect(mapStateToProps, actions) (Bag);