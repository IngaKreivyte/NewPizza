import React, { Component } from 'react';
import style from './index.module.scss';
import {connect} from 'react-redux';
import * as actions from '../../actions/atsiemimas';
import {Link} from 'react-router-dom';

class Atsiemimas extends Component {
    state={
        pickUp:'',
        error:'',
}

choosePickUp=(e)=>{
    this.setState({
        pickUp:e.target.value
    })
}
    render() {        
        return (

            <React.Fragment>
                <div  className={style.addressBlock}>
                    <form >
                        <div className={style.firstForm}>
                        <label htmlFor='adress1'> Antakalnio g. 41</label> 
                        <input type="radio" 
                                id='adress1' 
                                name='adress' 
                                value= 'Antakalnio g. 41'
                                onChange={this.choosePickUp} />
                        <div>
                        <span>Antakalnio g., 41</span> 
                        <span> Pr - Kt: 09:00 — 23:00 </span>
                        <span> Pn - Š: 09:00 — 00:00</span>
                        <span> S : 09:00 — 23:00</span>
                        </div>
                        </div>
                        <div className={style.firstForm}>
                        <label htmlFor='adress2'> Savanorių pr. 1, Helios City</label>
                        <input type="radio"
                                id='adress2' 
                                name='adress' 
                                value='Savanorių pr. 1, Helios City'
                                onChange={this.choosePickUp} />
                        <div>
                        <span>Savanorių pr. 1</span> 
                        <span> Pr - Kt: 09:00 — 23:00 </span>
                        <span> Pn - Š: 09:00 — 00:00</span>
                        <span> S : 09:00 — 23:00</span>
                        </div>
                        </div>
                        
                    {this.state.error !=='' && <h4 className={style.error}> {this.state.error} </h4>}
                    {this.state.pickUp!== '' && <Link to ='/checkOut' >  <button className={style.btn} 
                    onClick={()=>{this.props.showDeliveryStatus(this.state.pickUp)}}> Pasirinkti</button> </Link>
                   }
                    </form>    
                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps=state=>{
    return {
        checkOut:state.checkOut,
    }
    
}


export default  connect (mapStateToProps, actions) (Atsiemimas);