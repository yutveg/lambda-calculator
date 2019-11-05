import React, { useState } from "react";
import { specials } from "../../../data.js";
//import any components needed
import { SpecialButton } from './SpecialButton.js';
//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialChars] = useState(specials);
  return (
    <div className="specialCharContainer">
      {specialChars.map((item, index) => (
         <SpecialButton key={index} button={item}/>
      ))}
    </div>
  );
};

export default Specials;