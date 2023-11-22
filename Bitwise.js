var a = 2, b = 3;

function BitwiseAnd(){
    var result = (a & b);
    if(result){
        return result; //2
    }else{
        return false;
    }
}

function BitWiseOr(){
    var result = (a | b);
    if(result){
        return result; // 3 
    }else{
        return false;
    }
}

function BitWiseXOR(){
    var result = (a ^ b);
    if(result){
        return result; //1
    }else{
        return false;
    }
}

function BitwiseNot(){
    var result = (~b);
    if(result){
        return result;
    }else{
        return false;
    }
}

function LeftShift(){
    var result = (a << 1);
    if(result){
        return result; //4
    }else{
        return false;
    }
}

function RightShift(){
    var result = (a >> 1);
    if(result){
        return result; // 1
    }else{
        return false;
    }
}

console.log(BitwiseAnd());
console.log(BitWiseOr());
console.log(BitWiseXOR());
console.log(BitwiseNot());
console.log(LeftShift());
console.log(RightShift());