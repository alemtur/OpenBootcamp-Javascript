var factorial = 10;
var contador = 10;
while (true) {
    factorial = factorial * (contador - 1);
    contador--;
    if (contador < 2) {
        break;
    }
}
console.log(factorial);