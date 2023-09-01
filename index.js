// Acessa os elementos HTML
const billInput = document.querySelector("#bill");
const ratePercentageSelect = document.querySelector("#ratePercentage");
const numPeopleInput = document.querySelector("#numPeople");
const tipResult = document.querySelector("#tip");

function calculate() {
    // Obtém os valores dos campos de entrada
    const bill = parseFloat(billInput.value);
    const ratePercentage = parseInt(ratePercentageSelect.value);
    const numPeople = parseInt(numPeopleInput.value);

    // Verifica se os valores são válidos
    if (!isNaN(bill) && !isNaN(ratePercentage) && !isNaN(numPeople) && numPeople > 0) {
        // Calcula a gorjeta total
        const tipTotal = (bill * ratePercentage) / 100;

        // Calcula a gorjeta por pessoa
        const tipPerPerson = tipTotal / numPeople;

        // Exibe o resultado no elemento HTML
        tipResult.innerHTML = `Gorjeta por pessoa: R$ ${tipPerPerson.toFixed(2)}`
    } else {
        // Exibe uma mensagem de erro se os valores não forem válidos
        document.querySelector("#tipResult")
        tipResult.innerHTML = "Valores inválidos.";
    }
};