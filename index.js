// Access HTML elements
const billInput = document.querySelector("#bill");
const ratePercentageSelect = document.querySelector("#ratePercentage");
const numPeopleInput = document.querySelector("#numPeople");
const tipResult = document.querySelector("#tip");

function calculate() {
    // Gets the values of the input fields
    const bill = parseFloat(billInput.value);
    const ratePercentage = parseInt(ratePercentageSelect.value);
    const numPeople = parseInt(numPeopleInput.value);

    // Checks if the values are valid
    if (!isNaN(bill) && !isNaN(ratePercentage) && !isNaN(numPeople) && numPeople > 0) {
        // Calcula a gorjeta total
        const tipTotal = (bill * ratePercentage) / 100;

        // Calculate tip per person
        const tipPerPerson = tipTotal / numPeople;

        // Display the result in the HTML element
        tipResult.innerHTML = `Gorjeta por pessoa: R$ ${tipPerPerson.toFixed(2)}`
    } else {
        // Displays an error message if values are not valid
        document.querySelector("#tipResult")
        tipResult.innerHTML = "Valores inválidos.";
    }
};