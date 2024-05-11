import React from 'react'
import './styles/toolbar.css'

import { MdCollectionsBookmark } from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { IoText } from "react-icons/io5";

function Toolbar(props) {
  return (
    <>
      <div className="my-4 tool">
              <MdCollectionsBookmark className="fs-4" />
              <span>Templates</span>
            </div>

            <div className="my-4 tool">
              <FaShapes className="fs-4" />
              <span>Shapes</span>
            </div>

            <div className="my-4 tool" onClick={props.handleTextTool}>
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
  )
}

export default Toolbar
