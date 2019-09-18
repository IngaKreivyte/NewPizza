import {NavLink} from "react-router-dom";
import style from './index.module.scss';
import pizza from '../../assets/images/dodo.png';
import { connect } from 'react-redux';
import Bag from '../../Pages/Bag/Bag';
import React, { Component } from 'react';
import * as actions from '../../actions/auth';
import {withRouter} from 'react-router-dom';
class Nav extends Component {
  state={
    // bagopen:false,
    logout:false,
    
  }
//   changeBagStatus=()=>{
//     this.setState({
//         bagopen:!this.state.bagopen,
//     })
// }

  render(props) {
    const itemsInBag= this.props.bag.reduce((total, price) => total + price.amount, 0)
    return (
       
       <React.Fragment>
         
      <nav> 
        {/* { this.state.bagopen  &&  */}
        {/* <div className={style.bagNav}>
          <div className={style.bagNavblock}>
              <div className={style.bagNavElement} >1</div>
              <span>Krepšelis</span>
          </div>
          <div className={style.bagNavblock}>
              <div className={style.bagNavElement}>2</div>
              <span>Užsakymas</span>
          </div>
          <div className={style.bagNavblock}>
          <span>Užsakymas priimtas</span>
              <div className={[style.bagNavElement, style.beforeLast ].join(' ')}>3</div>
        </div>
      
              
        </div> */}
        {/* } */}

        {/* {!this.state.bagopen  && */}
          <div>
            <img src={pizza} alt="logo"></img>
            <NavLink className={style.link} activeClassName={style.active} to='/' exact> Home </NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/pizzas'> Picos </NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/desertai'> Desertai </NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/gerimai'> Gėrimai </NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/užkandziai'> Užkandžiai </NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/akcijos'> akcijos </NavLink>
            <NavLink className={style.link} activeClassName={style.active} to='/kontaktai'> Kontaktai </NavLink>
            <NavLink className={[style.link, style.rightSide, style.bagbtn ].join(' ')} to='/bag' 
            // onClick={()=>this.changeBagStatus()}
            >Krepšelis | {itemsInBag} </NavLink>
        <div className={style.showBag}> <Bag hideButton/> </div> 
        </div>
        {/* } */}
       
        <NavLink className={[style.link, style.login ].join(' ')} activeClassName={style.active} to='/login' > Prisijungti! </NavLink>
        <span onClick={()=>this.props.logOut(this.props.history)} className={style.logOut}>Log Out</span>
       
       <h1>{this.props.profile.name}</h1>      
      </nav>  
      
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
    return {
      bag:state.bag,
      profile:state.profile,
    };
  };

export default withRouter ( connect (mapStateToProps, actions ) (Nav));