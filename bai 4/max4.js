function Staff(fullname, email) {
    this.fullname = fullname;
    this.email = email;
    this.setFullname = function (fullname_value) {
        return this.fullname = fullname_value;
    }
    this.getFullname = function () {
        return this.fullname;
    }
    this.setEmail = function (email_value) {
        return this.email = email_value;
    }
    this.getEmail = function () {
        return this.email;
    }
    this.toString = function () {
        return `Full name : ${this.fullname} , Email : ${this.email}`;
    }
}
let david = new Staff("David", "david@gmail.com");
david.setFullname("David Do");
david.setEmail("david.do@gmail.com");
console.log(david.toString());
let staffs = [new Staff("Dat", "dat@gmail.com"),
new Staff("tri", "tri@gmail.com"),
new Staff("loc", "loc@gmail.com")];
for (let i = 0; i < staffs.length; i++) {
    console.log(staffs[i].toString());
}
