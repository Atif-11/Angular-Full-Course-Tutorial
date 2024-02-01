"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let { name: userName, email: userLogin } = { name: "John", age: 18, id: 1, email: "" };
let employee = { name: "Mia", id: 2, email: "", salary: 10000 };
let [user1, user2, ...restUsers] = [
    { name: "Bruce", id: 3, email: "" },
    { name: "Wayne", id: 4, email: "" },
    { name: "Brett", id: 5, email: "" },
    { name: "Lee", id: 6, email: "" },
    { name: "Sean", id: 7, email: "" }
];
console.log(user1);
console.log(user2);
console.log(restUsers);
let result = restUsers.filter(user => user.id > 3);
