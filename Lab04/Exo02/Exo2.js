
function concatenation() {
    myColor = ["Red", "Green", "White", "Black"];
    console.log(myColor.toString());
    console.log(myColor.join());
    console.log(myColor.join(""));

    return myColor.toString();
}

exports.module = concatenation;
