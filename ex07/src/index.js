var lion = {
    name: "Simba",
    legs: 4,
    tails: 1,
    roar: "roar-roar"
};

function myFunction(roar) {
    delete lion[roar];
    return lion;

}

console.log(myFunction("roar"));
myFunction(lion);
module.exports = myFunction;