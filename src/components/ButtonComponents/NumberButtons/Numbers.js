import React, { useState } from "react";
import { numbers } from "../../../data.js";
//import any components needed
import { NumberButton } from "./NumberButton.js";
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data to from the provided data file
const Numbers = () => {
  // STEP 2 - add the imported data to state
  const [numberChars] = useState(numbers);
  return (
    <div className="numberCharContainer">
      {numberChars.map((item, index) => (
        <NumberButton key={index} value={item}/>
      ))}
    </div>
  );
};

export default Numbers;
