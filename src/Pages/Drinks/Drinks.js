import{connect} from 'react-redux';
import style from './index.module.scss';
import {fetchDrink} from '../../actions/drink';
import {addToBag} from '../../actions/bag';
import Spiner from '../../Layout/Spiner/spiner';
import ShowAddedItem from '../../Components/ShowAddedItem/ShowAddedItem';
import React, { Component } from 'react';

class Drinks extends Component {
    state={
        addedItem:false,
        name:'',
    }

    componentDidMount(){
        this.props.fetchDrink();
    }
    toggleShowAddedItem = (x) => {
        this.setState({
            name:x,
            addedItem:!this.state.addedItem
            });
        setTimeout(() => {
            this.setState({addedItem: false, name: ''});
        }, 1000);
    };
    render(props) {

        const showDrinks = this.props.drinks.map((drink, i)=>{
            return <div className={style.items} key={i}>
                        <h3>{drink.name}</h3>
                        <img src={drink.pic} alt="Drinkpic"></img>
                        <div className={style.price}>{drink.price} &#8364;</div>
                        <div className={style.btn} onClick= {()=>{ this.props.addToBag(
                                    {name:drink.name,
                                    price:drink.price,
                                    pic:drink.pic,
                                    amount:1
                                    }) ;
                                    this.toggleShowAddedItem(drink.name)}}>Į krepšelį</div>
                                    
                   </div>
        });
            return (
                <div className={style.Block}>
                    <div className={style.itemsBlock}>
                        {!this.props.drinks.length && <Spiner/>}
                        {this.state.addedItem && <ShowAddedItem name={this.state.name} />}
                        <h1>Gėrimai</h1>
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