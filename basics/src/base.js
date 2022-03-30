import { render } from '@testing-library/react';
import React from 'react';

const Base = () => {
    let likes = 0;

  function increment() {
    likes +=1;
    console.log(likes)
  }

  function decrement() {
    likes -=1;
    console.log(likes);
  }
    return (
        
        <button onClick={increment}></button>
    );
}

export default Base;