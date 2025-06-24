const celciusInput = document.getElementById("celcius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input");

for (let i = 0; i < inputs.length; i++) {
    let input = inputs[i];

    input.addEventListener("input", function (e) {
        let value = parseFloat(e.target.value);
        
        if (e.target.name === "celcius") {
           fahrenheitInput.value = (value * 1.8) + 32;
           kelvinInput.value = value + 273.15;
        }

     else if (e.target.name === "fahrenheit") {
             celciusInput.value = (value - 32) / 1.8;
             kelvinInput.value = ((value - 32) / 1.8) + 273.15;
    } 

    else if (e.target.name === "kelvin") {
            celciusInput.value = value - 273.15;
            fahrenheitInput.value = ((value - 273.15) * 1.8) + 32;
    }
    });
}