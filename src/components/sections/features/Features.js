import React from "react";
import { StyledFeatures } from "./StyledFeatures";

const Features = ({ children }) => {
  return <StyledFeatures className="features">{children}</StyledFeatures>;
};

export default Features;
