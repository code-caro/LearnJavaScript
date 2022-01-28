/*build javascript objects*/
const myDog = {
  "name": "Bello",
  "legs": 4,
  "tails": 1,
  "friends": ["Lucy", "Edgar"]
};

myDog.name = "Willi"; /* or myDog["name"] = "Willi"; */
myDog.bark = "woof";  /* or myDog["bark"] = "woof"; */
delete myDog["tails"]; /* or delete myDog.tails; */


/*using objects for lookups*/
// Setup
function phoneticLookup(val) {
  let result = "";
  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    "foxtrot": "Frank",
  }
  result = lookup[val];
  return result;
}

phoneticLookup("charlie");


/*testing objects for properties*/
function checkObj(obj, checkProp) {
  // Only change code below this line
  if (obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } 
    return "Not Found";
}


/*accessing nested objects*/
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];
