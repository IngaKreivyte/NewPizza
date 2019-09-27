import React, { Component } from 'react';
import{connect} from 'react-redux';
import style from './index.module.scss';
import Modal from '../../Components/Modal/Modal';
import * as actions from '../../actions/pizzas';
import Spiner from '../../Layout/Spiner/spiner';


class Pizzas extends Component {
    state={
        modal:false,
        pizza: '',
        pic:'https://dodopizza-a.akamaihd.net/site-static/dist/269b833ebb31d7e40775.svg',
    }
    componentDidMount(){
        this.props.fetchPizzas();
    }

    toggleModal=(pizza) =>{
        
        this.setState({
            modal:!this.state.modal,
            pizza:pizza,
            pic:'https://dodopizza-a.akamaihd.net/site-static/dist/269b833ebb31d7e40775.svg',
        });
    };
    showPic=(pic)=>{
        this.setState({pic:pic})
    };
     
    render (props) {
        const showItems = this.props.pizzas.map((pizza, i)=>{
            return <div className={style.items} key={i}>
                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        {pizza.kainos.filter(pizza=>pizza.size ==='small').map((pic,i)=>
                        <img  key ={i} src={pic.pic} alt="pic"/>)}
                        <div className={style.priceContainer}>{pizza.kainos.filter(pizza=>pizza.size==='small').map((kaina, i) =>
                             <div className={style.price} key={i}>
                                 Nuo {kaina.price} &#8364;
                             </div>)}
                                
                        <div className={style.btn} data-id={i} onClick={()=>this.toggleModal(pizza)}> Pasirinkti </div>
                        </div>
                    
                    </div>     
        })
            return (
                <div>
                    <Modal pizzas={this.props.pizzas}
                           toggleModal={this.toggleModal}
                           pic={this.state.pic}
                           showPic={this.showPic}
                           show={this.state.modal}
                           pizza={this.state.pizza}
                           sizeName={this.sizeName}
                           showPrice={this.showPrice}
                           />
                    <div className={style.Block}>
                        <div className={style.itemsBlock}>
                        {!this.props.pizzas.length && <Spiner/>}
                            <h1>Picos</h1>
                            {showItems}
                        </div>
                    </div>
                </div>
            )   
    }
}

const mapStateToProps=(state)=>{
    return{
        pizzas:state.pizzas,
        bag:state.bag
    }
}
export default connect(mapStateToProps, actions)(Pizzas);