function bonAppetit(bill, k, b) {

  let totalBillWithK = 0;

  for (let i = 0; i < bill.length; i++) {
    if (i!== k) {
      totalBillWithK += bill[i]
    }
  }
  let shared = totalBillWithK/2;


  if (shared == b) {
    console.log("Bon Appetit")
  }
  else{
    console.log(b -shared);
  }
}
console.log(bonAppetit([3,10,2,9], 1, 12))
