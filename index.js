let pointhome = document.getElementById("box1");
let pointaway = document.getElementById("box2");
let reset = document.getElementById("reset");

let counthome = 0;
let countaway = 0;

function onepointhome() {
    counthome += 1;
    pointhome.textContent = counthome;
}

function twopointhome() {
    counthome += 2;
    pointhome.textContent = counthome;
}

function threepointhome() {
    counthome += 3;
    pointhome.textContent = counthome;
}

function onepointaway() {
    countaway += 1;
    pointaway.textContent = countaway;
}

function twopointaway() {
    countaway += 2;
    pointaway.textContent = countaway;
}

function threepointaway() {
    countaway += 3;
    pointaway.textContent = countaway;
}

function resetboth() {
    counthome = 0;
    countaway = 0;
    pointhome.textContent = counthome;
    pointaway.textContent = countaway;
}

reset.addEventListener("click", resetboth);
