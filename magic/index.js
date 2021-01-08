import "/_sass_/style.sass";
// import "./style.sass";
import { greeting } from "./hello";

greeting();
import confetti from "canvas-confetti";
confetti.create(document.getElementById("canvas"), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
