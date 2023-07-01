// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to handle button click event
function convertTemperature() {
    var celsiusInput = document.getElementById("celsiusInput");
    var result = document.getElementById("result");
    var resultSection = document.getElementById("resultSection");
    
    var celsius = parseFloat(celsiusInput.value);
    
    if (isNaN(celsius)) {
        result.textContent = "Invalid input";
    } else {
        var fahrenheit = convertCelsiusToFahrenheit(celsius);
        result.textContent = celsius + "°C is equal to " + fahrenheit.toFixed(2) + "°F";
    }
    
    resultSection.classList.remove("hidden");
}

// Add event listener for button click
var convertBtn = document.getElementById("convertBtn");
convertBtn.addEventListener("click", convertTemperature);
