import React from 'react';
import spinner from '../../assets/images/5.gif';
import style from './index.module.scss'

const Spinner = () => {
  return (
    <div className={style.Block}>
      <img
        src={spinner}
        alt="while loading"
        style={{ width: '100px', height: 'auto', display: 'flex', }}
      />
    </div>
  );
};

export default Spinner;