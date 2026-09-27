let glasses = 0;

function calculateBMI() {
  let w = parseFloat(document.getElementById("weight").value);
  let h = parseFloat(document.getElementById("height").value);

  if (!w || !h) {
    document.getElementById("bmiResult").innerHTML = "Enter weight and height.";
    return;
  }

  let bmi = w / (h * h);
  let status = bmi < 18.5 ? "Underweight"
             : bmi < 25 ? "Normal"
             : bmi < 30 ? "Overweight" : "Obese";

  document.getElementById("bmiResult").innerHTML =
    `BMI: ${bmi.toFixed(2)} (${status})`;

  updateDashboard();
}

function checkAnemia() {
  let hb = parseFloat(document.getElementById("hb").value);

  if (!hb) {
    document.getElementById("anemiaResult").innerHTML = "Enter hemoglobin.";
    return;
  }

  let risk = hb < 11 ? "🔴 High Risk"
           : hb < 12 ? "🟡 Medium Risk"
           : "🟢 Low Risk";

  document.getElementById("anemiaResult").innerHTML = risk;
  updateDashboard();
}

function updateDashboard() {
  let w = parseFloat(document.getElementById("weight").value) || 50;
  let hb = parseFloat(document.getElementById("hb").value) || 12;

  let score = 100;
  if (hb < 12) score -= 15;

  document.getElementById("healthScore").innerHTML = score + "%";
  document.getElementById("waterResult").innerHTML =
    "💧 Water Goal: " + ((w * 35) / 1000).toFixed(1) + " L/day";

  document.getElementById("dietResult").innerHTML =
    hb < 12
      ? "🥬 Iron-rich diet: Spinach, Beetroot, Dates, Lentils, Jaggery."
      : "🥗 Balanced diet: Milk, Paneer, Dal, Fruits, Vegetables.";
}

function addGlass() {
  if (glasses < 8) glasses++;
  document.getElementById("glassCount").innerHTML =
    glasses + " / 8 Glasses";
}

function checkSleep() {
  let hours = parseFloat(document.getElementById("sleepHours").value);
  document.getElementById("sleepResult").innerHTML =
    hours >= 7 ? "😴 Healthy Sleep" : "⚠️ Sleep at least 7–8 hours";
}

function generateMeal() {
  document.getElementById("breakfast").innerHTML = "Oats + Banana + Milk";
  document.getElementById("lunch").innerHTML = "Dal + Rice + Salad";
  document.getElementById("snacks").innerHTML = "Dates + Almonds";
  document.getElementById("dinner").innerHTML = "Paneer + Chapati + Vegetables";
}

function generateReport() {
  document.getElementById("report").innerHTML =
    "<b>AI Health Report Generated Successfully!</b>";
}
