import React, { useState } from "react";
import { FaWandMagicSparkles } from "react-icons/fa6";
import { query } from "../utils/generateImage";
import { useDesignContext } from "../context/DesignContext";

function GenerateWithAi() {
  const [input, setInput] = useState();
  const[loading, setLoading] = useState(false)

  const{setImages} = useDesignContext()

  async function hanleSubmit() {
    try {
      setLoading(true)
      await query({ inputs: `${input}` }).then((response) => {
        const file = response;
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new window.Image();
        img.src = e.target.result;
        const w= img.naturalWidth
        const h= img.naturalHeight
        img.onload = () => {
          setImages((oldImages) => [
            ...oldImages,
            {
              id: Date.now(),
              image: img,
              width: 400,
              height: 400,
              x: 50,
              y: 50,
            },
          ]);
        };
      };
      reader.readAsDataURL(file);
    }
      });
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="d-flex align-items-center">
      <FaWandMagicSparkles className="text-white fs-1" />

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
      {loading&& (
        <>
        <p className="fs-5 text-light m-1">Loading...</p>
        </>
      )}
    </div>
  );
}

export default GenerateWithAi;
