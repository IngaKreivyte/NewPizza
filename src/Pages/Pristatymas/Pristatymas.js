import React, { Component } from 'react';
import style from './index.module.scss';
import * as actions from '../../actions/adress';
import{connect} from 'react-redux';
import {Redirect} from 'react-router-dom';


class Pristatymas extends Component {
       state={
                errors:'',
                gatve:'',
                namas :'',
                butas:'',
                duru_kodas:'',
                komentaras:'',
                redirect:false,
       }
        onInputChange=(e)=>{
        
            this.setState({[e.target.name]:e.target.value})
            
        }
       onFormSubmit =(e)=>{
               e.preventDefault();
               const errors = {};
               if(!this.state.gatve) errors.gatve ='įrašykite gatvės pavadinimą';
               if(!this.state.namas) errors.namas ='įrašykite namo nr';
               if(Object.keys(errors).length!==0){
                       return this.setState({errors})
               }
               this.setState({
                       errors:{}, redirect:true
               })
       }
     
    render() {        
        if( this.state.redirect) return <Redirect to='/checkOut'/>
        return (
            <div>
                <form onSubmit ={this.onFormSubmit} >
                        {this.state.errors.gatve && <p>{this.state.errors.gatve}</p>}
                <input type="text"
                        size="50"
                        name='gatve'
                        placeholder='Gatve'
                        onChange={this.onInputChange}
                        value={this.state.gatve}/>
                        {this.state.errors.namas && <p>{this.state.errors.namas}</p>}
                <input type="text"
                        value={this.state.namas}
                        onChange={this.onInputChange}
                        name='namas'
                        size="13"
                        placeholder='namas'/>
                <input type="text"
                        onChange={this.onInputChange}
                        size="13"
                        name='butas'
                        value={this.state.butas}
                        placeholder='butas'/>
                <input type="text"
                        size="13"
                        onChange={this.onInputChange}
                        value={this.state.duru_kodas}
                        name='duru_kodas'
                        placeholder='durų_kodas'/>
                <input type="text"
                        value={this.state.komentaras}
                        size="78"
                        onChange={this.onInputChange}
                        name='komentaras'
                        placeholder='komentaras'/> <button className={style.btn} 
                    onClick={()=>{this.props.showAdress(this.state)}}> Patvirtinti adresą </button>
            </form>
            
            </div>
        );
    }
}
const mapStateToProps = state => {
        return{
            auth:state.auth,
            profile:state.profile,
            checkOut:state.checkOut,
        }
};


export default connect(mapStateToProps, actions) (Pristatymas);