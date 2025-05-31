//Your JavaScript goes in here
const vinSlider = document.getElementById("vin");
const r1Slider = document.getElementById("r1");
const r2Slider = document.getElementById("r2");

function updateValues() {
  const Vin = parseFloat(vinSlider.value);
  const R1 = parseFloat(r1Slider.value);
  const R2 = parseFloat(r2Slider.value);

  // Voltage across each resistor
  const Vr1 = (R1 / (R1 + R2)) * Vin;
  const Vr2 = (R2 / (R1 + R2)) * Vin;
  
  const Vout = (Vr1 + Vr2);
// ...
document.getElementById("oscVout").textContent = Vout.toFixed(2);

  //const Vout = Vr1 + Vr2; // For your simulation, you want this to equal Vin

  // Update sliders and table values
  document.getElementById("vinVal").textContent = Vin.toFixed(1);
  document.getElementById("r1Val").textContent = R1;
  document.getElementById("r2Val").textContent = R2;

  document.getElementById("vinTable").textContent = Vin.toFixed(1);
  document.getElementById("r1Table").textContent = R1;
  document.getElementById("r2Table").textContent = R2;
  document.getElementById("vr1Table").textContent = Vr1.toFixed(2);
  document.getElementById("vr2Table").textContent = Vr2.toFixed(2);
  document.getElementById("voutTable").textContent = Vout.toFixed(2);
  document.getElementById("oscVout").textContent = Vout.toFixed(2);

  // Draw Vout on oscilloscope
  const canvas = document.getElementById("oscilloscopeCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const maxVoltage = 10; // Max scale for visualization
  const y = canvas.height - (Vout / maxVoltage) * canvas.height;

  ctx.beginPath();
  ctx.moveTo(0, y);
  ctx.lineTo(canvas.width, y);
  ctx.strokeStyle = "lime";
  ctx.lineWidth = 2;
  ctx.stroke();
}

vinSlider.addEventListener("input", updateValues);
r1Slider.addEventListener("input", updateValues);
r2Slider.addEventListener("input", updateValues);

updateValues(); // Initial load