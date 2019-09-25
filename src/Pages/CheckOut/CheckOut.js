import style from './index.module.scss';
import{connect} from 'react-redux';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import * as actions from '../../actions/checkOut';

class CheckOut extends Component {
    state={
        redirect:false,
    }
    redirectstatuschange=()=>{
        this.setState({redirect:!this.state.redirect})
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
                        <h3> {item.name}</h3> 
                        <span className={style.amountBlock}>
                                <div className={style.h3}> {item.totalPrice} X  {item.amount} EUR</div> 
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
                            <h3>{this.props.checkOut.user.name}</h3>
                        </div>
                        <div className = {style.userBlock}>
                            <span> Tel.nr.: </span>
                            <h3>{this.props.checkOut.user.phone}</h3>
                        </div>
                        {this.props.checkOut.adresspickUp && 
                            <div className={style.delivery}> 
                                <span>Delivery at:</span> 
                                <h3>{this.props.checkOut.adresspickUp}</h3>  
                            </div>
                        }
                        {this.props.checkOut.address &&
                            <div className={style.delivery}> 
                                <span>Gatvė:</span>  <h3>{this.props.checkOut.address.gatve}</h3>
                                <span>Namas:</span>  <h3>{this.props.checkOut.address.namas}</h3>
                               { this.props.checkOut.address.butas && <span>Butas:</span> && <h3>{this.props.checkOut.address.butas}</h3>}
                               {this.props.checkOut.address.komentaras && <div className={style.deliveryblock}>
                                    <span>Komentaras:</span> <span>{this.props.checkOut.address.komentaras}</span>
                                </div>
                               }
                            </div>
                        }
                    </div>
                    <div className={style.toTheleftSide}>
                        <h2>  Jūsų užsakymas: </h2>
                        {bagItems}
                        <h3> viso: {totalAmount} </h3>
                    </div>
                </div>
                <button className={style.btn} onClick={()=>{this.props.addOrder(this.props.checkOut); this.redirectstatuschange();} }> 
                   Patvirtinti užsakymą 
                
                <div className={style.birdcontainer}>
  <div className={style.bird}></div>
</div>
</button>   
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