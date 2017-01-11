/**
 * Created by pelle on 1/10/2017.
 */
//--------------Use strict----------------
z=30;
console.log(z);

function myFoo() {
    "use strict";
    y = 34;
    console.log(y);
}

// ---------------hoisting----------------------
// hoisting deklarer funktioner/variabler inden de måske er deklaret.

console.log("Here is myVar undefined" + myVar)

var myVar = "something"

console.log("here is myVar defined" + myVar)

//-------------this--------------
// this referer til den globale context

function myFunc (){
    return this
}

//------------------Closures-----------------
// Closures giver scope.

var myClo1 = 10
function myCloFunc(){
    myCloGlobal = 5
    var myCloLocal = 6 // er lokal
    console.log(myCloLocal)
}
console.log(myClo1)
console.log(myCloGlobal)

//---------module pattern---------
var modularpattern = (function() {
// your module code goes here
   var sum = 0 ;
    return {
       add:function() {
       sum = sum + 1;
       return sum;
       },
    reset:function() {
       return sum = 0;
       }
   }
}());

console.log(modularpattern.add());  // returnerer 1
console.log(modularpattern.add());  // returnerer 2
console.log(modularpattern.reset());  //returnerer 0

//----------------Immediately-Invoked Function Expressions (IIFE)--------------
// gør man kan få functioner til at blive kørt med det samme

var myIIFE= (
    function(){
    return 50+10
}()
)
console.log(myIIFE)// er 60

//-----------Prototypes-----------

function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
    return this.firstName + " " + this.lastName;
};
Person.nationality = "Danish"

var p = new Person("s", "p", 12, "blue")
console.log(p.name()) //returnerer s p
console.log(p.nationality)  // returnerer undefined

function Person2(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
    this.nationality = "Danish"
}
p2.name = function() {
    return this.firstName + " " + this.lastName;
};
var p2 = new Person("s", "p", 12, "blue")
console.log(p2.name()) //returnerer s p
console.log(p2.nationality)  // returnerer Danish
//---------------debugger---------
// ved brug af run debugger kan man se hvad objekter arver
var a = {}
debugger;


//------------user defined callbacks-------------

function myFuncWithCB(x,callback){

    callback(x*5);
}

myFuncWithCB(2,function(data){
    console.log(data)
})

//-----------node.js and npm------------
//Forklar her

//------event loop---------------
// forklar

//------user modules-----------
var myModule = require('./example')
myModule.myImport()