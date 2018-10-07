import img from "../../public/react.svg"

function createRandomNumberBetween(min, max) {
  return Math.random() * (max - min) + min;
}

const atomMap = new Map();
function createRandomAtom(id, x, y) {
  const neighborhood = 150;
  const atoms = document.querySelector(".atoms");
  
  let image;
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
    `${createRandomNumberBetween(x + 5, x - 10 + neighborhood)  }px`;
  image.style.top =
    `${createRandomNumberBetween(y + 5, y - 10 + neighborhood)  }px`;
}

function createBackgroundPattern() {
  console.log(img)
  const neighborhood = 150;
  let i = 0;
  for (let x = 0; x < window.screen.width; x += neighborhood) {
    for (let y = 0; y < window.screen.height; y += neighborhood) {
      createRandomAtom(i, x, y);
      i += 1;
    }
  }
}
// document.getElementById("logo").onclick = createBackgroundPattern;

export {
  createBackgroundPattern
}
