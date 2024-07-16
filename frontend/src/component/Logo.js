import React from "react";
import logoImg from "../assest/logo.png"

const Logo = ({w, h}) => {
  return (
    <img src={logoImg}  width={w} height={h} alt="logo" ></img>
  );
};

export default Logo;
