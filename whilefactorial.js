/*var i=0;
while(i<=10){
    console.log(i);
    i++;
}*/
/*var i=1;
var factorial=01;
while(i<=10){
    factorial=factorial*i;
    i++;
}
console.log(factorial);*/
function factorial(n) {
    var i = 1;
    var factorial = 01;
    while (i <= 10) {
        factorial = factorial * i;
        i++;
        console.log(factorial);
    }

    return factorial;
}
var resulat = factorial(6);
console.log(resulat);