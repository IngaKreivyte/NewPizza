import Nav from '../Nav/Nav';
import Sticky from '@wicked_query/react-sticky';
import style from './index.module.scss';
import pizza from '../../assets/images/dodo.png';
import {withRouter} from 'react-router-dom';
import * as actions from '../../actions/auth';
import {NavLink} from "react-router-dom";
import { connect } from 'react-redux';


import React, { Component } from 'react';

class Header extends Component {
    state={
        offset: 0,
    }
    render() {
        return (
            <React.Fragment>
            <div className={style.headerTop}>
                <div className={style.headerTopBlock}>
                <div className={style.scroll} id='/'/>
                    <img src={pizza} alt="logo"></img>
                    <h1>  Pizza Vilnius </h1> 
                    <p> Pristatymas per 60 minučių arba pica nemokamai. Skambutis telefonu 8 6** ** ***</p>
                </div>
                <div className={style.auth}>
                   {!this.props.profile.name && <NavLink className={[style.link, style.btn ].join(' ')} to='/login' > Prisijungti! </NavLink>}
                    {this.props.profile.name && <span onClick={()=>this.props.logOut(this.props.history)} 
                    className={[style.link, style.btn ].join(' ')}>Log Out</span>}
                </div>
               {this.props.profile.name && <div className={style.profileName}>
                    <div className={style.welcomeBack}>Sveiki, atvykę,</div>
                    <div className={style.name}>{this.props.profile.name} !</div> 
                </div>}
            </div>
            <Sticky  subscribe={(props) => (this.setState({ offset: props.height}))}>
            <Nav/>
            </Sticky>
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

export default withRouter ( connect (mapStateToProps, actions ) (Header));
