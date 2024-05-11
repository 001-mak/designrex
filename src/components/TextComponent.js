import React from "react";
import { Text } from "react-konva";

function TextComponent(props) {
  const {
    id,
    text,
    fontSize,
    fontFamily,
    fontStyle,
    textDecoration,
    fillColor,
    stroke,
    align,
  } = props;
  return (
    <>
      <Text
        id={id}
        text={text}
        fontSize={fontSize}
        fontFamily={fontFamily}
        fontStyle={fontStyle}
        textDecoration={textDecoration}
        fill={fillColor}
        stroke={stroke}
        align={align}
        draggable="true"
        onClick
      />
    </>
  );
}

export default TextComponent;
