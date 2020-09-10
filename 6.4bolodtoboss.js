

function squaresum(number){
    
    var sum=0;
    for(var i=1;i<=number;i++){
        var element=i*i;
        sum=sum+element;
    }
    return sum;
}
var v=squaresum(4);
console.log(v);
