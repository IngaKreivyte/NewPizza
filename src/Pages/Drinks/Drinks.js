import{connect} from 'react-redux';
import style from '../Drinks/index.module.scss';
import * as actions from '../../actions/drink';

import React, { Component } from 'react';

class Drinks extends Component {

    componentDidMount(){
        this.props.fetchDrink();
    }
    render(props) {

        const showDrinks = this.props.drinks.map((drink, i)=>{
            return <div className={style.items} key={i}>
                        <span> X </span>
                        <h3>{drink.name}</h3>
                        <h4>{drink.price}</h4>
                        <img src={drink.pic} alt="Drinkpic"></img>
                        <div className={style.btn}>Pasirinkti</div>
                   </div>
        });
            return (
                <div className={style.itemsBlock}>
                        {showDrinks}
                    </div>
            )
    }
}

const mapStateToProps=(state)=>{
    return{
        drinks:state.drinks,
    }
}





export default connect(mapStateToProps, actions)(Drinks);