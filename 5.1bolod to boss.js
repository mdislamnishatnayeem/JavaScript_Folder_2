

function factorial(number){
    if(number<1){
        return 1;
    }
    return number*factorial(number-1);
}
var v=factorial(6);
console.log(v);
