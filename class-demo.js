class MyCls {
    constructor() {
        this._id = 0;
        this._title = 'hello';
    }
    get id() {
        console.log('inside get method');
        if (this._id) return this._id;
    }
    set id(id) {
        console.log('inside set method');
        if (id) this._id = id;
    }
    testMethod() {
        return 'hello';
    }
}
const myObj = new MyCls();
myObj.id = 30;

console.log(myObj.id);
