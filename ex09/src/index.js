function myFunction(myObj, checkProp) {

    if (myObj.hasOwnProperty(checkProp)) {
        var myObj = myObj[checkProp];
        return myObj;
    }
    return "Not Found";


}
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "title"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "song"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "genre"));
console.log(myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "actor"));

myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "title")
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "song")
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "genre")
myFunction({ title: "Titanic", song: "My Heart Will Go On", genre: "drama" }, "actor")

module.exports = myFunction;