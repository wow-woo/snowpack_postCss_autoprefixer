import "../_sass_/style.css.proxy.js";
// import "./style.sass";
import { greeting } from "./hello.js";

greeting();
import confetti from "../web_modules/canvas-confetti.js";
confetti.create(document.getElementById("canvas"), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
