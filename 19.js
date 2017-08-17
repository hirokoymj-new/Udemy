"use strict";

function Person(first_name, last_name){
    this.first_name = first_name;
    this.last_name = last_name;
}
Person.prototype.full_name = function () {
    return this.first_name +  " " + this.last_name;
}
