let value = +prompt("Enter the number", 0);
function fib(n) {
  if (n <= 1) {
    return n;
  } else {
    n = fib(n - 1) + fib(n - 2);
    return n;
  }
}
alert(fib(value));
