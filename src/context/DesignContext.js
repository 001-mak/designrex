import React, { createContext, useContext, useState, useRef } from "react";

const DesignContext = createContext();

export const useDesignContext = () => useContext(DesignContext);

export const DesignProvider = ({ children }) => {
  //stage / artboard size
  const [stageSize, setStageSize] = useState({});

  //Text tool context data
  const [texts, setTexts] = useState([]);
  const [textProps, setTextProps] = useState(null);

  const [action, setAction] = useState('select');
  const [showSideFile, setShowSideFile] = useState(false);

  //Rec
  const [rects, setRects] = useState([]);
  const [rectProps, setRectProps] = useState(null);

  //image
  const [images, setImages] = useState([]);
  const [imgProps, setImgProps] = useState();


  const transformerRef = useRef();
  const currentEventRef = useRef();
  const indexRef = useRef();
  const stageRef = useRef();

  return (
    <DesignContext.Provider
      value={{
        texts,
        setTexts,
        textProps,
        setTextProps,
        action,
        setAction,
        showSideFile,
        setShowSideFile,
        transformerRef,
        currentEventRef,
        indexRef,
        //*********rectangle context*********
        rects,
        setRects,
        rectProps,
        setRectProps,
        //******image context******
        images,
        setImages,
        imgProps,
        setImgProps,
        //stage*******
        stageRef,
        stageSize,
        setStageSize,
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};
