function countingValleys(steps, path) {
  //hikes always start and end at sea level
  let seaLevel = 0;
  let valley = 0;

  for (let i = 0; i < path.length; i++) {
    if (path[i] == "D") {
      seaLevel += -1;
    } else if (path[i] == "U") {
      seaLevel += 1
    }

    if (path[i] == "U" && seaLevel == 0) {
      valley++;
    }
  }

  return valley;
}


console.log(countingValleys(8, ['U', 'D', 'D', 'D', 'U', 'D', 'U', 'U']))
