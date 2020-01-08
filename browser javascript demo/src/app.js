console.log('Hello world');

var myNumber = 5;
var myFloatNumber = 3.5;

console.log(myNumber);
console.log(myFloatNumber);

console.log(typeof myFloatNumber);

var myBoolean = true; // false

console.log(myBoolean);
console.log(typeof myBoolean);

var myString = 'Hello World!!!';

console.log(myString);
console.log(typeof myString);



// CRUD

var myObject = {
    id: 12,
    author: 'kim',
    title: '오늘도 좋은날',
    content: 'good',
    likes: 30,
    isMale: true,
    conmments: {},
    plusLike: function () {
        this.likes++;
    }
};

myObject.id = 13;
myObject.keyword = 'test';


console.log(myObject);


// var myArray = [12, 'kim', '오늘은 좋은날', 'good', 30, true, {}];

// console.log(myArray[2]);


// console.log(typeof myObject);