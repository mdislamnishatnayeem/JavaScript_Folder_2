


function primefactors(n){
    var factors=[];
    var divisor=2;
    while(n>2){
        if(n%divisor==0){
            factors.push(divisor);
            n=n/divisor;
        }
        else{
            divisor++;
        }
    }
    return factors;
}

var v=primefactors(6);
console.log(v);
