const { spy } = require("chai");

function receivesAFunction(callback){
    callback(spy);

}

function returnsANamedFunction(){
    
    return function namedFunction(){
        return ;
    }

    }


function returnsAnAnonymousFunction(){
    return function(){
        
    }

}