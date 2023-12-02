Object.method('superior', function(name){
    var that = this;
    method = that[name];
    return function(){
        return method.apply(that, arguments);
    };
});

var coolcat = function(spce){
    var that = cat(spce);
    super_get_name = that.superior('get_name')
    that.get_name = function(n){
        return 'like' + super_get_name() + 'baby';
    };
    return that;
};
var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get_name();
console.log(myCoolCat);
console.log(name);