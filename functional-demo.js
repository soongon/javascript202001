// 데이터를 앱내에서 처리하고자 할 때 사용
// 3가지 함수의 사용법을 숙지..

// map, filter, reduce

const sampleData = [23, 45, 65, 67, 65, 34, 89];

// 1. filter 작업
const result = [];
for (let i = 0; i < sampleData.length; i++) {
    if (sampleData[i] >= 50) {
        result.push(sampleData[i]);
    }
}
const functionalResult = 
    sampleData.filter(item => item >= 50);

console.log(result + ' from imperative');
console.log(result + ' from functional');

// 2. map 작업
const newResult = []
for (let i = 0; i < sampleData.length; i++) {
    newResult.push(sampleData[i] * 2 - 3);
}

const mapResult = sampleData.map(item => item * 2 - 3);

// 3. reduce 작업
const sum = [12].reduce((a, b) => a * b);

console.log('sum is ' + sum);