import React from "react";
import { StyledFeature } from "./StyledFeature";

const Feature = ({ item: { id, title, body, image } }) => {
  return (
    <StyledFeature layout={id % 2 === 0 && "row-reverse"}>
      <div className="feature__body">
        <h3 className="feature__heading">{title}</h3>
        <p className="feature__subheading">{body}</p>
      </div>
      <div className="feature__image">
        <img src={`./images/${image}`} alt={`${image}`} />
      </div>
    </StyledFeature>
  );
};

export default Feature;
