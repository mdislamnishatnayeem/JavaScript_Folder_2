function  greatestCommonDivisor(a,b){
    var divisor=2;
    var greatestDivisor=1;
    
   if(a<2||b<2){
       return 1;
   }
   while(a>=divisor&&b>=divisor){
       if(a%divisor==0&&b%divisor==0){
           greatestDivisor=divisor;
       }
       divisor++;
   }
   return greatestDivisor;
}

var v=greatestCommonDivisor(66,55);
console.log(v);


//আমি নিজে রিকার্সন পদ্ধতিতে একটি কোড দিচ্ছি।
// এই কোডটা ঝংকার মাহবুব ভাইয়া
// এর ওয়েবসাইট থেকে নেওয়া!!! যদিও আমি
// নিজেও কোডটি বুঝিনি

function greatestCommonDivisor(a,b){
    if(b==0){
 
        return a;
    }
    else{
        return greatestCommonDivisor(b,a%b);
   }
}

var v=greatestCommonDivisor(23,23);
console.log(v);
