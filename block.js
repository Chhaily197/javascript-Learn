var block = function(){
    //Remember the current scope. Make a new scopt that includes everything from the current one.
    var oldScope = scope();
    scope = Object.create(scope);

    //Advance past the left curly brace.
    advane('{');
    //Parse using the new scope
    parseFloat(scope);
    //Advance past the right curly brace and discard the new scope, restoing the old one.
    advane('}');
    scope = oldScope;

}