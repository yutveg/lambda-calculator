import React from "react";
import { operators } from "../../../data.js";

export const OperatorButton = (props) => {
  return (
    <button>
      {props.button.value}
    </button>
  );
};
