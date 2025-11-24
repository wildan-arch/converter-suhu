function setupTemperatureConverter() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");
  const reamurInput = document.getElementById("reamur");
  const kelvinInput = document.getElementById("kelvin");

  celsiusInput.addEventListener("input", function () {
    const celsiusValue = parseFloat(this.value) || 0;
    fahrenheitInput.value = ((celsiusValue * 9) / 5 + 32).toFixed(2);
    reamurInput.value = (celsiusValue * 0.8).toFixed(2);
    kelvinInput.value = (celsiusValue + 273.15).toFixed(2);
  });

  fahrenheitInput.addEventListener("input", function () {
    const fahrenheitValue = parseFloat(this.value) || 0;
    celsiusInput.value = (((fahrenheitValue - 32) * 5) / 9).toFixed(2);
    reamurInput.value = (((fahrenheitValue - 32) * 4) / 9).toFixed(2);
    kelvinInput.value = (((fahrenheitValue - 32) * 5) / 9 + 273.15).toFixed(2);
  });
  reamurInput.addEventListener("input", function () {
    const reamurValue = parseFloat(this.value) || 0;
    celsiusInput.value = (reamurValue * 1.25).toFixed(2);
    fahrenheitInput.value = (reamurValue * 2.25 + 32).toFixed(2);
    kelvinInput.value = (reamurValue * 1.25 + 273.15).toFixed(2);
  });
  kelvinInput.addEventListener("input", function () {
    const kelvinValue = parseFloat(this.value) || 0;
    celsiusInput.value = (kelvinValue - 273.15).toFixed(2);
    fahrenheitInput.value = (((kelvinValue - 273.15) * 9) / 5 + 32).toFixed(2);
    reamurInput.value = ((kelvinValue - 273.15) * 0.8).toFixed(2);
  });
}

// Jalankan sekali saat halaman dimuat
document.addEventListener("DOMContentLoaded", setupTemperatureConverter);
// Solusi: Cek apakah element exists
const resetButton = document.getElementById("reset");
if (resetButton) {
  resetButton.addEventListener("click", function () {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("reamur").value = "";
    document.getElementById("kelvin").value = "";
  });
} else {
  console.error("Element dengan id 'reset' tidak ditemukan");
}
