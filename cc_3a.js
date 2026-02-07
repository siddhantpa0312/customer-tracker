let customers = [
    {
        name:"Jon Snow",
        email:"lordcommander@gmail.com",
        purchases:["Sword","Coat"]
    },
    {
        name:"Arya",
        email:"noone@gmail.com",
        purchases:["Dagger, Needle"]
    }
];

customers.push({
    name:"Tyrion",
    email:"tyrionlannister@gmail.com",
    purchases: ["Books, Wine"]
})

customers.shift()

customers[0].email ="ladyofWinterfell.com"

customers[1].purchases.push("Pin");

customers.forEach(function(customer){
    console.log(`Name: ${customer.name}, Email: ${customer.email}, Purchases: ${customer.purchases}`)
}
);