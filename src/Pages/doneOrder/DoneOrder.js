import React from 'react';
import style from './index.module.scss';
import {Link} from 'react-router-dom';
import{connect} from 'react-redux';
import * as actions from '../../actions/checkOut';


const DoneOrder = (props) => {
    return (
            
        <div  className={style.doneOrder}>   
            <h1> UŽSAKYMAS PRIIMTAS :) </h1> 
            <div>
                            <Link   className={style.btn1} to ='/'> 
                            <div onClick={()=>{props.cleanOrderData(props.checkOut)} }> Grįžti į Meniu</div>
                            </Link>
                        </div>
        </div>
    );
};


const mapStateToProps=state=>{
    return{
        profile:state.profile,
        checkOut:state.checkOut,
    }
}
export default connect (mapStateToProps, actions)(DoneOrder);