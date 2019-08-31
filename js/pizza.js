const makePizza = (cheese, meat, crust) => {
  console.log(`I want a ${meat} and ${cheese} pizza on ${crust} crust`)
}

// makePizza("cheddar", "bacon", "thin"); 
// makePizza("swiss", "veggie", "deep dish"); 
// makePizza("mexican", "ham", "thin"); 

function giveMePizza (cheese, meat, crust) {
    return `I want a ${meat} and ${cheese} pizza on ${crust} crust`;
}

const newPizza = giveMePizza("blue cheese", "veggies", "thin");
console.log(newPizza);

 const pizzaArray = [
   {
     cheese: "mozz",
     meat: "ham",
     crust:  "thin",
   } , 
   {
    cheese: "mozz",
    meat: "ham",
    crust:  "thin",
  } ,
  {
    cheese: "mozz",
    meat: "ham",
    crust:  "thin",
  } 
 ]

//  for (let i =0; i < pizzaArray.length; i++) {
//     makePizza(pizzaArray[i].cheese, pizzaArray[i].meat, pizzaArray[i].crust)  
// }

pizzaArray.forEach((pizza) => {
   makePizza(pizza.cheese, pizza.meat, pizza.crust)
})