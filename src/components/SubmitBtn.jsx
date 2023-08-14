import React from "react";

import "../styles/SubmitBtn.css";

const SubmitBtn = ({ text, customClass }) => {
  return (
    <button type="submit" className={"submit-button btn" + ` ${customClass}`}>
      {text || "Submit"}
    </button>
  );
};

export default SubmitBtn;
