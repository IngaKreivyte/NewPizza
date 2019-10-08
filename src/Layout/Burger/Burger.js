
import pizza from '../../assets/images/dodo.png';
import React, { Component } from 'react';
import { HashLink as NavLink } from 'react-router-hash-link';
import style from './index.module.scss';

class Burger extends Component {
  state={
    dropdown:false,
  }
  toggleDropdown = () => {
    this.setState({
     dropdown:!this.state.dropdown,
    })
  }
  render() {
    return (
            <div className= {this.state.dropdown ? style.active:style.dropdown}>
            <div className={style.selected} onClick={()=>{this.toggleDropdown()}} >
            <img src={pizza} alt="logo" ></img>
            <span>MENIU</span>
            <div className={style.selector}> </div>
            </div>
            <div className="options">
              <NavLink className={style.options}  smooth to='#/' exact='true'> Naujienos </NavLink>
              <NavLink className={style.options} smooth to='/#pizzas'> Picos </NavLink>
              <NavLink className={style.options} smooth to='/#desertai' > Desertai </NavLink>
              <NavLink className={style.options} smooth to='/#gerimai' > Gėrimai </NavLink>
            </div>
        </div>

    
    );
  }
}

export default Burger;