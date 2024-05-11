import { React, useState } from "react";
import { Stage, Layer, Rect, Circle, Text, Transformer } from "react-konva";

function Canvas() {
  const [selected, setSelected] = useState(false);
  const [text, setText] = useState("Edit me");
  const [fillColor, setFillColor] = useState("red");

  return (
      <div className="canvas bg-white">
        <Stage width={300} height= {300}>
          <Layer>
            <Text
              text={text}
              fontSize="50"
              fontFamily="calibri"
              fontStyle="bold"
              textDecoration="underline"
              fill={fillColor}
              stroke="black"
              align="left"
              draggable="true"
              onClick={() => setSelected(true)}
              onTransformEnd={(e) => {
                // Update text properties after transformation
                setText(e.currentTarget.attrs.text);
              }}
            />
            {/* {selected && (
              <Transformer
                ref={(node) => {
                  // Save reference to Transformer instance
                  this.transformer = node;
                }}
                keepRatio={false}
              />
            )} */}
          </Layer>
        </Stage>
      </div>
  );
}

export default Canvas;
