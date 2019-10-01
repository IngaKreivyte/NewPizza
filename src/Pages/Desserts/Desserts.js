import{connect} from 'react-redux';
import style from '../Desserts/index.module.scss';
import React, { Component } from 'react';
import {fetchDessert} from '../../actions/dessert';
import {addToBag} from '../../actions/bag';
import Spiner from '../../Layout/Spiner/spiner';
import ShowAddedItem from '../../Components/ShowAddedItem/ShowAddedItem';

class Desserts extends Component {
    state={
        addedItem:false,
        name:'',
    }
    componentDidMount(){
        this.props.fetchDessert();
    }
    toggleShowAddedItem = (x) => {
        this.setState({
            name:x,
            addedItem:!this.state.addedItem
            });
        setTimeout(() => {
            this.setState({addedItem: false, name: ''});
        }, 800);
    };
    render(props) {
        const showDesserts = this.props.desserts.map((dessert, i)=>{
            return <div className={style.items} key={i}>
                        <img src={dessert.pic} alt="DessertPic"></img>
                        <h3>{dessert.name}</h3>
                        <p>{dessert.description}</p>
                        <div className={style.price}>{dessert.price} &#8364;</div>
                            <div className={style.btn} onClick= {()=> {this.props.addToBag(
                                    {name:dessert.name,
                                    price:dessert.price,
                                    pic:dessert.pic,
                                    amount:1});
                                    this.toggleShowAddedItem(dessert.name)}}
                                    >
                                Pirkti
                            </div>
                   </div>
        });
            return (
                <div>
                    <div className={style.Block}>
                        <div className={style.itemsBlock}>
                        {!this.props.desserts.length && <Spiner/>}
                        {this.state.addedItem && <ShowAddedItem name={this.state.name} />}
                        <h1>Desertai</h1>
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