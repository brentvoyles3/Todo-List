import React, { Component, useState } from "react";

const Popup = (props) => {
    return (
      <div>
        <p>{props.message}</p>
        <button onClick={props.closeMe}>Close Popup</button>
      </div>
    );
}
  
  export default Popup;