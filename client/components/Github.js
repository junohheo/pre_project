import React from 'react';
import Image from 'next/image';

const Github = () => {
  return (
    <div>
      <button type="signin">
      <Image src="/images/g.png" alt="google" width="15" height="15"/>
       Sign in with Github
       </button>
      <style jsx>
        {`
        button {
          background: black;
          color: white;
          width: 290px;
          padding: 7px 0px 7px 0px;
          cursor: pointer;
          border-radius: 5px;
          border: 0.5px solid black;
        }
        img {
          weight: 10px;
          height: 10px;
        }
        `}
      </style>
    </div>
  );
};

export default Github;

