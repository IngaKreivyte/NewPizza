
import pizza from '../../assets/images/dodo.png';
import React, { Component } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import style from './index.module.scss';
import { connect } from 'react-redux';

class Burger extends Component {
  state={
    dropdown:false,
    nameBurger:'Meniu',
  }
  toggleDropdown = () => {
    this.setState({
     dropdown:!this.state.dropdown,
    })
  }
  render() {
    const itemsInBag= this.props.bag.reduce((total, price) => total + price.amount, 0)
    return (
      <div className= {this.state.dropdown ? style.active:style.dropdown}>
        <div className={style.selected} onClick={()=>{this.toggleDropdown()}} >
          <img src={pizza} alt="logo" ></img>
          <span>{this.state.nameBurger}  <NavLink className={style.link} to='/bag' >Krepšelis | {itemsInBag} </NavLink></span>
          <div className={style.selector}> </div>
        </div>
          <div className={style.optionsBlock}>
            <NavLink onClick={()=>{ this.toggleDropdown(); this.setState({nameBurger:'Naujienos'})}} className={style.options} smooth to='#/' exact='true'> Naujienos </NavLink>
            <NavLink onClick={()=>{ this.toggleDropdown(); this.setState({nameBurger:'Picos'})}} className={style.options} smooth to='/#pizzas'> Picos </NavLink>
            <NavLink  onClick={()=>{this.toggleDropdown(); this.setState({nameBurger:'Desertai'})}} className={style.options} smooth to='/#desertai' > Desertai </NavLink>
            <NavLink onClick={()=>{this.toggleDropdown(); this.setState({nameBurger:'Gėrimai'})}}  className={style.options} smooth to='/#gerimai' > Gėrimai </NavLink>
            <NavLink onClick={()=>{this.toggleDropdown(); this.setState({nameBurger:'Orders'})}}  className={style.options} smooth to='/#orders' > Užsakymai </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bag:state.bag,
  };
};

export default connect (mapStateToProps, null )(Burger)