import React from 'react';
import Image from 'next/image';

const Result = () => {
  return (
    <div>
      <div id='image'>
      <Image src="/a1.png" alt="Result Image" width={500} height={300} layout="responsive" />
      <Image src="/a.png" alt="Result Image" width={500} height={300} layout="responsive" />
      <Image src="/a2.png" alt="Result Image" width={500} height={300} layout="responsive" />
    </div>
    </div>
  );
};

export default Result;
