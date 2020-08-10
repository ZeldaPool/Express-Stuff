var faker = require('faker');
console.log("======================")
console.log("WELCOME TO MY SHOP!!!!")
console.log("======================")

			

for(var i=0; i<10; i++){
	
	var pro = faker.commerce.productName();
	var pri = faker.commerce.price();
	console.log(pro +" - $" +pri);
}

