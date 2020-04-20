import React from "react";

const Nav = () => {
  return (
    <div style={nav}>
      <h1>Come Climb With Us!</h1>
      <p>Contact Us</p>
    </div>
  );
};

const nav = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  marginLeft: "50px",
  marginRight: "50px",
};

export default Nav;
