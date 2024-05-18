import React from "react";
import "./styles/toolbar.css";

import { MdCollectionsBookmark } from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { IoText } from "react-icons/io5";

import { useDesignContext } from "../context/DesignContext";

import { getTextInitialState } from "../utils/textUtils";


function Toolbar() {
  const { setShowSideFile, transformerRef,currentEventRef, indexRef, texts, setTexts,showSideFile } = useDesignContext();

  function handleTextTool() {
    transformerRef.current.nodes([]);
    currentEventRef.current = null;
    indexRef.current = null;
    setTexts([...texts, getTextInitialState()]);
  }

  function handleShapeTool() {
    if (!showSideFile) {
      setShowSideFile(true);
    }
  }


  return (
    <>
      <div className="my-4 tool templates">
        <MdCollectionsBookmark className="fs-4" />
        <span>Templates</span>
      </div>

      <div className="my-4 tool shape-tool" onClick={handleShapeTool}>
        <FaShapes className="fs-4" />
        <span>Shapes</span>
      </div>

      <div className="my-4 tool" onClick={handleTextTool}>
        <IoText className="fs-4" />
        <span>Text</span>
      </div>

      <div className="my-4 tool">
        <IoMdCloudUpload className="fs-4" />
        <span>Upload</span>
      </div>

      <div className="my-4 tool">
        <IoMdDownload className="fs-4" />
        <span>Download</span>
      </div>
    </>
  );
}

export default Toolbar;
