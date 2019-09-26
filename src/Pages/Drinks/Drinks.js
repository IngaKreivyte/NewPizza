import{connect} from 'react-redux';
import style from './index.module.scss';
import {fetchDrink} from '../../actions/drink';
import {addToBag} from '../../actions/bag';

import React, { Component } from 'react';

class Drinks extends Component {

    componentDidMount(){
        this.props.fetchDrink();
    }
    render(props) {

        const showDrinks = this.props.drinks.map((drink, i)=>{
            return <div className={style.items} key={i}>
                        <h3>{drink.name}</h3>
                        <img src={drink.pic} alt="Drinkpic"></img>
                        <div className={style.price}>{drink.price} &#8364;</div>
                        <div className={style.btn} onClick= {()=> this.props.addToBag(
                                    {name:drink.name,
                                    price:drink.price,
                                    pic:drink.pic,
                                    amount:1
                                    })}>Į krepšelį</div>
                   </div>
        });
            return (
                <div className={style.Block}>
                    <div className={style.itemsBlock}>
                        {showDrinks}
                    </div>
            </div>
            )
    }
}

const mapStateToProps=(state)=>{
    return{
        drinks:state.drinks,
        bag:state.bag,
    }
}





export default connect(mapStateToProps,{fetchDrink, addToBag})(Drinks);