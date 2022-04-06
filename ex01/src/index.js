var myPet = {
    species: 'Pitbull',
    name: 'Riki',
    legs: 4,
    friends: ['Tiki', 'Taki']
};

function myFunction(myObj) {
    return myObj;
}


console.log(myFunction(myPet));
module.exports = { myPet, myFunction };