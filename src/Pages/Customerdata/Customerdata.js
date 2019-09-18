import React, { Component } from 'react';
import style from './index.module.scss';
import Pristatymas from '../Pristatymas/Pristatymas';
import Atsiemimas from '../Atsiemimas/CompleteOrder';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';

class Customerdata extends Component {
    state={
        active:true,
    }
        active=()=>{
                this.setState({active:!this.state.active})
        }


        

    render() {
        if(!this.props.profile.email) return <Redirect to='login'/>
         
            if(this.state.redirect){
                    return <Redirect to ='/checkOut'/>
            }
        return (
            <React.Fragment>
                <div  className={style.backdrop}/>
                <div className={style.modal}>
                   <span ><Link to ='/bag' > X </Link></span>
                    <h2>Kur pristatyti?</h2>
                    <div className={style.Block}>
                        <div onClick={this.active} className={style.blockItem}>
                        <h5>Pristatymas</h5>
                        </div>
                        <div  onClick={this.active} className={style.blockItem}>
                        <h5>Išsinešimui</h5>
                        </div>
                        {this.props.profile.email && this.state.active &&<Pristatymas atsiemimas={this.state.atsiemimas} />}
                        {!this.state.active && <Atsiemimas 
                        pasirinkimas ={this.state.pasirinkimas}/>}
                    </div>
                        
                </div>
                    
            </React.Fragment>
            
        );
    }
}

const mapStateToProps=state=>{
    return {
        bag:state.bag,
        profile:state.profile,
    }
    
}

export default connect (mapStateToProps) (Customerdata);