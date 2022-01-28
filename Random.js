/*generate random fractions*/
function randomFraction() {
  var result = 0;
  while (result === 0){
    result = Math.random();
  }
  return result;
}

/*generate random whole numbers*/
function randomWholeNum() {
  var result = 0;
  while (result === 0) {
    result = Math.floor(Math.random()*10);
  }
  return result;
}

/*generate random whole number within a range*/
function randomRange(myMin, myMax) {
  var result = 0;
  while (result === 0) {
    result = Math.floor(Math.random() * (myMax - myMin +1)) + myMin;
  }
  return result;
}
