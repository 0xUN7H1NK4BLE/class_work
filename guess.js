let targetNumber = 5;
let inputNumber;

while (inputNumber !== targetNumber) {
  inputNumber = prompt("Enter a number:");
  inputNumber = Number(inputNumber);
}

console.log("You entered the correct number!");