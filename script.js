function calculate() {
  const weight = parseFloat(document.getElementById("weight").value);
  const dose = parseFloat(document.getElementById("dose").value);
  const drug = document.getElementById("drug").value;
  const resultBox = document.getElementById("result");

  if (!weight || !dose || !drug) {
    alert("Please fill all fields");
    return;
  }

  let concentration; // mcg/mL
  let drugName;

  switch (drug) {
    case "norepinephrine":
      // 4 mg in 100 mL
      concentration = 4000 / 100;
      drugName = "Norepinephrine";
      break;

    case "dobutamine":
      // 250 mg in 250 mL
      concentration = 250000 / 250;
      drugName = "Dobutamine";
      break;

    case "dopamine":
      // 200 mg in 200 mL
      concentration = 200000 / 200;
      drugName = "Dopamine";
      break;

    case "amiodarone":
      // 150 mg in 100 mL
      concentration = 150000 / 100;
      drugName = "Amiodarone";
      break;
  }

  // Core calculations
  const mcgPerMin = dose * weight;
  const mlPerMin = mcgPerMin / concentration;
  const mlPerHour = mlPerMin * 60;
  const dropsPerMin = mlPerMin * 60; // microdrip

  resultBox.style.display = "block";
  resultBox.innerHTML = `
    <h3>${drugName} Infusion</h3>
    <p><strong>Dose:</strong> ${dose} mcg/kg/min</p>
    <p><strong>Total drug delivery:</strong> ${mcgPerMin.toFixed(2)} mcg/min</p>
    <p><strong>Infusion rate:</strong></p>
    <ul>
      <li>${mlPerHour.toFixed(1)} mL/hour</li>
      <li>${dropsPerMin.toFixed(1)} microdrops/min (60 gtt/mL)</li>
    </ul>
  `;
}
