

function isPrime(n){
    var divisor=2;
    while(n>divisor){
        if(n%divisor==0){
            return false;
        }
        else{
            divisor++;
        }
    }
    return true;
}
var v=isPrime(4);

console.log(v);
