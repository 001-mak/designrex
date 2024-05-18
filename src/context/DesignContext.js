import React, { createContext, useContext, useState, useRef } from 'react';

const DesignContext = createContext();

export const useDesignContext = () => useContext(DesignContext);

export const DesignProvider = ({ children }) => {

  //Text tool context data
  const [texts, setTexts] = useState([]);
  const [textProps, setTextProps] = useState(null);
  const [showTextProp, setShowTextProp] = useState(false);
  const [showSideFile, setShowSideFile] = useState(false);
  
  //Rec
  const [rectangles, setRectangles] = useState([]);

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
        showTextProp,
        setShowTextProp,
        showSideFile,
        setShowSideFile,
        transformerRef,
        currentEventRef,
        indexRef,
        rectangles,
        setRectangles
      }}
    >
      {children}
    </DesignContext.Provider>
  );
};
