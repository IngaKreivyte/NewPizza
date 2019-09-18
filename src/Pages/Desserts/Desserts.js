import{connect} from 'react-redux';
import Dessert from '../../assets/images/Desserts.jpg';
import style from '../Desserts/index.module.scss';
import React, { Component } from 'react';
import * as actions from '../../actions/bag';


class Desserts extends Component {

    render(props) {
        const showDesserts = this.props.desserts.map((dessert, i)=>{
            return <div className={style.items} key={i}>
                        <h3>{dessert.name}</h3>
                        <h4>{dessert.price} EUR</h4>
                        <img src={Dessert} alt="DessertPic"></img>
                            <div className={style.btn} onClick= {()=> this.props.addToBag(
                                    {name:dessert.name,
                                    price:dessert.price,
                                    amount:1})}>
                                Pirkti
                            </div>
                   </div>
        });
            return (
                <div>
                    <div className={style.itemsBlock}>
                        {showDesserts}
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

export default connect(mapStateToProps, actions)(Desserts);