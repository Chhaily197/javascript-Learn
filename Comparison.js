var a = 10, b= 20;

function Equal(){
    if(a == b){
        return true;
    }else{
        return false;
    }
}

function NotEqual(){
    if(a !== b){
        return true;
    }else{
        return false;
    }
}

function GreaterThan(){
    if(a > b){
        return true;
    }else{
        return false;
    }
}

function LessThan(){
    if(a < b){
        return true;
    }else{
        return false;
    }
}

function GreaterThenEqual(){
    if(a >= b ){
        return true;
    }else{
        return false;
    }
}
console.log(Equal());
console.log(NotEqual());
console.log(GreaterThan());
console.log(LessThan());
console.log(GreaterThenEqual());