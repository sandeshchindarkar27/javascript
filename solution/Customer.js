class Customer{
    constructor(name, email, age){
        this.name=name;
        this.email=email;
        this.age=age
    }

    showDetails(){
        console.log("Customer Name: " +this.name);
        console.log("Customer Email: " +this.email );
        console.log("Customer Age: " + this.age);
    }
}
    let customer1 = new Customer("pratik","pratygole@gmail.com",35);
    let customer2 = new Customer("Vishal", "vishal@gmail.com", 32);
    let customer3 = new Customer("sandesh" , "sandesh@gmail.com", 32);
    customer1.showDetails();
    customer2.showDetails();
    customer3.showDetails();



    
    
