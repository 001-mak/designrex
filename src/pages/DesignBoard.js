import React, { useRef, useEffect } from "react";
import "./styles/designboard.css";

import { Stage, Layer, Rect, Text, Image, Transformer } from "react-konva";

import Toolbar from "../components/Toolbar";
import SideFile from "../components/SideFile";
import ToolbarProperties from "../components/ToolbarProperties";
import GenerateWithAi from "../components/GenerateWithAi";

import { useDesignContext } from "../context/DesignContext";

function DesignBoard() {
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
    images,
    setImgProps,
    stageRef,
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

  function onClickImage(e) {
    console.log(e);
    setImgProps(e.target.attrs);
    setAction("image");

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
  // useEffect(() => {
  //   console.log(images);
  // }, [images]);

  return (
    <>
      <div className="navbar row bg-white ">
        <div className="brand-name col ms-5 d-flex align-items-center">
          <img src="../../logo.png" alt="" />
          <h1 className="p-0 m-0 mt-2 ms-1">DesignRex</h1>
        </div>
      </div>

      <div className="board row m-0 py-1">
        {/* *************TOOLBAR************* */}

        <div className="left-tool-bar ms-4 mt-2 col-lg-1 d-flex flex-column justify-content-center px-0 py-3">
          <Toolbar />

          {/* ********TOOLBAR SIDE FILE**************** */}
          <div className="ms-2">
            {showSideFile && (
              <>
                <SideFile />
              </>
            )}
          </div>
        </div>

        <div className="col">
          <div className="row">
            {/* ************CODE FOR TOOLBAR PROPERTIES ************** */}
            {action === "select" ? (
              <div className="col mt-2  prop-container generate-ai mx-4 py-0 px-lg-5 d-flex align-items-center justif-content-center">
                <GenerateWithAi />
              </div>
            ) : (
              <>
                <div className="col mt-2 prop-container d-flex align-items-center mx-4 py-0 px-lg-5 bg-white">
                  <div className="toolbar-prop-container d-flex align-items-center">
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

                  {images.map((img) => {
                    console.log("img mapping");
                    return (
                      <Image
                        id={img.id}
                        image={img.image}
                        width={img.width}
                        height={img.height}
                        draggable
                        onClick={onClickImage}
                      />
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
    </>
  );
}

export default DesignBoard;
