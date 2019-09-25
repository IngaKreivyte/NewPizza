import React from 'react';
import style from './index.module.scss';
import {Link} from 'react-router-dom';


const DoneOrder = () => {
    return (
            
        <div  className={style.doneOrder}>   
            <h1>UŽSAKYMAS PRIIMTAS :) </h1> 
            <div>
                            <Link className={style.btn1} to ='/'> Grįžti į Meniu</Link>
                        </div>
        </div>
    );
};

export default DoneOrder;