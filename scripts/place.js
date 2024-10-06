new Date().getFullYear()
const currentyear = document.getElementById("currentyear").innerHTML = new Date().getFullYear();

let oLastModif = document.getElementById("lastModified").innerHTML = new Date(document.lastModified);

// windchill in METRIC SYSTEM time, thanks copilot for the formula??

// seems to line up with the National Weather Service's calculator

const temperature = 9;
const windSpeed = 16;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature - 11.37 * (windSpeed ** 0.16) + 0.3965 * temperature * (windSpeed ** 0.16);
}

// BLESS AMERICAIASDKM
if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    document.querySelector('#windchill').innerHTML = `${windChill.toFixed(1)} °C`;
} else {
    document.querySelector('#windchill').innerHTML = `N/A`;
}
