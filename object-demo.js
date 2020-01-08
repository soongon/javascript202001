
const id = 10;
const title = 'hello';


const myObj = {
    id,
    title,
    greet() {
        return 'hello';
    }
}

function test (obj) {
    let id = 0;
    let title = '';
    ({id, title} = obj);
    console.log(id + ' ' + title);
}

test({
    id: 30,
    title: 'hello'
});


const post = {
    id: 10,
    title: 'hello',
    content: 'aaa',
    picUrl: 'http://....',
    likes: 50,
    tags: ['', '', '', ''],
    comments: [
        {
            replyId: 101,
            author: {
                firstName: 'soongon',
                lastName: 'kim'
            },
            content: 'hello',
            date: '2020..'
        },
        {
            replyId: 101,
            author: 'kim',
            content: 'hello',
            date: '2020..'
        },
        {}
    ]
}


const myArr = [1,2,3];

let [a, b, c, d=0] = myArr;



