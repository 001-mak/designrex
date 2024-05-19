import React from "react";
import "./styles/toolbarprop.css";

import { ImBold } from "react-icons/im";
import { FaItalic } from "react-icons/fa";
import { MdOutlineFormatUnderlined } from "react-icons/md";
import { MdDelete } from "react-icons/md";

import { useDesignContext } from "../context/DesignContext";

function ToolbarProperties() {
  const {
    textProps,
    setTextProps,
    setAction,
    action,
    transformerRef,
    indexRef,
    currentEventRef,
    texts,
    setTexts,
    rects,
    setRects,
    rectProps,
    setRectProps,
  } = useDesignContext();

  return (
    <>
      {action === "text" ? (
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
            <option value="proximaRegular">Proxima Regular</option>
            <option value="proximaBold">Proxima Bold</option>
            <option value="montserrat-regular">Montserrat Regular</option>
            <option value="montserrat-bold">Montserrat Bold</option>
          </select>
          <div className="d-flex align-items-center mx-2">
            <button
              className="btn btn-light"
              onClick={() =>
                setTextProps({
                  ...textProps,
                  fontSize: textProps.fontSize - 1,
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
                  fontSize: textProps.fontSize + 1,
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
                  strokeWidth: textProps.strokeWidth - 1,
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
                  strokeWidth: textProps.strokeWidth + 1,
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
              const updatedTexts = texts.filter(
                (text) => text.id !== textProps.id
              );
              setTexts(updatedTexts);
              transformerRef.current.nodes([]);
              currentEventRef.current = null;
              indexRef.current = null;
              setAction("select");
            }}
          />
        </div>
      ) : null}

      {action === "rectangle" && rectProps ? (
        <div className="d-flex align-items-center">
          <p className="mt-3 ">Fill: </p>
          <input
            type="color"
            className="form-control color-input mx-2 p-0"
            value={rectProps.fill}
            onChange={(e) => {
              setRectProps({
                ...rectProps,
                fill: e.target.value,
              });
            }}
          />
          <p className="mt-3 ">Stroke: </p>
          <input
            type="color"
            className="form-control color-input mx-2 p-0"
            value={rectProps.stroke}
            onChange={(e) => {
              setRectProps({
                ...rectProps,
                stroke: e.target.value,
              });
            }}
          />
          <div className="d-flex align-items-center mx-2">
            <button
              className="btn btn-light"
              onClick={() =>
                setRectProps({
                  ...rectProps,
                  strokeWidth: rectProps.strokeWidth - 1,
                })
              }
              disabled={rectProps.strokeWidth < 1}

            >
              -
            </button>
            <span className="mx-1">{rectProps.strokeWidth}</span>
            <button
              className="btn btn-light"
              onClick={() =>
                setRectProps({
                  ...rectProps,
                  strokeWidth: rectProps.strokeWidth + 1,
                })
              }
            >
              +
            </button>
          </div>

          <div className="d-flex align-items-center mx-2">
            <p className="mt-3 ">Corners: </p>
            <button
              className="btn btn-light"
              onClick={() =>
                setRectProps({
                  ...rectProps,
                  cornerRadius: rectProps.cornerRadius - 1,
                })
              }
              disabled={rectProps.cornerRadius < 1}
            >
              -
            </button>
            <span className="mx-1">{rectProps.cornerRadius}</span>
            <button
              className="btn btn-light"
              onClick={() =>
                setRectProps({
                  ...rectProps,
                  cornerRadius: rectProps.cornerRadius + 1,
                })
              }
            >
              +
            </button>
          </div>

          <MdDelete
            className="fs-5 m-2 text-danger"
            onClick={() => {
              const updatedRects = rects.filter(
                (rect) => rect.id !== rectProps.id
              );
              setRects(updatedRects);
              transformerRef.current.nodes([]);
              currentEventRef.current = null;
              indexRef.current = null;
              setAction("select");
            }}
          />
        </div>
      ) : null}
    </>
  );
}

export default ToolbarProperties;