function angryProfessor(k, a) {
  //k = treshold,
  //a = arrival times of n students

  let studentsArrivedOn = 0;

  a.forEach(element => {
    if (element <= 0) {
      studentsArrivedOn++;
    }
  });

  if (studentsArrivedOn >= k) {
    return "NO"
  } else {
    return "YES"
  }
}

console.log(angryProfessor(3, [-1, -3, 4, 2]))
