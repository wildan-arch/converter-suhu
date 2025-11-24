function setupTemperatureConverter() {
  const celsiusInput = document.getElementById("celsius");
  const fahrenheitInput = document.getElementById("fahrenheit");

  celsiusInput.addEventListener("input", function () {
    const celsiusValue = parseFloat(this.value) || 0;
    fahrenheitInput.value = ((celsiusValue * 9) / 5 + 32).toFixed(2);
  });

  fahrenheitInput.addEventListener("input", function () {
    const fahrenheitValue = parseFloat(this.value) || 0;
    celsiusInput.value = (((fahrenheitValue - 32) * 5) / 9).toFixed(2);
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
  });
} else {
  console.error("Element dengan id 'reset' tidak ditemukan");
}
