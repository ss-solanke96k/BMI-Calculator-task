document.getElementById("calculate").addEventListener("click", function () {

    let height = document.getElementById("heightInput").value;
    let weight = document.getElementById("weightInput").value;
    let resultField = document.getElementById("result");

    if (height === "" || weight === "") {
        resultField.value = "Enter all values";
        return;
    }

    height = parseFloat(height) / 100;
    weight = parseFloat(weight);

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let message = "";

if (bmi < 18.5) {
    message = "Underweight - Not Healthy";
} 
else if (bmi >= 18.5 && bmi < 25) {
    message = "Normal - You are Healthy";
} 
else if (bmi >= 25 && bmi < 30) {
    message = "Overweight - Take Care";
} 
else {
    message = "Obese - Health Risk";
}

    resultField.value = "Your BMI is: " + bmi + " (" + message + ")";
});