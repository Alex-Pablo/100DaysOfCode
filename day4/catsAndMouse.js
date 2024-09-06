function catAndMouse(x, y, z) {
  //x =cat  A = 2
  //y = cat B = 5
  //z = mouse= 4

  const catAAndMouse = Math.abs(x - z);
  const catBAndMouse = Math.abs(y - z);

  if (catAAndMouse == catBAndMouse) {
    return "Mouse C"
  } else if (catBAndMouse < catAAndMouse) {
    return "Cat B"
  } else {
    return "Cat A"
  }
}

console.log(catAndMouse(2, 3, 2));
