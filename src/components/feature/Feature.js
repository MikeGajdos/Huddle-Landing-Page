import React, { useRef } from "react";
import { useInView } from "react-intersection-observer";
import { StyledFeature } from "./StyledFeature";

const Feature = ({ item: { id, title, body, image } }) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.75,
  });
  const {
    ref: myNewRef,
    inView: newRefVisible,
    entry: newEntry,
  } = useInView({
    /* Optional options */
    threshold: 0.75,
  });
  return (
    <StyledFeature layout={id % 2 === 0 && "row-reverse"}>
      <div
        className={`feature__body ${newRefVisible ? "red" : " "} `}
        ref={myNewRef}
      >
        <h3 className="feature__heading">{title}</h3>
        <p className="feature__subheading">{body}</p>
      </div>
      <div className={`feature__image ${inView ? "fadeIn" : " "} `} ref={ref}>
        <img src={`./images/${image}`} alt={`${image}`} />
      </div>
    </StyledFeature>
  );
};

export default Feature;
