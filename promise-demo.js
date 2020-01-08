// fetch('http://www.naver.com', function (res) {
//     console.log(res);
// });

fetch('http://www.naver.com')
    .then(function (res) {
        console.log(res);
    })
    .catch(function (err) {
        console.log(err);
    });
