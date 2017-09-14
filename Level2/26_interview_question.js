// for (var i = 0; i < 5; i++) {
//     (function(){
//         var y = i;
//         setTimeout(function() { console.log(y); }, y * 1000 );
//     })();
//
// }

//
// Scope
//
// var text = 'outside';
// function logIt(){
//     console.log(text);
//     var text = 'inside';
// };
// logIt();
//
//
// /// Hoisting
function test() {
    console.log(a);
    console.log(foo());

    var a = 1;
    function foo() {
        return 2;
    }
}
test();
//
//
// ///
//
// function test() {
//     var a;
//     function foo() {
//         return 2;
//     }
//
//     console.log(a);
//     console.log(foo());
//
//     a = 1;
// }
//
// test();


//https://www.sitepoint.com/5-typical-javascript-interview-exercises/
// Fix the previous question’s issue so that the last console.log() prints Aurelio De Rosa.

var fullname = 'John Doe';
var obj = {
    fullname: 'Colin Ihrig',
    prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
            return this.fullname;
        }
    }
};

console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test());