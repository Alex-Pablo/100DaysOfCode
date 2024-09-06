function breakingRecords(scores){

  let highest = scores[0];
  let lowest = scores[0];
  let result = [0, 0];

  scores.forEach(score => {
    if (score > highest) {
      highest = score;
      result[0] += 1; 
    } else if (score < lowest) {
      lowest = score;
      result[1] += 1; 
    }
  });

  return result;

}


console.log(breakingRecords([10, 5,20, 20,4,5,2,25,1]));
