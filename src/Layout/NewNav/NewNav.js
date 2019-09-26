
import style from './index.module.scss';
import pizza from '../../assets/images/dodo.png';
import React, { Component } from 'react';
import{connect} from 'react-redux';


class NewNav extends Component {
    
    render(props) {
        
        return (
            <div className={style.container}>
            <div className={style.leftRow}>
                <img src={pizza} alt="logo"></img>
                <h1>  Pizza Vilnius </h1> 
            </div>
            <div className={style.bagNav}>
                <div className= { this.props.bag[0]? style.bagNavblockActive:style.bagNavblock} >
                    <div className={style.bagNavElement} >1</div>
                    <span>Krepšelis</span>
                </div>
               <div className= { this.props.checkOut.address ? style.bagNavblockActive:style.bagNavblock}>
                    <div className={style.bagNavElement} >2</div>
                    <span>Užsakymas</span>
                </div>
                <div className= { this.props.checkOut.address && !this.props.checkOut.bag ?style.bagNavblockActive:style.bagNavblock}>
                <span>Užsakymas priimtas</span>
                    <div className={[style.bagNavElement, style.beforeLast ].join(' ')}>3</div>
                </div>       
            </div> 
        </div>
        );
    }
}



const mapStateToProps=(state)=>{
    return{
        checkOut:state.checkOut,
        bag:state.bag
    };
};
export default connect(mapStateToProps, null) (NewNav);