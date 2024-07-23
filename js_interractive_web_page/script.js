// Variables of different data types
var stringVariable = "Hello";
var numberVariable = 42;
var booleanVariable = true;

// Functions for simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Cannot divide by zero";
    }
}

function multiply(a, b) {
    return a * b;
}

// Function to perform calculations and update UI
function performCalculations() {
    var num1 = 10;
    var num2 = 5;

    var additionResult = add(num1, num2);
    var subtractionResult = subtract(num1, num2);
    var divisionResult = divide(num1, num2);
    var multiplicationResult = multiply(num1, num2);

    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Addition: ${additionResult}</p>
        <p>Subtraction: ${subtractionResult}</p>
        <p>Division: ${divisionResult}</p>
        <p>Multiplication: ${multiplicationResult}</p>
    `;

    console.log("Performed calculations");
}

// Chart.js integration
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

