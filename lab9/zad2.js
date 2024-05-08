
class book {
    users = [];

    addUser(name, age, phone){
        this.users.push({name, age, phone})
    }

    showUsers(){
        console.log(this.users)
    }

    findByName(name){
        console.log(this.users.find(user => user.name === name) ? name : false);
    }

    findByPhone(phone){
        console.log(this.users.find(user => user.phone == phone) ? phone : false);
    }

    getCount(){
        console.log(this.users.length)
    }
}

const books = new book();
books.addUser("John Doe", 25, "1234567890"); 
books.addUser("Jane Smith", 30, "9876543210"); 
books.showUsers();
books.findByName("John Doe")
books.getCount();


class Vehicle{

    constructor(brand){
        this.brand = brand;
        console.log("Vehicle test")
    }
}

class car extends Vehicle{
    test;
    constructor(){
        super("BMW")
        this.test = "default"
    }

    show(){
        console.log(this.brand)
    }
}

const car1 = new car();
car1.show();