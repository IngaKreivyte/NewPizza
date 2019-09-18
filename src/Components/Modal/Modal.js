
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//proptypes - tai papildymas i komponenta, kuriame isvardysime kokiu props reikes ir jie yra butini!!!
import style from './index.module.scss';
import{connect} from 'react-redux';
import * as actions from '../../actions/bag';

    class Modal extends Component {
        state={
            size:[],
            price:[],
            name:[],
            // pic:'https://dodopizza-a.akamaihd.net/site-static/dist/269b833ebb31d7e40775.svg',
        };
       
        showSize =(size)=>{
            this.setState({size:size})
        }
        showPrice =(price)=>{
            this.setState({price:price})
        }
        showName=(name)=>{
           this.setState({name:name})
        }
        

        render() {
            if(!this.props.show) return null;
                return (
                    <React.Fragment>
                    <div onClick={this.props.toggleModal} className={style.backdrop}/>
                    <div className={style.modal}>
                        <div className={style.selectedItem}>
                            <h3> {this.props.pizza.name} </h3> 
                            <span> Pasirinkti dydį: </span>
                            <div  className={style.sizes}>{this.props.pizza.kainos.map((kaina, i) =>
                                <div  key = {i} className={style.selectedSize} onClick={()=>{
                                        this.showSize(kaina.size);
                                        this.showPrice(kaina.price);
                                        this.showName(this.props.pizza.name);
                                        this.props.showPic(kaina.pic);
                                }}> {kaina.size} 
                                </div>)}
                            </div>
                                <div className={style.block} >
                                     <h3>{this.state.price}</h3> 
                                     <h3> EUR</h3>
                                </div>
                               { this.state.price>0 &&  <div onClick= {()=> this.props.addToBag( {
                                   name:this.state.name, 
                                   pic:this.props.pic, 
                                   size:this.state.size,  
                                   amount:1, 
                                   price:this.state.price})
                                }
                                    className={style.btn}>
                                   Pirkti  
                                </div>}
                                
                            </div>
                            <div className={style.imgBlock}>
                                <img  src={this.props.pic} alt='pic'/>
                            </div>
                         </div>
                         
                    </React.Fragment>
                );
    }
}


const mapStateToProps=(state)=>{
    return{
        pizzas:state.pizzas,
        bag:state.bag,
    }
}


Modal.propTypes = {
    toggleModal:PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions) (Modal);




