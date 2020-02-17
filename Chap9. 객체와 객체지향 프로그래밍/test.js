const Person = (function () {
    function Person(name) {
        this._name = name;
        this.sayHi = function () {
            console.log("Hi~" + this._name);
        };
    }

    // Person.prototype.sayHi = function() {
    //     console.log("Hi~" + this._name);
    // }

    return Person;
})();

const me = new Person("Lee");
me.sayHi();