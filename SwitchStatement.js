/*Selecting from Many Options with Switch Statements*/
function caseInSwitch(val) {
  let answer = "";
  switch(val) {
  case 1:
    answer = "alpha";
    break;
  case 2:
    answer = "beta";
    break;
  case 3:
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
}
  return answer;
}

caseInSwitch(1);


/*Adding a default option in switch statements */
function switchOfStuff(val) {
  let answer = "";
  switch (val) {
  case "a":
    answer = "apple";
    break;
  case "b":
    answer = "bird";
    break;
  case "c":
    answer = "cat";
    break;
  default:
    answer = "stuff";
  }
  return answer;
}

switchOfStuff(1);
