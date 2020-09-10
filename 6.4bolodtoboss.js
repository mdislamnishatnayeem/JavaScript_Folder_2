//I have done it in iterative way
//The code bellow--


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




//Now I will do it in recursive way
//The code bellow

function squaresum(number){
    if(number==0){
        return 0;
    }
    else{
        return number*number+squaresum(number-1);
    }
}
var v=squaresum(3);
console.log(v);
