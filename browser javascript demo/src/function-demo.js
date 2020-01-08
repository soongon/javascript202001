

var sayHello2 = function (name) {
    return name + '님 안녕2!';
};


console.dir(sayHello2);



function sayHello(name) {
    return name + '님 안녕!';
}


var adder = function (a=0, b=0) {
    console.log(a);
    return a + b;
};

console.log(adder());
console.log(adder(1));
console.log(adder(1, 2));
console.log(adder(1, 2, 3));
