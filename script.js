// script.js

function calculateBMI() {
    var height = parseFloat(document.getElementById('height').value);
    var weight = parseFloat(document.getElementById('weight').value);

    if (isNaN(height) || isNaN(weight)) {
        document.getElementById('result').innerText = "Please enter valid height and weight.";
        return;
    }

    var bmi = weight / ((height / 100) ** 2);
    bmi = bmi.toFixed(2);

    var resultText = `Your BMI is: ${bmi}. You are `;
    if (bmi < 18.5) {
        resultText += "underweight.";
    } else if (bmi < 25) {
        resultText += "healthy weight.";
    } else if (bmi < 30) {
        resultText += "overweight.";
    } else {
        resultText += "obese.";
    }

    document.getElementById('result').innerText = resultText;
}
