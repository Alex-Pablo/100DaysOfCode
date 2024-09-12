function beautifulDays(i, j, k) {
  //i =start
  //j = end
  //k = divisor
  let beautDays = 0;
  while (i <= j) {
    let iDayReverse = parseInt(i.toString().split('').reverse().join(''), 10);
    let difference = Math.abs(i - iDayReverse)

    if (difference % k === 0) {
      beautDays++;
    }
    i++;
  }
  return beautDays
}

console.log(beautifulDays(20, 23, 6))
