import React from "react";

const CardDetails = ({ site, callbackFn }) => {
  return (
    <>
      <button onClick={() => callbackFn(true)}>Return to Home Page</button>
      <div style={details}>
        <div style={card}>
          <h3>{site.name}</h3>
          <img style={image} src={site.image}></img>
          <p>{site.description}</p>
        </div>
      </div>
    </>
  );
};

const card = {
  width: "50vw",
  height: "50vw",
  border: "2px solid black",
  overflow: "hidden",
  padding: "20px",
  margin: "20px",
  textAlign: "center",
  boxShadow: "4px 4px darkgrey",
  borderRadius: "10px",
};

const image = {
  width: "50vw",
  imageSize: "cover",
  borderRadius: "10px",
};

const details = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default CardDetails;
