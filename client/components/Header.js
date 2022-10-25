import React from "react";
import Image from 'next/image';

const Header = () => {
  return <div className="header">
    <Image src="/images/s.png" alt="stackoverflow" width="150" height="30"/>
    <input type="text" placeholder="🔍 Search..." onclick="this.value='';"  />
    <button type="login">Log in</button>
    <button type="signup">Sign up</button>
    <style jsx>
      {`
      button {
        cursor: pointer;
      }
      input {
        width: 500px;
        height: 16px;
        font-size:10px;
      }
      `}
    </style>
  </div>;
};

export default Header;
