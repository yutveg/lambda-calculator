import React, { useState } from "react";
import { operators } from "../../../data.js";
//import any components needed
import { OperatorButton } from "./OperatorButton.js";
//Import your array data to from the provided data file

const Operators = () => {
  // STEP 2 - add the imported data to state
  const [operatorChars] = useState(operators);
  return (
    <div className="operatorCharContainer">
      {operatorChars.map((item, index) => (
        <OperatorButton key={index} button={item} />
      ))}
    </div>
  );
};

export default Operators;