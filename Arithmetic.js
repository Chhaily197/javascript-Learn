function sayHello(){
    alert("Hello world");
}

let a = 10;
let b = 20;

function Addition(){
    var result = a + b;
    return `Add: ${a} + ${b} = ` + result;
}

function Subtraction(){
    var result = a - b;
    return `Sub: ${a} - ${b} = ` + result;
}

function Multiplecation(){
    var result = a * b;
    return `Multi: ${a} x ${b} = ` + result;
}

function Division(){
    var result = a / b;
    return `Multi: ${a} / ${b} = ` + result;
}

function Modulus(){
    var result = a % b;
    return `Multi: ${a} % ${b} = ` + result;
}

function Increment(){
    var result = a--;
    return `Increment: ${a} = ` + result;
}

function Decrement(){
    var result = a--;
    return `Decrement: ${a} = ` + result;
}

document.getElementById('Addition').innerHTML = Addition();
document.getElementById('Subtraction').innerHTML = Subtraction();
document.getElementById('multi').innerHTML = Multiplecation();
document.getElementById('division').innerHTML = Division();
document.getElementById('modulus').innerHTML = Modulus();
document.getElementById('increment').innerHTML = Increment();
document.getElementById('decrement').innerHTML = Decrement();