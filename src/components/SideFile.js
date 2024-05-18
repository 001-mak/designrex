import React from "react";
import './styles/sidefile.css'

import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdRectangle } from "react-icons/md";
import { FaCircle } from "react-icons/fa";
import { MdHexagon } from "react-icons/md";
import { IoMdStar } from "react-icons/io";

import { useDesignContext } from "../context/DesignContext";
import { getRectInitialState } from "../utils/rectangleUtils";
function SideFile() {
  const {setAction, setShowSideFile,rects, setRects, transformerRef, currentEventRef} = useDesignContext();

  function handleRectTool(){
    transformerRef.current.nodes([]);
    currentEventRef.current = null;
    setAction('rectangle')
    setRects([...rects, getRectInitialState()]);
  }

  return (
    <>
      <div className="side-file row ms-1">
        <div className="shapes-file position-relative col-lg-12">
          <IoIosCloseCircleOutline
            className="position-absolute top- end-0 m-2 fs-5 text-secondary"
            onClick={() => setShowSideFile(false)}
          />
        <div className="shapes col-lg-12">
        <MdRectangle className="shape-icon " onClick={handleRectTool}/>
        <FaCircle className="shape-icon "/>  
        <MdHexagon className="shape-icon "/>    
        <IoMdStar className="shape-icon "/>    
        </div >
         

        </div>
      </div>
    </>
  );
}

export default SideFile;
