import React from "react";
import "./styles/toolbarprop.css";

import { ImBold } from "react-icons/im";
import { FaItalic } from "react-icons/fa";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { MdDelete } from "react-icons/md";
function ToolbarProperties() {
  return (
    <div className="toolbar-prop-container">
      <div className="d-flex align-items-center">
        <p className="mt-3 ">Font: </p>
        <select name="font" id="font" className="form-select mx-2">
          <option value="proximaRegular">Proxima Regular</option>
          <option value="proximaBold">Proxima Bold</option>
          <option value="montserrat-regular">Montserrat Regular</option>
          <option value="montserrat-bold">Montserrat Bold</option>
        </select>
        <div className="d-flex align-items-center mx-2">
          <button className="btn btn-light">-</button>
          <span className="mx-1">40</span>
          <button className="btn btn-light">+</button>
        </div>
        <p className="mt-3 ">Fill: </p>
        <input type="color" className="form-control mx-2 p-0" />
        <p className="mt-3 ">Stroke: </p>
        <input type="color" className="form-control mx-2 p-0" />
        <ImBold className="fs-6 m-2" />
        <FaItalic className="fs-6 m-2" />
        <MdOutlineFormatUnderlined className="fs-5 m-2" />
        <MdDelete className="fs-5 m-2 text-danger" />
      </div>
    </div>
  );
}

export default ToolbarProperties;
