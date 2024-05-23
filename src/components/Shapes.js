import React from "react";

import { MdRectangle } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { MdHexagon } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

import { useDesignContext } from "../context/DesignContext";
import { getRectInitialState } from "../utils/rectangleUtils";

function Shapes() {
  const {
    setAction,
    rects,
    setRects,
    transformerRef,
    currentEventRef,
  } = useDesignContext();

  function handleRectTool() {
    transformerRef.current.nodes([]);
    currentEventRef.current = null;
    setAction("rectangle");
    setRects([...rects, getRectInitialState()]);
  }

  return (
    <div className="shapes col-lg-12">
      <MdRectangle className="shape-icon " onClick={handleRectTool} />
      <FaCircle className="shape-icon " />
      <MdHexagon className="shape-icon " />
      <IoMdStar className="shape-icon " />
    </div>
  );
}

export default Shapes;
