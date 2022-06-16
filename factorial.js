
function fac() {

    let number = document.getElementById("t1").value;
    if (number < 0) {
        console.log('Error! Factorial for negative number does not exist.');
    }
    else if (number === 0) {
        console.log(`The factorial of ${number} is 1.`);
    }
    else {
        let fact = 1;
        for (i = 1; i <= number; i++) {
            fact *= i;
        }
        document.getElementById("b1").innerHTML = "factorial number of:" + number + "value is" + fact;
    }
}