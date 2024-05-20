import React, { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { query } from "../utils/generateImage";
import { useDesignContext } from "../context/DesignContext";

function GenerateWithAi() {
  const [input, setInput] = useState();
  const{setImages} = useDesignContext()

  async function hanleSubmit() {
    console.log(input)
    try {
      await query({ inputs: `${input}` }).then((response) => {
        const file = response;
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new window.Image();
        img.src = e.target.result;
        img.onload = () => {
          setImages((oldImages) => [
            ...oldImages,
            {
              id: Date.now(),
              image: img,
              width: 200,
              height: 200,
              x: 50,
              y: 50,
            },
          ]);
        };
      };
      reader.readAsDataURL(file);
    }
      });
    } catch (error) {
      console.log(error);
    }
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
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={hanleSubmit} className="btn btn-warning fw-medium">
        Generate
      </button>
    </div>
  );
}

export default GenerateWithAi;
