import Nav from '../Nav/Nav';
import Sticky from '@wicked_query/react-sticky';
import style from './index.module.scss';
import pizza from '../../assets/images/dodo.png';


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
                    <img src={pizza} alt="logo"></img>
                    <h1> Dodo Pizza </h1> 
                    <p>Skambinkite: +370 6** ** ***</p>
                </div>
            </div>
            <Sticky  subscribe={(props) => (this.setState({ offset: props.height}))}>
            <Nav/>
            </Sticky>
            </React.Fragment>
        );
    }
}

export default Header;