import React from "react";
import './styles/sidefile.css'

import { IoIosCloseCircleOutline } from "react-icons/io";

import { useDesignContext } from "../context/DesignContext";
import { getRectInitialState } from "../utils/rectangleUtils";
function SideFile() {
  const {setShowSideFile} = useDesignContext();


  return (
    <>
      <div className="side-file row">
        <div className="shapes-file position-relative col-lg-12">
          <IoIosCloseCircleOutline
            className="position-absolute top- end-0 m-2 fs-5 text-secondary"
            onClick={() => setShowSideFile(false)}
          />
        
         

        </div>
      </div>
    </>
  );
}

export default SideFile;
