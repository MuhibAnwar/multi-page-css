// src/components/Fieldset.tsx
import React from 'react';
import Link from 'next/link';

const Fieldset = () => {
  return (
    <div id='fieldset'>
    
      <h2 id='line'>What are you looking for?</h2>
      <fieldset>
        <Link href="/result">
          <button  style={{marginLeft:'300px'}}>SSC II Result 2024</button>
        </Link>
      </fieldset>
      <fieldset>
        <Link href="/policy">
          <button style={{marginLeft:'300px'}}>School policy</button>
        </Link>
      </fieldset>
      <fieldset>
        <Link href="/addmission">
          <button style={{marginLeft:'300px'}}>Addmission form</button>
        </Link>
      </fieldset>
      <fieldset>
        <Link href="/about">
          <button style={{marginLeft:'300px'}}>About us</button>
        </Link>
      </fieldset>

    </div>
  );
};

export default Fieldset;
