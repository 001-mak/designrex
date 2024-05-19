import React, { useRef } from "react";
import "./styles/toolbar.css";

import { MdCollectionsBookmark } from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { IoText } from "react-icons/io5";

import { useDesignContext } from "../context/DesignContext";

import { getTextInitialState } from "../utils/textUtils";

function Toolbar() {
  const {
    setShowSideFile,
    transformerRef,
    currentEventRef,
    indexRef,
    texts,
    setTexts,
    showSideFile,
    setImages,
    stageRef,
  } = useDesignContext();

  const fileInputRef = useRef(null);
  
  function handleTextTool() {
    transformerRef.current.nodes([]);
    currentEventRef.current = null;
    indexRef.current = null;
    setTexts([...texts, getTextInitialState()]);
  }

  function handleShapeTool() {
    setShowSideFile(!showSideFile);
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const img = new window.Image();
        img.src = e.target.result;
        img.onload = () => {
          const w = img.naturalWidth;
          const h = img.naturalHeight;
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
  };

  const handleIconClick = () => {
    // Trigger the click event on the file input element
    fileInputRef.current.click();
};

function handleDownload(){
  const uri = stageRef.current.toDataURL();
  console.log(stageRef)
    var link = document.createElement("a");
    link.download = "image.png";
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

      <div className="my-4 tool" onClick={handleIconClick} style={{ cursor: 'pointer' }}>
      <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                ref={fileInputRef}
                style={{ display: 'none' }} // Hide the input element
            />
        <IoMdCloudUpload className="fs-4" />
        <span>Upload</span>
      </div>

      <div className="my-4 tool" onClick={handleDownload}>
        <IoMdDownload className="fs-4" />
        <span>Download</span>
      </div>
    </>
  );
}

export default Toolbar;


