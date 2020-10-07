import React from "react";
import ReactLoading from "react-loading";

import "./loading.scss";

const Loading = () => {
  return (
    <div className="spinner-container">
      <ReactLoading type="cylon" className="spinner" />
    </div>
  );
};

export default Loading;
