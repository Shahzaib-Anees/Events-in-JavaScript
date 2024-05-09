let counterText = document.getElementById("counter");
let counter = 0;

counterText.innerHTML = `You have visits ${counter} times`;

function valueCounter(elem, str) {
    if (str === "Increase") {
        counter++;
        counterText.innerHTML = `You have visits ${counter} times`;
        console.log("Counter Increased");
    } else if (str === "Decrease") {
        counter--;
        counterText.innerHTML = `You have visits ${counter} times`;
        console.log("Counter Decreased");
    }
}