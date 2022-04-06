var lion = {
    name: "Simba",
    legs: 4,
    tails: 1
};

function myFunction(roar, roarValue) {
    lion[roar] = roarValue;
    return lion;

}

console.log(myFunction("roar", "roar-roar"));
myFunction(lion);
module.exports = myFunction;