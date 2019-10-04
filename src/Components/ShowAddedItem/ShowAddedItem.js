import style from './index.module.scss';
import React, { Component } from 'react';

class ShowAddedItem extends Component {
   
    render() {
        if(this.props.changes) var top = '70%';
        return (
            <span className={style.showAddedItem} style={{top}}>
            Pridėta į krepšelį: {this.props.name} 
            </span>
        );
    }
}

export default ShowAddedItem;