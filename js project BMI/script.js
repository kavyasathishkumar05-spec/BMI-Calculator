function calculateBMI() {
    const heightInput = document.getElementById("height");
    const weightInput = document.getElementById("weight");
    const result = document.getElementById("result");

    const heightStr = heightInput.value.trim();
    const weightStr = weightInput.value.trim();

    // Validate empty fields
    if (heightStr === "" || weightStr === "") {
        result.textContent = "Please enter both height and weight.";
        return;
    }

    const height = Number(heightStr);
    const weight = Number(weightStr);

    // Validate measurements
    if (!Number.isFinite(height) || height < 50 || height > 250) {
        result.textContent = "Enter a valid height between 50 and 250 cm.";
        return;
    }

    if (!Number.isFinite(weight) || weight < 10 || weight > 500) {
        result.textContent = "Enter a valid weight between 10 and 500 kg.";
        return;
    }

    // Convert centimetres to metres
    const heightInMetres = height / 100;

    // Calculate BMI
    const bmi = weight / (heightInMetres * heightInMetres);

    let category;
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 25) {
        category = "Healthy weight range";
    } else if (bmi < 30) {
        category = "Overweight";
    } else {
        category = "Obesity range";
    }

    // Display result safely
    result.textContent = `Your BMI: ${bmi.toFixed(1)} | Category: ${category}`;
}

function resetBMI() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").textContent = "";
}