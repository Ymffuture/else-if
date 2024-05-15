

function checkEligibility() {
  
    var age = document.getElementById("age").value;
    var isMember = document.getElementById("membership").checked;

    age = parseInt(age);

    let warningSymbol = '\u26A0';
    let checkMark = "\u2713";

    let resultMessage = '';

    if (age >= 65) {
        resultMessage = "You are eligible for a senior discount!";
    } else if (age >= 18 && isMember) {
        resultMessage = `${checkMark} You are eligible for a member discount!`;
    } else {
        resultMessage = `${warningSymbol} You are not eligible for a discount.`;
    }

    document.getElementById("output").innerText = resultMessage;
}
