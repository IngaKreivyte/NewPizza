import style from'./index.module.scss';
import{connect} from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions/bag';
import {Link} from 'react-router-dom';

class Bag extends Component {
    state={
        bag:this.props.bag,
    }
    componentDidMount() {
        this.setState({bag: JSON.parse(localStorage.getItem('myCart'))} )
       };

    render() {
        if(this.props.bag.length!==0 && this.props.bag)  {
        const shoppingItems =this.props.bag.map((item,i)=>{
            localStorage.setItem('myCart', JSON.stringify(this.props.bag))
                return(
                <div key={i} className={style.block} >
                        <h3> {item.name} </h3>
                        <img  src={item.pic} alt='pic'/>
                       {/* {item.size && <span> size: {item.size} </span>}  */} 
                       {/* galima rasyti ir toki patikrinima  kai yra size, prideti toki span*/}
                       <div>  {item.size} </div>
                        <div > {item.totalPrice} EUR </div>   
                        <div  onClick={()=> this.props.findUnique(item, 1)} className={style.plusMinus}> + </div>
                        <div> {item.amount} </div>
                        <div  onClick={()=>this.props.findUnique(item, -1)}className={style.plusMinus}> - </div>
                </div>
                );
        });
        const itemsInBag= this.props.bag.reduce((total, price) => total + price.amount, 0)
        const totalAmount = this.props.bag.reduce((total, price) => total + price.totalPrice, 0)
                return(
                    <div className={style.container}> 
                        {shoppingItems}
                        <div className={style.total}>
                            <h3> viso prekių : {'  ' + itemsInBag}</h3>
                            <h3> viso suma : { '  ' + totalAmount}</h3>
                        </div>
                         <div>
                             <Link className={style.btn} to ='/'> Grįžti į Meniu</Link>
                        </div>
                        <div onClick={()=>{this.props.userBag(this.props.bag)}}>
                            <Link className={style.btn} to ='/customerData' > Toliau </Link>
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