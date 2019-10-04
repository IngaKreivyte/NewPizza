
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//proptypes - tai papildymas i komponenta, kuriame isvardysime kokiu props reikes ir jie yra butini!!!
import style from './index.module.scss';
import{connect} from 'react-redux';
import * as actions from '../../actions/bag';
import ShowAddedItem from '../../Components/ShowAddedItem/ShowAddedItem';

    class Modal extends Component {
        state={
            size:'small',
            price:'',
            name:[],
            addedItem:false,
            changes:true,
        };
        toggleShowAddedItem = (x) => {
            this.setState({
                name:x,
                addedItem:!this.state.addedItem
                });
            setTimeout(() => {
                this.setState({addedItem: false,});
            }, 800);
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
         if(this.state.size==='small') var width = '200px';
         if(this.state.size==='medium') width = '300px'; 
         if(this.state.size==='large') width = '400px' ;
        
         
                return (
                    <React.Fragment>
                          
                    <div onClick={this.props.toggleModal} className={style.backdrop}/>
                    <div className={style.modal}>
                        
                        <div className={style.selectedItem}>
                            <h3> {this.props.pizza.name} </h3> 
                            <p>{this.props.pizza.description}</p>
                            <div  className={style.sizes}>{this.props.pizza.kainos.map((kaina, i) =>
                                <div  key = {i} className={this.state.size !== kaina.size ?  style.selectSize: style.selectedSize }  onClick={()=>{
                                        this.showSize(kaina.size);
                                        this.showPrice(kaina.price);
                                        this.showName(this.props.pizza.name);
                                        this.props.showPic(kaina.pic);
                                }}> {kaina.size} 
                                </div>)}
                                
                               
                            </div>
                                <div className={style.block} >
                                     <h3>{this.state.price}</h3> 
                                    { this.state.price!=='' && <h3> EUR</h3>}
                                    {this.state.price!=='' && this.state.name!=='' && <div onClick= {()=>{ this.props.addToBag( {
                                        name:this.state.name, 
                                        pic:this.props.pic, 
                                        size:this.state.size,  
                                        amount:1, 
                                        price:this.state.price});
                                        this.toggleShowAddedItem(this.state.name)}}className={style.btn}> Pirkti
                                    </div>}
                                { this.state.price==='' && <div className={style.btn}>Pirkti</div>}
                                
                                </div>
                                
                                
                            </div>
                           
                            {this.state.addedItem && <ShowAddedItem name={this.state.name} changes={this.state.changes}/>}
                            <div className={style.imgBlock}>
                                <img style={{width}} src={this.props.pic} alt='pic'/>
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




