"use strict";

var Module = (function () {
    // private

    var privateVariable = 1;
    var privateVariable = 2;

    // public
    // return an object
    return {
        publicMethod: function(){
            console.log("this is public method.");
        }
    };

}());

Module.publicMethod();

