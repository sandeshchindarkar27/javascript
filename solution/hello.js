var count = 0;
console.log ("Hello , World!");
count++;
console.log("This Program Has Been Run" +count+ "times.");
var fullname = "pratik Gole";
let status = false;
var character = "A";

var product = {
    id:1,
    name:"Sample Product",
    price:9.99

};

var strProduct = JSON.stringify(product);

function getCount(){
    return count;
}

function addition(a,b){
    return a+b;
}

console.log ("fullname: " +fullname);
console.log ("Status: " +status);
console.log ("Character: " +character);
console.log ("Product: " +strProduct);
console.log ("Addition Of 5 And 10 :" +addition(5,10));

var oldProduct=JSON.parse(strProduct);
console.log ("Old Product Name: " +oldProduct.name);
