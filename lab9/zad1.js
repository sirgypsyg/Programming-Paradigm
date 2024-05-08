
currentUser = {
    name: "John",
    surname: "Snow",
    email: "johnsnow@mail.gmail",
    www: "www.johnsnow.com",
    userType: "Admin",
    isActive: true,

    show: function() {
        console.log(`Name: ${this.name}`);
        console.log(`Surname: ${this.surname}`);
        console.log(`Email: ${this.email}`);
        console.log(`Website: ${this.www}`);
        console.log(`User Type: ${this.userType}`);
        console.log(`Is Active: ${this.isActive}`);
    },

    setActive: function(state){
        this.isActive = state
    }
}

currentUser.show()
currentUser.setActive(false)
currentUser.show()



const car ={
    brand: "Ford",
    test: {
        test2: [2,3, "test"]
    },
    show: function(){
        console.log("Test", this.brand)
    }
}

const car2 ={
    brand: "Audi"
}

//car.show()

const cars = [car, car2]
