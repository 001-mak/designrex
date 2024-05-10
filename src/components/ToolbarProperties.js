import React from "react";
import './styles/toolbarprop.css'

import { ImBold } from "react-icons/im";
import { FaItalic } from "react-icons/fa";
import { MdOutlineFormatUnderlined } from "react-icons/md";
function ToolbarProperties() {
  return (
    <div className="toolbar-prop-container">
      <div className="d-flex align-items-center">
          <select name="font" id="font" className="form-select mx-2">
            <option value="proximaRegular">Proxima Regular</option>
            <option value="proximaBold">Proxima Bold</option>
            <option value="montserrat-regular">Montserrat Regular</option>
            <option value="montserrat-bold">Montserrat Bold</option>
          </select>
          <div className="d-flex align-items-center mx-2">
            <button className="btn btn-light">-</button>
            <span>40</span>
            <button className="btn btn-light">+</button>
          </div>
            <input type="color" className="form-control mx-2"/>
            <ImBold className="fs-6 m-2"/>
            <FaItalic className="fs-6 m-2"/>
            <MdOutlineFormatUnderlined className="fs-5 m-2"/>
        </div>
    </div>
  );
}

export default ToolbarProperties;
