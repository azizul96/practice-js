const Phones =[
    { name : "Samsung", camera : 50, storage: "64gb", price: 500000, color: "white"},
    { name : "Xiaomi", camera : 108, storage: "64gb", price: 40000, color: "black" },
    { name : "Realme", camera : 64, storage: "64gb", price: 20000, color: "red" },
    { name : "Nokia", camera : 20, storage: "64gb", price: 30000, color: "blue" },
    { name : "i-phone", camera : 13, storage: "64gb", price: 90000, color: "silver" }
]

function cheapestPhone(phones){
    let cheapest = phones[0]
    for(let i=0; i<Phones.length; i++){
        let phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const mySelection = cheapestPhone(Phones);
console.log(mySelection);