import React, { useState } from "react";
import { not } from "ramda";
import db from "../db.js";
import ClimbCard from "./ClimbCard";
import ClimbDetails from "./ClimbDetails";

const MainContent = () => {
  const [currentClimb, setCurrentClimb] = useState("");
  const [isHomePage, setIsHomePage] = useState(true);

  const updateClimb = (details) => {
    setCurrentClimb(details);
    setIsHomePage(false);
  };

  if (not(isHomePage)) {
    return (
      <ClimbDetails
        site={currentClimb}
        callbackFn={setIsHomePage}
      ></ClimbDetails>
    );
  }

  return (
    <div style={app}>
      {db.map((site) => (
        <ClimbCard
          site={site}
          key={site.id}
          updateClimb={updateClimb}
        ></ClimbCard>
      ))}
    </div>
  );
};

const app = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
};

export default MainContent;
