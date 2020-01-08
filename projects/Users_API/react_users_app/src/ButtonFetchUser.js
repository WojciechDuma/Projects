import React from "react";

const ButtonFetchUser = props => {
  return (
    <button
      style={{
        padding: "10px 20px",
        border: "2px solid black",
        backgroundColor: "white",
        margin: "20px"
      }}
      onClick={props.click}
    >
      Add user
    </button>
  );
};

export default ButtonFetchUser;
