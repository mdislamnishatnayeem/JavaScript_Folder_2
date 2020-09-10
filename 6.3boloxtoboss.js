



function getLeastCommonMultiple(first,second){
    var multiple=first*second;
    while(second){
        var temp=second;
        second=first%second;
        first=temp;
    }
    return multiple/first;
}

var v=getLeastCommonMultiple( 2,5);
console.log(v);
