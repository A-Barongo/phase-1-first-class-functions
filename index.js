function receivesAFunction(fxn){
    return fxn()
}
receivesAFunction(function(){'This is the structure of a callback fuction'})

function returnsANamedFunction(){
    return (function innerFunction(){console.log("This is the structure of a first class function")})
}

function returnsAnAnonymousFunction(){
    return (function(){"this is a first class function that returns an anonymous function"})
}