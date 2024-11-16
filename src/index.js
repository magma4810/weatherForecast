import "./style.css";
import { init } from "./init.js";
import { clearStorage } from "./clearStorage";

async function start(div) {
  init(div);
  clearStorage(div);
}

start(document.createElement("div"));
