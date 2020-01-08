var myArr = [1, 2, 3, 4, 5, 6, 7, 8];

myArr.length = 10;

myArr.push('hello');

// for (var i = 0; i < myArr.length; i++) {
//     console.log(myArr[i]);
// }

myArr.forEach(function (item) {
    console.log(item + ' from functional..');
});


console.dir(myArr);

var mapTest = [1,2,3,4];

var newArray = mapTest.map(function (item) {
    return item + 3;
});

console.log(newArray);

