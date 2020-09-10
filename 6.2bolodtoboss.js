
function evenNumber(n){
    if(n<1){
        return 1;
    }
    return 2*evenNumber(n-1);
}
var v=evenNumber(1);
console.log(v);
