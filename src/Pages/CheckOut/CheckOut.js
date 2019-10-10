import style from './index.module.scss';
import{connect} from 'react-redux';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import * as actions from '../../actions/checkOut';
import {Link} from 'react-router-dom';

class CheckOut extends Component {
    state={
        redirect:false,
        name:this.props.profile.name,
        number:this.props.checkOut.user.phone,
    }
    redirectstatuschange=()=>{
        this.setState({redirect:!this.state.redirect})
    }
    onInputChange=(e)=>{   
        this.setState({[e.target.name]:e.target.value})
    }
    onFormSubmit =(e)=>{
        e.preventDefault()
    }
    

    render() {
        if(this.state.redirect){
            return <Redirect to ='/DoneOrder'/>}
        if(this.props.checkOut.bag){
        const totalAmount = this.props.checkOut.bag.reduce((total, price) => total + price.totalPrice, 0)
        const bagItems = this.props.checkOut.bag.map((item,i)=>{
            return(
                
                    <div key={i} className={style.item }>
                         <img src={item.pic} alt='pic'/>
                        <h3> {item.name}({item.size})</h3> 
                        <span className={style.amountBlock}>
                                <div className={style.h3}> {item.totalPrice} X  {item.amount} &#8364;</div> 
                        </span>
                    </div>
                   
            ) 
        })

    
        return (
            <div className={style.container}>
                <div className={style.bothSides}>
                    <div className={style.toTheRightSide}>
                        <div className = {style.userBlock}>
                            <span> Vardas: </span>
                            <div className={style.nameBlock}>
                                <form onSubmit ={this.onFormSubmit}>
                            <input onChange={this.onInputChange}
                                type='text'
                                name='name'
                                placeholder='name'
                                value={this.state.name} />
                                <button onClick={()=>{this.props.changeName(this.state)}}>išsaugoti</button>
                                </form>
                            </div>
                        </div>
                        <div className = {style.userBlock}>
                            <span> Tel.nr.: </span>
                            <div className={style.nameBlock}>
                            <form onSubmit ={this.onFormSubmit}>
                            <input 
                                type='text' 
                                name='number' 
                                value={this.state.number}
                                placeholder='number'
                                onChange={this.onInputChange} />
                                <button  onClick={()=>{this.props.changeName(this.state)}}>išsaugoti</button>
                                </form>
                            </div>

                        </div>
                        { this.props.checkOut.address.adresspickUp && 
                            <div className={style.delivery}> 
                                <span>Pristatyti:</span> 
                                    <h3>{this.props.checkOut.address.adresspickUp}</h3>  
                            </div> }
                        { !this.props.checkOut.address.adresspickUp && this.props.checkOut.address &&
                            <div className={style.delivery}> 
                                <span>Gatvė:</span>  <h3>{this.props.checkOut.address.gatve}</h3>
                                <span>Namas:</span>  <h3>{this.props.checkOut.address.namas}</h3>
                            { this.props.checkOut.address.butas &&  
                            <div className={style.delivery}> 
                               <span>Butas:</span> 
                               <h3>{this.props.checkOut.address.butas}</h3>
                            </div>}
                               {this.props.checkOut.address.komentaras &&
                                 <div className={style.deliveryblock}>
                                    <span>Komentaras:</span> 
                                    <span>{this.props.checkOut.address.komentaras}</span>
                                </div> }
                            </div> }
                    </div>
                    <div className={style.toTheleftSide}>
                        <h2>  Jūsų užsakymas: </h2>
                        {bagItems}
                        <h3 className={style.total}> viso: {totalAmount} &#8364; </h3>
                    </div>
                </div>
                <button className={style.btn} onClick={()=>{this.props.addOrder(this.props.checkOut); this.redirectstatuschange();} }> 
                   Patvirtinti užsakymą </button>   
<Link className={style.btn} to ='/customerData' > Grįžti </Link>
            </div>

        );
    } else {
        return null;
    }
}
}


 const mapStateToProps=state=>{
    return{
        profile:state.profile,
        checkOut:state.checkOut,
    }
}

export default connect (mapStateToProps, actions)(CheckOut);