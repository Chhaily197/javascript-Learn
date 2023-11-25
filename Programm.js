var sum = function(){
    var i , sum = 0;
    for(i = 0; i< arguments.length; i+= 1){
        sum += arguments[i];
    }
    return sum;
}

document.writeln(sum(4,8,15,23,16,42));

var add = function(a, b){
    if(typeof a !== 'number' || typeof b !== 'number'){
        throw{
            name: "TypeError",
            message: 'add needs numbers'
        };
    }
    return a + b;
}

var try_it = function(){
    try {
        document.writeln(add(5,3))
    } catch (error) {
        document.writeln(error.name, error.message);
    }
}
try_it();

var myObject = (function() {
    var result = [];

    return{
        increment: function(inc){
            value += typeof inc === 'number' ? inc : 1;
        },
        getValue: function(){
            return value;
        }
    };
}());

var fade = function(node){
    var level = 1;
    var step = function(){
        var hex = level.toString(16);
        node.style.backgroundColor = '#ff0000' + hex + hex;
        if(level < 15){
            level += 1; 
            setTimeout(step, 100);
        }
    };

    setTimeout(step, 100);
}
fade(document.body);