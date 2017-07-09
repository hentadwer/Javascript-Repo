// the control structure switch help to compare many values in only one 
// you are can add cases for comparation whit the structure switch
// in the example i use fuel to compare priece and type 
// remember define the var whit value do you need to compare 

var fuel = "super100";

switch (fuel) {
  case "Diesel":
    alert("1,25$");
    break;
  case "super98":
    alert("1,40$");
    break;
  case "super99":
    alert("1,50$");
    break;
    //you can add to the script default value, for inexisting keyword in the data base 
  default:
    alert("your keyword is not present in the catalog of fuel")
}