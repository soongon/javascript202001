var myObject = {
    id: 15,
    title: 'today is good',
    content: 'good',
    likes: 20
};

console.log(Object.keys(myObject));

Object.keys(myObject).map(function (item) {
    console.log(myObject[item]);
});

console.dir(myObject);

var myArr = [1,2,3,4];

myArr.id = 'hello';

console.dir(myArr);


var myFunc = function (a, b) {
    console.dir(arguments);

    Array.prototype.push.apply(arguments, [500]);

    console.dir(arguments);

    return a + b;
};

console.dir(myFunc);

console.dir(myFunc(23,45,16));

function a() {
    
}


