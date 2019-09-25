import React from 'react';
import spinner from '../../assets/images/5.gif';

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        alt="while loading"
        style={{ width: '100px', height: 'auto', display: 'flex', margin:'200px auto', }}
      />
    </div>
  );
};

export default Spinner;