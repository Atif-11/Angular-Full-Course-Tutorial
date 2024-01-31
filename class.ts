interface Address {
    street: string;
    city: string;
    state: string;
    pin: string
}

// In typescript multiparameters constructors are not allowed.
class Employee{
    // We can use '#'  to declare private attributes
    #id!: number;
    name!: string;
    address: Address;

    get empId(): number {
        return this.#id;
    }

    set empId(id: number) {
        this.#id = id;
    }

    static getEmployeeCount() {
        return 50;
    }

    constructor(id: number, name: string, address:  Address){
        this.#id = id;
        this.name = name;
        this.address = address;
    }

    getNameWithAddress(): string{
        return `${this.name} lives near ${this.address}`;
    }
}

class Manager extends Employee {

    constructor(id: number, name: string, address: Address){
        super(id, name, address);
    }

    getNameWithAddress(): string {
        return `${this.name} is a manager at ${this.address}`;
    }
}


let john = new Employee(1, "John",{street: "ABC", city: "East London", state: "UK", pin: "560076"});
// Using setter method to update John's employee id
john.empId = 100;
console.log(john.empId);

// Employee.getEmployeeCount();
let address = john.getNameWithAddress();
console.log(address);


let mike = new Manager(2, 'Mike', {street: "ABC", city: "West London", state: "UK", pin: "560076"});
let address1 = mike.getNameWithAddress();
console.log(address1);