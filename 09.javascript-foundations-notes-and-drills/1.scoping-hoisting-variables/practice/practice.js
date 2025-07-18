// Topic 1: Variables & Scoping - Interview questions and solving..

// Question #1

function testScope() {
  console.log(x); //🔸 Output: undefined
  var x = 5;
}

testScope();

/**
 * Behind the scenes:
 * JavaScript internally hoists the var x declaration:
 function testScope() {
  var x;             // hoisted to the top of the function
  console.log(x);    // ✅ undefined
  x = 5;
}
* var is function-scoped, so x is accessible throughout testScope, but it's initialized to undefined until the assignment.
* testScope() is in global scope ✅
* Execution happens in function scope, not global, once the function is called
 */

// Question #2

var a = 1;
function scopeTest() {
  console.log(a);
  var a = 2;
}
scopeTest();

/**
 * Behind the scenes:
    var a;           // hoisted (undefined)
    console.log(a);  // undefined
    a = 2;

    a) var a = 1 in global scope is ignored inside the function because of shadowing.
    b) var a = 2 creates a new local a, which is hoisted.
    c) console.log(a) runs before assignment, so it prints undefined.    
    *
 */
