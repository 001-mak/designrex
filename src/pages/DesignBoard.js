import React, { useState, useRef, useEffect } from "react";
import "./styles/designboard.css";

import { Stage, Layer, Rect, Text, Transformer } from "react-konva";

import { MdCollectionsBookmark } from "react-icons/md";
import { FaShapes } from "react-icons/fa";
import { IoMdCloudUpload } from "react-icons/io";
import { IoMdDownload } from "react-icons/io";
import { IoText } from "react-icons/io5";

import { ImBold } from "react-icons/im";
import { FaItalic } from "react-icons/fa";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

import { getTextInitialState } from "../utils/textUtils";

function DesignBoard() {
  const [texts, setTexts] = useState([]);

  const [textProps, setTextProps] = useState(null);
  const [showTextProp, setShowTextProp] = useState(false);
  const [showSideFile, setShowSideFile] = useState(false);

  const transformerRef = useRef();
  const stageRef = useRef();
  const currentEventRef = useRef();
  const indexRef = useRef();

  function handleTextTool() {
    transformerRef.current.nodes([]);
    currentEventRef.current = null;
    indexRef.current = null;
    setTexts((texts) => [...texts, getTextInitialState()]);
  }

  function handleShapeTool(){
    if(!showSideFile){
      setShowSideFile(true)
    }
  }

  function OnClickText(e) {
    currentEventRef.current = e;
    indexRef.current = e.target.index - 1;
    console.log(e);
    // *******FOR TEXT TOOL PROPERTIES******
    setTextProps(e.target.attrs);

    setShowTextProp(true);
    const target = e.currentTarget;
    transformerRef.current.nodes([target]);
  }

  useEffect(() => {
    // console.log(textProps);
    const updatedTexts = [...texts];
    updatedTexts[indexRef.current] = textProps;
    setTexts(updatedTexts);
  }, [textProps]);

  return (
    <>
      <div className="navbar row">
        <div className="brand-name col ms-5 d-flex align-items-center">
          <img src="../../logo.png" alt="" />
          <h1 className="p-0 m-0 mt-2 ms-1">DesignRex</h1>
        </div>
        <div className="board row bg-light m-0 py-4">
          {/* *************TOOLBAR************* */}

          <div className="left-tool-bar ms-4 mt-2 col-lg-1 d-flex flex-column justify-content-center px-0 py-3">
            {/* <Toolbar /> */}

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
            {/* ********TOOLBAR SIDE FILE**************** */}
            <div>

            {
              showSideFile ? (<>
              <div className="side-file">
              <div className="shapes-file position-relative">
                <IoIosCloseCircleOutline className="position-absolute top- end-0 m-2 fs-5 text-secondary"
                onClick={()=>setShowSideFile(false)}
                 />
              </div>
            </div> 
            </>) : null
            }
            </div>
          </div>

          <div className="col">
            <div className="row">
              {/* ************CODE FOR TOOLBAR PROPERTIES ************** */}
              <div className="col mt-2 prop-container mx-4 py-0 px-lg-5 bg-white">
                {showTextProp ? (
                  <>
                    {/* <ToolbarProperties /> */}
                    <div className="toolbar-prop-container">
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          name="change text"
                          placeholder="change text"
                          value={textProps.text}
                          onChange={(e) => {
                            setTextProps({
                              ...textProps,
                              text: e.target.value,
                            });
                          }}
                          className="form-control text-input mx-2 py-1 px-2"
                        />
                        <p className="mt-3 ">Font: </p>
                        <select
                          name="font"
                          id="font"
                          className="form-select mx-2"
                          value={textProps.fontFamily}
                          onChange={(e) => {
                            setTextProps({
                              ...textProps,
                              fontFamily: e.target.value,
                            });
                          }}
                        >
                          <option value="Arial">Arial</option>
                          <option value="proximaRegular">
                            Proxima Regular
                          </option>
                          <option value="proximaBold">Proxima Bold</option>
                          <option value="montserrat-regular">
                            Montserrat Regular
                          </option>
                          <option value="montserrat-bold">
                            Montserrat Bold
                          </option>
                        </select>
                        <div className="d-flex align-items-center mx-2">
                          <button
                            className="btn btn-light"
                            onClick={() =>
                              setTextProps({
                                ...textProps,
                                fontSize: (textProps.fontSize -= 1),
                              })
                            }
                          >
                            -
                          </button>
                          <span className="mx-1">{textProps.fontSize}</span>
                          <button
                            className="btn btn-light"
                            onClick={() =>
                              setTextProps({
                                ...textProps,
                                fontSize: (textProps.fontSize += 1),
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                        <p className="mt-3 ">Fill: </p>
                        <input
                          type="color"
                          className="form-control color-input mx-2 p-0"
                          value={textProps.fill}
                          onChange={(e) => {
                            setTextProps({
                              ...textProps,
                              fill: e.target.value,
                            });
                          }}
                        />
                        <p className="mt-3 ">Stroke: </p>
                        <input
                          type="color"
                          className="form-control color-input mx-2 p-0"
                          value={textProps.stroke}
                          onChange={(e) => {
                            setTextProps({
                              ...textProps,
                              stroke: e.target.value,
                            });
                          }}
                        />
                        <div className="d-flex align-items-center mx-2">
                          <button
                            className="btn btn-light"
                            onClick={() =>
                              setTextProps({
                                ...textProps,
                                strokeWidth: (textProps.strokeWidth -= 1),
                              })
                            }
                          >
                            -
                          </button>
                          <span className="mx-1">{textProps.strokeWidth}</span>
                          <button
                            className="btn btn-light"
                            onClick={() =>
                              setTextProps({
                                ...textProps,
                                strokeWidth: (textProps.strokeWidth += 1),
                              })
                            }
                          >
                            +
                          </button>
                        </div>
                        <ImBold
                          className="fs-6 m-2"
                          onClick={() => {
                            textProps.fontStyle === "normal"
                              ? setTextProps({
                                  ...textProps,
                                  fontStyle: "bold",
                                })
                              : setTextProps({
                                  ...textProps,
                                  fontStyle: "normal",
                                });
                          }}
                        />
                        <FaItalic
                          className="fs-6 m-2"
                          onClick={() => {
                            if (textProps.fontStyle === "bold") {
                              setTextProps({
                                ...textProps,
                                fontStyle: "italic bold",
                              });
                            }
                            if (textProps.fontStyle === "italic bold") {
                              setTextProps({
                                ...textProps,
                                fontStyle: "bold",
                              });
                            }
                            if (textProps.fontStyle === "italic") {
                              setTextProps({
                                ...textProps,
                                fontStyle: "normal",
                              });
                            }
                            if (textProps.fontStyle === "normal") {
                              setTextProps({
                                ...textProps,
                                fontStyle: "italic",
                              });
                            }
                          }}
                        />
                        <MdOutlineFormatUnderlined
                          className="fs-5 m-2"
                          onClick={() => {
                            textProps.textDecoration === ""
                              ? setTextProps({
                                  ...textProps,
                                  textDecoration: "underline",
                                })
                              : setTextProps({
                                  ...textProps,
                                  textDecoration: "",
                                });
                          }}
                        />
                        <MdDelete
                          className="fs-5 m-2 text-danger"
                          onClick={() => {
                            texts.map((text, index) => {
                              if (text.id === textProps.id) {
                                const newArray = texts.filter(
                                  (_, i) => i !== index
                                );
                                setTexts(newArray);
                                console.log(newArray);
                                transformerRef.current.nodes([]);
                                currentEventRef.current = null;
                                indexRef.current = null;
                                setShowTextProp(false);
                                return;
                              }
                            });
                          }}
                        />
                      </div>
                    </div>
                  </>
                ) : null}
              </div>

              <div className="canvas-zoom col-lg-11 mx-5 my-4 d-flex align-itms-center justify-content-center">
                {/* *************CANVAS**************** */}
                {/* <Canvas /> */}
                <Stage width={700} height={700} ref={stageRef}>
                  <Layer className="bg-white">
                    <Rect
                      height={700}
                      width={700}
                      fill="#ffffff"
                      id="bg"
                      onClick={() => {
                        transformerRef.current.nodes([]);
                        setShowTextProp(false);
                        currentEventRef.current = null;
                      }}
                    />

                    {texts
                      ? texts.map((text, index) => {
                          return (
                            <Text
                              key={index}
                              id={text.id}
                              name="text"
                              text={text.text}
                              fontSize={text.fontSize}
                              fontFamily={text.fontFamily}
                              fontStyle={text.fontStyle}
                              textDecoration={text.textDecoration}
                              fill={text.fill}
                              stroke={text.stroke}
                              strokeWidth={text.strokeWidth}
                              align={text.align}
                              draggable="true"
                              onClick={OnClickText}
                              onMouseEnter={() =>
                                (document.body.style.cursor = "move")
                              }
                              onMouseLeave={() =>
                                (document.body.style.cursor = "default")
                              }
                            />
                          );
                        })
                      : null}
                    <Transformer ref={transformerRef} />
                  </Layer>
                </Stage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DesignBoard;
