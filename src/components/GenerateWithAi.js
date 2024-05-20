import React, { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { query } from "../utils/generateImage";

function GenerateWithAi() {
  const [input, setInput] = useState()

  function hanleSubmit(){
    
  }
  return (
    <div className="d-flex align-items-center">
      <FaWandMagicSparkles className="text-white fs-2" />
      
      <input
        type="text"
        name="Generate with Ai"
        placeholder="Generate with Ai"
        className="form-control mx-2 py-2 px-2"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
      <button onClick={hanleSubmit} className="btn btn-warning fw-medium">Generate</button>
    </div>
  );
}

export default GenerateWithAi;
