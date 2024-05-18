import React, { createContext, useContext, useState, useRef } from "react";

const DesignContext = createContext();

export const useDesignContext = () => useContext(DesignContext);

export const DesignProvider = ({ children }) => {
  //Text tool context data
  const [texts, setTexts] = useState([]);
  const [textProps, setTextProps] = useState(null);

  const [action, setAction] = useState('select');
  const [showSideFile, setShowSideFile] = useState(false);

  //Rec
  const [rects, setRects] = useState([]);
  const [rectProps, setRectProps] = useState(null);


  const transformerRef = useRef();
  const currentEventRef = useRef();
  const indexRef = useRef();

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
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};
