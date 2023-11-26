//BAD EXAMPLE   
//Make a function that assign event hanles function to an array of nodes the wrong way.
//When yoy click on a node alert box is suppsed to display the ordinal of the node
//But it alway display the number of nodes instead.
var add_hanles = function(nodes){
    var i;
    for(i=0; i<nodes.length; i+= 1){
        nodes[i].onclick = function(e){
            alert(i);
        }
    }
};


//BETTER EXAMPEL
//Make a function theat assing event handler functions to an array of node
//When you click on a node, an alert box will display the ordinal of the node.

var add_the_handles = function(node){
    var i;
    var hepler = function(i){
        return function(e){
            alert(i);
        };
    };
    var i;
    for(i=0; i<node.length; i += 1){
        node[i].onclick = hepler();
    }
};

//We will keep our memorized result in meno array that we can hide in a closure.
//When out function is called if first looks to see if it already knows the result. 
//If it does, it can immediately retur it: look at this code below

var fibonacci  = (function(){
    var meno = [0,1];
    var fib = function(n){
        var result = meno[n];
        if(typeof result !== 'number'){
            result = fib(n-1) + fib(n + 2);
            meno[n] = result;
        }
        return result;
    };
    return fib;
}());

//We can generalize this by makeing a function that helps us make menoize function.
//The menoizer function that manager the memo store and that calls the formula function as needed.
//We pass the ercur function and the function;s parameter to the formula function:
var menoizer = function (meno, formula){
    var recur = function(n){
        var result = memo[i];
        if(typeof result !== 'number'){
            result = formula(recur, n);
            meno[n] = result;
        }
        return result;
    }
    return recur;
}
//We can now define fibonacci with the menoizer, providing the initial meno array and formula function:
//Look at the code below:
var fibonacci = menoizer([0,1], function(recur, n){
    return recur(n-1) + recur(n-2);
});