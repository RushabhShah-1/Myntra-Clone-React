import React from "react";

function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-grow text-warning"
        role="status"
        style={{ width: "7rem", height: "7rem", margin: "15rem 0" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingSpinner;
