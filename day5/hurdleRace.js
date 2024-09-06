function hurdleRace(k, height) {
  //k = the height the character can jump naturally
  //height = the height of each hurdleRace
  //
  //cada posion incrementa 1 unidada de para saltar
  //Si el player no necesita posion return 0

  let potion = 0;

  for (let i = 0; i < height.length; i++) {
    while (k < height[i]) {
      //take a potio
      potion += 1

      //increment the height jump
      k++;
    }
  }
  return potion;
}


console.log(hurdleRace(1, [1, 2, 3, 3, 2]))
