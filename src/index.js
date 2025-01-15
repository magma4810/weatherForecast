import "./style.css";
import { init } from "./init.js";

async function start(div) {
  init(div);
}

start(document.createElement("div"));
