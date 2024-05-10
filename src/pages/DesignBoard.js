import React from "react";
import "./styles/designboard.css";
import { MdCollectionsBookmark } from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { IoText } from "react-icons/io5";

import Canvas from '../components/Canvas'

import ToolbarProperties from "../components/ToolbarProperties";

function DesignBoard() {
  return (
    <>
      <div className="navbar row">
        <div className="brand-name col ms-5 d-flex align-items-center">
          <img src="../../logo.png" alt="" />
          <h1 className="p-0 m-0 mt-2 ms-1">DesignRex</h1>
        </div>
        <div className="board row">
          <div className="left-tool-bar ms-4 mt-4 col-lg-1 d-flex flex-column justify-content-center py-4">
            <div className="my-4 tool">
              <MdCollectionsBookmark className="fs-4" />
              <span>Templates</span>
            </div>

            <div className="my-4 tool">
              <FaShapes className="fs-4" />
              <span>Shapes</span>
            </div>

            <div className="my-4 tool">
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
          </div>
          <div className="col">
            <div className="row">
              <div className="col mt-4">
                <ToolbarProperties/>
              </div>
              <div className="col-lg-11 m-5 bg-dark">
                <Canvas/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignBoard;
