var school = {
    name: "Arena",
    location: "Sarajevo",
    established: "2020"

};

function myFunction(name) {
    school.name = name;
    return school;


}
console.log(myFunction("Paragon"));
myFunction("Paragon");
module.exports = { school, myFunction };