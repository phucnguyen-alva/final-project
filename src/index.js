import "./styles.css";

const rive = require("@rive-app/canvas");

const r = new rive.Rive({
  src: "read_the_air.riv",
  canvas: document.getElementById("canvas"),
  autoplay: true,
  stateMachines: "Drinks_MainScene",
  onLoad: () => {
    r.resizeDrawingSurfaceToCanvas();
  },
});

