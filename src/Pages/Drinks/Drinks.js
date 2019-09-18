import{connect} from 'react-redux';
import Drinks from '../../assets/images/drinks.jpg';
import React from 'react';
import style from '../Drinks/index.module.scss';

const Desserts = (props) => {
    const showDrinks = props.drinks.map((drink, i)=>{
        return <div className={style.items} key={i}>
                    <span> X </span>
                    <h3>{drink.name}</h3>
                    <h4>{drink.price}</h4>
                    <img src={Drinks} alt="DessertPic"></img>
                    <div className={style.btn}>Pasirinkti</div>
               </div>
    });
        return (
            <div className={style.itemsBlock}>
                    {showDrinks}
                </div>
        )
}
const mapStateToProps=(state)=>{
    return{
        drinks:state.drinks
    }
};

export default connect(mapStateToProps)(Desserts);