function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {

                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Billy",
            title: "Piano",
            release_year: 1980,
            formats: {

                1: "DV",
                2: "9Z",
                3: "KO"
            },
            gold: false
        }

    };

    return myMusic;
}
myFunction()[2];
console.log(myFunction()[2]);
module.exports = myFunction;