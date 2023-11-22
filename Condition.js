var a = 10, b = 20;
function Condition(){
    var result = (a > b) ? 100 : 200;
    return result;
}

function CheckType(){
    var x = 10;
    var b = 'string';
    // var result = (typeof b == 'string' ? "B is string" : "B is Numberic");
    var result = (typeof a == 'string' ? 'A is string' : 'A is numberic');
    return result;
}

console.log(Condition());
console.log(CheckType()); 