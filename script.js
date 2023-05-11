// This function clear all the values
function clearScreen() {
    document.getElementById("result").value = "";
}

// This function display values
function display(value) {
    document.getElementById("result").value += value;
}

// This function evaluates the expression and return result
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

function getCity() {
  var x = document.getElementById("country").value;
  var items;
  if (x === "uk") {
    items = ["London", "Leeds", "Glasgow"];
  } else {
    items = ["New York City", "Ottawa", "Singapore"]
  }
  var str = ""
  for (var item of items) {
    str += "<option>" + item + "</option>"
  }
  document.getElementById("pickone").innerHTML = str;
}