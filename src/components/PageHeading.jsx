import React from "react";

import "../styles/PageHeading.css";

const PageHeading = ({ name, animationDirection }) => {
  return (
    <>
      <h2
        className={
          animationDirection +
          " page-heading page-heading-animation page-heading-animation-1 d-flex justify-content-center text-center"
        }
      >
        {name}
      </h2>
      <hr style={{ color: "var(--primary-color)" }} />
    </>
  );
};

export default PageHeading;
