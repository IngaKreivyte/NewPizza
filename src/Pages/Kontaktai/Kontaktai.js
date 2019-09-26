import React, { Component } from 'react';
import Map from '../Map/Map';
import style from './index.module.scss';


 

class Kontaktai extends Component {
    render() {
        return (
            <div className={style.container}>
                Mes esame čia :)
                 <Map/>
            </div>
        );
    }
}

export default Kontaktai;

  