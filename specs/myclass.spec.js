var myClass= require("../src/myClass.js");

var obj1=  new myClass();
var assert =require("assert");


// we use first describe methode in the test suite

describe("test class results",function(){
    it("test the add methode",function(){
        assert.equal(obj1.add(1,3),5);
    });
});

// codeacademy code using three phase approch 
// setup ,exercise and Verify

// const assert = require('assert');

//   Naive approach
// describe('.pop', () => {
//   it('returns the last element in the array [naive]', () => {
//     assert.ok(['padawan','knight'].pop() === 'knight'); 
//   });
// });

//  3 phase approach
// describe('.pop', () => {
//   it('returns the last element in the array [3phase]', () => {
//     // Setup
//     const knightString = 'knight';
//     const jediPath = [ 'padawan',knightString];

//     // Exercise
//     const popped = jediPath.pop();

//     // Verify
//     assert.ok(popped === knightString);
//   });
// });



// for some tests we need the fourth step called tear down ....


// node file system access (fs)
// for example

// const path='./message.js'
// const message="hello my name is asad";

// fs.appendFileSync(path,message)

// The call to fs.appendFileSync() will do one of two things:

// If a file at path does not exist, the method creates the file and adds the string str to that file.
// If the file does exist, the method adds the string str to the end of the file.


// const assert = require('assert');

// describe('+', () => {
//   it('returns the sum of two values', () => {
//     // Setup
// 		let expected = {a: 3, b: 4, result: 7};
// 		let sum = {a: 3, b: 4};

//     // Exercise
// 		sum.result = sum.a + sum.b;

//     // Verify
//     assert.deepEqual(sum, expected);
//   });
// });

// deep equal is for arrays and objects

// const assert = require('assert');

// describe('+', () => {
//   it('returns the sum of two values', () => {
//     // Setup
// 		let expected = [3, 4, 7];
// 		let sum = [3, 4];

//     // Exercise
// 		sum.push(3 + 4);

//     // Verify
//     assert.deepEqual(sum, expected);
//   });
// });


// not equal function
// const assert = require('assert');

// describe('Numbers', () => {
//   it('1 does not equal 2', () => {
//     // Verify
//     assert.notStrictEqual(1,2);
//   });
// });




