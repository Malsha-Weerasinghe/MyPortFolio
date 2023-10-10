//you can store data like as follows
var customerDB = [
    {id: "C00-001", name: "Malsha Amandi", address: "Matara", salary: 100000},
    {id: "C00-002", name: "Senali Jayathma", address: "Weligama", salary: 200000},
    {id: "C00-003", name: "Randi Lakma", address: "Galle", salary: 300000}
];

var itemDB = [
    {code:"I00-001",name:"Skirt",qty: 100,price: 145.00},
    {code:"I00-002",name:"Blouse",qty: 150,price: 345.00},
    {code:"I00-003",name:"Trouser",qty: 400,price: 245.00}
];

var orderDB = [
    {oid:"OID-001", date:"2023/10/06", customerID:"C00-001",
        orderDetails:[
            {oid:"OID-001", code:"I00-001", qtyOnHand:10, unitPrice:145.00},
            {oid:"OID-001", code:"I00-002", qtyOnHand:2, unitPrice:345.00}
        ]
    }
];
let orderDetailDb=[];

let orderDb=[];