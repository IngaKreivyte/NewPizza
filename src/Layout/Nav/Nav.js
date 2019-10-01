import style from './index.module.scss';
import pizza from '../../assets/images/dodo.png';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import * as actions from '../../actions/auth';
import ButtonHover from '../ButtonHover/ButtonHover';
import {withRouter} from 'react-router-dom';
import { HashLink as NavLink } from 'react-router-hash-link';


class Nav extends Component {
  state={
    logout:false,
    
  }

  render() {
    
    const itemsInBag= this.props.bag.reduce((total, price) => total + price.amount, 0)
    return (
       <React.Fragment>
      <nav> 
          <div className={style.row}>
            <img src={pizza} alt="logo"></img>
            <NavLink className={style.link}  smooth to='#/' exact='true'> Home </NavLink>
            <NavLink className={style.link} smooth to='/#pizzas'> Picos </NavLink>
            <NavLink className={style.link} smooth to='/#desertai'> Desertai </NavLink>
            <NavLink className={style.link} smooth to='/#gerimai'> Gėrimai </NavLink>
            {/* <NavLink className={style.link} to='/kontaktai'> Kontaktai </NavLink> */}
            <NavLink className={[style.link, style.btn, style.bagbtn ].join(' ')} to='/bag' >Krepšelis | {itemsInBag} </NavLink>
           <div className={style.showBag}><ButtonHover/></div>
        
        </div>
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