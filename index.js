function receivesAFunction(Named1){
    return Named1()
};
const namedFunction=function(){}
function returnsANamedFunction(){
    return function namedFunction(){}
}
function returnsAnAnonymousFunction(){
    return function (){}
}