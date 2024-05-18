import React, { useState, useRef, useEffect } from "react";
import "./styles/designboard.css";

import { Stage, Layer, Rect, Text, Transformer } from "react-konva";

import Toolbar from "../components/Toolbar";
import SideFile from "../components/SideFile";
import ToolbarProperties from "../components/ToolbarProperties";

import { useDesignContext } from "../context/DesignContext";

import { FaWandMagicSparkles } from "react-icons/fa6";

function DesignBoard() {
  const stageRef = useRef();

  const {
    texts,
    setTexts,
    textProps,
    setTextProps,
    action,
    setAction,
    showSideFile,
    transformerRef,
    currentEventRef,
    rects,
    setRects,
    setRectProps,
    rectProps,
  } = useDesignContext();

  // *******FOR TEXT TOOL PROPERTIES******
  function OnClickText(e) {
    currentEventRef.current = e;
    setTextProps(e.target.attrs);
    setAction("text");
    const target = e.currentTarget;
    transformerRef.current.nodes([target]);
  }

  // *******FOR RECT TOOL PROPERTIES******
  function onClickRect(e) {
    setAction("rectangle");
    currentEventRef.current = e;
    setRectProps(e.target.attrs);
    const target = e.currentTarget;
    transformerRef.current.nodes([target]);
  }

  useEffect(() => {
    const updatedTexts = [...texts];
    texts.map((text, index) => {
      if (text.id === textProps.id) {
        updatedTexts[index] = textProps;
        setTexts(updatedTexts);
      }
    });
  }, [textProps]);

  useEffect(() => {
    const updatedRects = [...rects];
    rects.map((rect, index) => {
      if (rect.id === rectProps.id) {
        updatedRects[index] = rectProps;
        setRects(updatedRects);
      }
    });
  }, [rectProps]);

  return (
    <>
      <div className="navbar bg-light row">
        <div className="brand-name col ms-5 d-flex align-items-center">
          <img src="../../logo.png" alt="" />
          <h1 className="p-0 m-0 mt-2 ms-1">DesignRex</h1>
        </div>
        <div className="board row bg-light m-0 py-4">
          {/* *************TOOLBAR************* */}

          <div className="left-tool-bar ms-4 mt-2 col-lg-1 d-flex flex-column justify-content-center px-0 py-3">
            <Toolbar />

            {/* ********TOOLBAR SIDE FILE**************** */}
            <div className="ms-2">
              {showSideFile ? (
                <>
                  <SideFile />
                </>
              ) : null}
            </div>
          </div>

          <div className="col">
            <div className="row">
              {/* ************CODE FOR TOOLBAR PROPERTIES ************** */}
              {action === "select" ? (
                <div className="col mt-2  prop-container generate-ai mx-4 py-0 px-lg-5 d-flex align-items-center justif-content-center">
                  <div className="d-flex align-items-center">
                    <FaWandMagicSparkles className="text-white fs-2" />
                    <input
                      type="text"
                      name="Generate with Ai"
                      placeholder="Generate with Ai"
                      className="form-control mx-2 py-2 px-2"
                    />
                    <button className="btn btn-warning fw-medium">
                      Generate
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="col mt-2 prop-container mx-4 py-0 px-lg-5 bg-white">
                    <div className="toolbar-prop-container">
                      <ToolbarProperties />
                    </div>
                  </div>
                </>
              )}

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
                        setAction("select");
                        currentEventRef.current = null;
                      }}
                    />

                    {rects.map((rectangle, index) => {
                      return (
                        <>
                          <Rect
                            key={index}
                            id={rectangle.id}
                            height={rectangle.height}
                            width={rectangle.width}
                            cornerRadius={rectangle.cornerRadius}
                            fill={rectangle.fill}
                            stroke={rectangle.stroke}
                            strokeWidth={rectangle.strokeWidth}
                            opacity={rectangle.opacity}
                            draggable="true"
                            onClick={onClickRect}
                            onMouseEnter={() =>
                              (document.body.style.cursor = "move")
                            }
                            onMouseLeave={() =>
                              (document.body.style.cursor = "default")
                            }
                          />
                        </>
                      );
                    })}

                    {texts.map((text, index) => {
                      return (
                        <>
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
                        </>
                      );
                    })}

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
