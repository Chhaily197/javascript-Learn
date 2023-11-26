//We define a constructor and augment its prototype:
var Mammal = function(name){
    this.name = name;
};

Mammal.prototype.get_name = function(){
    return this.name;
};

Mammal.prototype.says = function(){
    return this.saying || '';
};

//Now, we can make an instance:
var myMammal = new Mammal("herb the Mammale");
var name = myMammal.get_name();

//We can maek another pseudocalss that inferts from Mammale by defining its constructor function and replacing its prototype with an instance of Mammale:
var Cat = function(name){
    this.name = name;
    this.saying = 'meow';
}
//Replacing cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();

//Augment the new prototype with purr and get_naem methods.

Cat.prototype.purr = function(n){
    var i, s = '';
    for(i=0; i<n; i+=1){
        if(s){
            s += '_';
        }
        s += 'r';
    }
    return s;
}
Cat.prototype.get_name = function(){
    return this.says() + " " + this.name + ' ' + this.says();
}
var myCat = new Cat("Henietta");
var says = myCat.says();
var purr = myCat.purr(s);
var name = myCat.get_name();

//Next example
Function.method('ingerits', function(Parent){
    this.prototype = new Parent();
    return this;
})