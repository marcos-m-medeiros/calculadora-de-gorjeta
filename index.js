// Acessa os elementos HTML
const billInput = document.getElementById("bill");
const ratePercentageSelect = document.getElementById("ratePercentage");
const numPeopleInput = document.getElementById("numPeople");
const tipResult = document.getElementById("tip");

// Adiciona um evento de clique ao botão "Calcular"
function calculate() {
    // Obtém os valores dos campos de entrada
    const bill = parseFloat(billInput.value);
    const ratePercentage = parseFloat(ratePercentageSelect.value);
    const numPeople = parseInt(numPeopleInput.value);

    // Verifica se os valores são válidos
    if (!isNaN(bill) && !isNaN(ratePercentage) && !isNaN(numPeople) && numPeople > 0) {
        // Calcula a gorjeta total
        const tipTotal = (bill * ratePercentage) / 100;

        // Calcula a gorjeta por pessoa
        const tipPerPerson = tipTotal / numPeople;

        // Exibe o resultado no elemento HTML
        tipResult.textContent = `Gorjeta por pessoa: R$ ${tipPerPerson.toFixed(2)}`;
    } else {
        // Exibe uma mensagem de erro se os valores não forem válidos
        tipResult.textContent = "Valores inválidos.";
    }
};