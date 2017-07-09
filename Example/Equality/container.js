// example for use operator equality in Java Script non strict == and strict ===

var a = 123;
var b = "123";

// comprobation of equality non strict

if (a == b) {
  alert("if equality");
} else {
  alert("not equality");
}

// comprobation of equality very strict, evaluate value of the variable

if (a === b) {
  alert("if equality");
} else {
  alert("not equality");
}