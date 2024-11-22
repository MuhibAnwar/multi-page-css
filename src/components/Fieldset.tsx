// src/components/Fieldset.tsx
import React from 'react';
import Link from 'next/link';

const Fieldset = () => {
  return (
    <div id='fieldset'>
    
      <h2 id='line'>What are you looking for?</h2>
      <fieldset>
        <Link href="/result">
          <button  style={{marginLeft:'100px'}}>SSC II Result 2024</button>
        </Link>
      </fieldset>
      <fieldset>
        <Link href="/policy">
          <button style={{marginLeft:'100px'}}>School policy</button>
        </Link>
      </fieldset>
      <fieldset>
        <Link href="/addmission">
          <button style={{marginLeft:'100px'}}>Addmission form</button>
        </Link>
      </fieldset>
      <fieldset>
        <Link href="/about">
          <button style={{marginLeft:'100px'}}>About us</button>
        </Link>
      </fieldset>

    </div>
  );
};

export default Fieldset;
