import * as img from "../images/react.svg"

function createRandomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

let atomMap = new Map();
function createRandomAtom(id, x, y) {
  let neighborhood = 150;
  let atoms = document.querySelector(".atoms");
  
  var image;
  if (atomMap.has(id)) {
    image = atomMap.get(id);
  } else {
    image = new Image();
    image.src = img;
    image.style.position = "absolute";
    image.style.transition = "all ease-in-out 600ms";
    atoms.appendChild(image);
    atomMap.set(id, image);
  }

  image.width = createRandomNumberBetween(30, 60);
  image.style.left =
    createRandomNumberBetween(x + 5, x - 10 + neighborhood) + "px";
  image.style.top =
    createRandomNumberBetween(y + 5, y - 10 + neighborhood) + "px";
}

function createBackgroundPattern() {
  let neighborhood = 150;
  var i = 0;
  for (var x = 0; x < window.screen.width; x += neighborhood) {
    for (var y = 0; y < window.screen.height; y += neighborhood) {
      createRandomAtom(i, x, y);
      i++;
    }
  }
}
// document.getElementById("logo").onclick = createBackgroundPattern;

export {
  createBackgroundPattern
}
