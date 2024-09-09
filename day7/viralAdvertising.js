function viralAdvertising(n) {
  //Day = n
  let shared = 5;
  let cumulative = 0;
  for (let i = 0; i < n; i++) {
    let liked = Math.floor((shared / 2));
    shared = liked * 3;
    cumulative += liked;
  }
  return cumulative;
}


console.log(viralAdvertising(5))
