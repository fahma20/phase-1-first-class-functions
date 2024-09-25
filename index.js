 function receivesAFunction (callback) {
  return callback ();
 }


 function returnsANamedFunction () {
    return function namedfunction () {
        console.log ("Hey, from a named function.");
    }
 }
 
 function returnsAnAnonymousFunction () {
    return function (){
        
    }
    console.log ("An anonymous function.");
 }