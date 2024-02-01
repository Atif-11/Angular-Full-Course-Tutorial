export interface User {
    name: string;
    age?: number;
    id: number;
    email: string;
}

let {name: userName, email: userLogin}: User = {name: "John", age: 18, id: 1, email: ""};

interface Employees extends User{
    salary: number;
}

let employee: Employees = {name: "Mia", id: 2, email: "", salary: 10000};


export interface Login{
    login(): User;
}


let [user1, user2, ...restUsers]: User[] = [
{name: "Bruce", id: 3, email:""},
{name: "Wayne", id: 4, email:""},
{name: "Brett", id: 5, email:""},
{name: "Lee", id: 6, email:""},
{name: "Sean", id: 7, email:""}];

console.log(user1);
console.log(user2);
console.log(restUsers);

let result = restUsers.filter(user=> user.id > 3);

console.log(result);




