import React, { useState } from "react";

const ClimbCard = ({ site, updateClimb }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      style={isHover ? cardHover : card}
      onMouseOver={() => setIsHover(true)}
      onMouseOut={() => setIsHover(false)}
    >
      <button onClick={() => updateClimb(site)}>Get Details</button>
      <h3>{site.name}</h3>
      <img style={image} src={site.image}></img>
    </div>
  );
};

const card = {
  width: "250px",
  height: "250px",
  border: "2px solid black",
  overflow: "hidden",
  padding: "20px",
  margin: "20px",
  textAlign: "center",
  boxShadow: "4px 4px darkgrey",
  borderRadius: "10px",
};

const cardHover = {
  width: "250px",
  height: "250px",
  border: "2px solid black",
  overflow: "hidden",
  padding: "20px",
  margin: "20px",
  textAlign: "center",
  boxShadow: "8px 8px darkgrey",
  borderRadius: "10px",
};

const image = {
  width: "250px",
  imageSize: "cover",
  borderRadius: "10px",
};

export default ClimbCard;
