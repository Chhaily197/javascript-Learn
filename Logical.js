var a = 10, b = 20;

function LogicalAnd(){
    if( a && b){
        return true;
    }else{
        return false;
    }
}

function LogicalOr(){
    if(a || b){
        return true;
    }else{
        return false;
    }
}

function LogicalNotAnd(){
    if (!(a && b)){
        return true;
    }else{
        return false;
    }
}

console.log(LogicalAnd());
console.log(LogicalOr());
console.log(LogicalNotAnd());