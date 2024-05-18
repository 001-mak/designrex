import { v4 as uuidv4 } from "uuid";

export function getRectInitialState() {
  let id = uuidv4();

  return {
    id: id,
    width:120,
    height:80,
    cornerRadius: 0,
    fill: "#D9230F",
    stroke: "#000000",
    strokeWidth: 1,
    opacity: 1,
    x:50,
    y:50,
  };
}
