import{connect} from 'react-redux';
import style from '../Desserts/index.module.scss';
import React, { Component } from 'react';
import {fetchDessert} from '../../actions/dessert';
import {addToBag} from '../../actions/bag';


class Desserts extends Component {

    componentDidMount(){
        this.props.fetchDessert();
    }
    render(props) {
        const showDesserts = this.props.desserts.map((dessert, i)=>{
            return <div className={style.items} key={i}>
                        <img src={dessert.pic} alt="DessertPic"></img>
                        <h3>{dessert.name}</h3>
                        <p>{dessert.description}</p>
                        <div className={style.price}>{dessert.price} &#8364;</div>
                            <div className={style.btn} onClick= {()=> this.props.addToBag(
                                    {name:dessert.name,
                                    price:dessert.price,
                                    pic:dessert.pic,
                                    amount:1})}>
                                Pirkti
                            </div>
                   </div>
        });
            return (
                <div>
                    <div className={style.Block}>
                        <div className={style.itemsBlock}>
                        {showDesserts}
                        </div>
                    </div>
                </div>
            )
    }
}



const mapStateToProps=(state)=>{
    return{
        desserts:state.desserts,
        bag:state.bag,
    }
};

export default connect(mapStateToProps, {fetchDessert, addToBag})(Desserts);