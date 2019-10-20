import React, { Component } from 'react';
import{connect} from 'react-redux';
import style from './index.module.scss';
import * as actions from '../../actions/orders';


class Orders extends Component {
    state={
        isActive: true,
        statusActive:'Active',
        statusInactive:'Inactive',
        status:'Active',
    }
    changestatusActive=()=>{
        // this.setState({order:order,isActive:!this.state.isActive})
        if(this.state.isActive){this.setState({status:this.state.statusActive})
        } else {this.setState({status:this.state.statusInactive})   
    }
}
    componentDidMount(){
        this.props.fetchOrders();
    }
    
    render(props) {
        const ordersList = this.props.orders.map((order,i)=>{

            return (
                <div key={i} className={style.items}>
                    <div id={i} onClick={(order)=>{this.setState({order:order,isActive:!this.state.isActive}); this.changestatusActive()}} className={style.active} style={{backgroundColor:this.state.status==='Active' ? '':'red'}}>{this.state.status}</div>
                    {order.bag.map((item,i)=>
                            <div className={style.orderBlock} key={i}>
                                <h2><span>Prekė: </span>{item.name}</h2>
                                <div> <span>Kiekis: </span>{item.amount}</div>
                                <div><span>Kaina: </span> {item.price}</div>
                                 {item.size &&  <div> <span>Dydis: </span>{item.size}</div>}
                                <div> <span>Viso suma: </span>{item.totalPrice}</div>
                            </div>
                    )}
                    <div><span>Kliento vardas: </span>{order.user.name}</div>
                    <div><span>Kliento tel. nr.: </span>{order.user.phone}</div>
                    {order.address.adresspickUp &&  <div><span>Atsiėmimui, adresu: </span> {order.address.adresspickUp} </div>}
                    {!order.address.adresspickUp &&  <div><span>Gatvės nr.: </span> {order.address.gatve}</div>}
                    {!order.address.adresspickUp &&  <div> <span>Namo nr.: </span>{order.address.namas}</div>}
                    {order.address.butas &&  <div> <span>Buto nr.: </span>{order.address.butas}</div>}
                    {order.address.duru_kodas &&  <div> <span>Durų kodas : </span>{order.address.duru_kodas}</div>}
                    {order.address.komentaras  && <div> <span>komentaras: </span>{order.address.komentaras}</div>}
                    <div>{order.createdAt}</div>
                </div>
            )
        })
      
        return(
            <div className={style.container}>
                <h1>Užsakymai :</h1>
                {ordersList}
            </div>
           
        )
    }
}


const mapStateToProps=(state)=>{
    return{
        orders:state.orders,
    }
}
export default connect(mapStateToProps, actions)(Orders);
