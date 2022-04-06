var myFood = {
    vegetable: "carrot",
    fruit: "orange",
    drink: "water"

};

function myFunction(myObj) {
    var vegetableValue = myFood["vegetable"];
    var fruitValue = myFood["fruit"];
    var drinkValue = myFood["drink"];

    return { vegetableValue, fruitValue, drinkValue }
}

console.log(myFunction(myFood));
module.exports = myFunction(myFood);