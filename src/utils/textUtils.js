import { v4 as uuidv4 } from "uuid";

export const textInitialState = {
  id: uuidv4(),
  text: "Text Here",
  fontSize: 50,
  fontFamily: "Arial",
  fontStyle: "normal",
  textDecoration: "",
  fill: "#7431F9",
  stroke: "#ffffff",
  strokeWidth: 0,
  align: "left",
};

export  function getTextInitialState(){
  let id = uuidv4()

  return{
  id: id,
  text: "Text Here",
  fontSize: 50,
  fontFamily: "Arial",
  fontStyle: "normal",
  textDecoration: "",
  fill: "#7431F9",
  stroke: "#ffffff",
  strokeWidth: 0,
  align: "left",
  }
}
