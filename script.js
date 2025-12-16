// Fibonacci, Even and Odd Numbers

var n = prompt("Enter the value of n:");
n = parseInt(n);

function fibonacci() {
  var a = 0, b = 1, c;
  var result = "";

  for (var i = 0; i < n; i++) {
    result += a + " ";
    c = a + b;
    a = b;
    b = c;
  }
  document.getElementById("output").innerText = result;
}

function evenNumbers() {
  var result = "";
  for (var i = 0; i < n; i++) {
    result += (i * 2) + " ";
  }
  document.getElementById("output").innerText = result;
}

function oddNumbers() {
  var result = "";
  for (var i = 0; i < n; i++) {
    result += (i * 2 + 1) + " ";
  }
  document.getElementById("output").innerText = result;
}
