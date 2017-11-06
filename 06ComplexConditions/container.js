// the section is for example use check balance credit bank founds with complex conditions in Javascript
/* The structure is only used per test and is not recommended for general use, 
because there are better control structures in programming to differentiate values.
*/
var balance = 15000;

if (balance >= 0) {
  alert("the balance is positive");
  if (balance > 1000 ) {
    alert("the balance is very big")
  }
} else {
  alert("the balance is negative");
}