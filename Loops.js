/*while*/
// Setup
var myArray1 = [];
var i = 5;

while(i >= 0) {
  myArray1.push(i);
  i--;
}


/*for*/
// Setup
const myArray2 = [];

for (var i = 1; i <= 5; i++){
  myArray2.push(i);
}

// iterate odd numbers
const myArray3 = [];

for (var i = 1; i < 10; i += 2) {
  myArray3.push(i);
}

// iterate backwards
const myArray = [];

for (var i = 9; i > 0; i -= 2){
  myArray.push(i);
}


/*iterate through an array with a for loop*/
// Setup
const myArr = [2, 3, 4, 5, 6];
var total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i]; 
}
