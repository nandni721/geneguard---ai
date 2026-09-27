// GeneGuard AI - Final Script

let glasses = 0;

// BMI Calculator
function calculateBMI() {
  let w = parseFloat(document.getElementById("weight").value);
  let h = parseFloat(document.getElementById("height").value);

  if (!w || !h) {
    document.getElementById("bmiResult").innerHTML =
      "⚠️ Enter weight and height.";
    return;
  }

  let bmi = w / (h * h);

  let status =
    bmi < 18.5 ? "🟡 Underweight" :
    bmi < 25 ? "🟢 Normal" :
    bmi < 30 ? "🟠 Overweight" :
    "🔴 Obese";

  document.getElementById("bmiResult").innerHTML =
    "BMI: " + bmi.toFixed(2) + " | " + status;

  updateDashboard();
}

// Anemia Prediction
function checkAnemia() {
  let hb = parseFloat(document.getElementById("hb").value);

  if (!hb) {
    document.getElementById("anemiaResult").innerHTML =
      "⚠️ Enter hemoglobin value.";
    return;
  }

  let risk =
    hb < 11 ? "🔴 High Anemia Risk" :
    hb < 12 ? "🟡 Medium Anemia Risk" :
    "🟢 Low Anemia Risk";

  document.getElementById("anemiaResult").innerHTML = risk;

  updateDashboard();
}

// Dashboard Update
function updateDashboard() {
  let w = parseFloat(document.getElementById("weight").value) || 50;
  let hb = parseFloat(document.getElementById("hb").value) || 12;

  let score = 100;
  if (hb < 12) score -= 15;

  document.getElementById("healthScore").innerHTML = score + "%";

  document.getElementById("waterResult").innerHTML =
    "💧 Daily Water Goal: " + ((w * 35) / 1000).toFixed(1) + " L/day";

  document.getElementById("dietResult").innerHTML =
    hb < 12
      ? "🥬 Eat spinach, beetroot, dates, jaggery, lentils and vitamin-C rich fruits."
      : "🥗 Balanced diet with milk, paneer, dal, fruits and vegetables.";
}

// Water Tracker
function addGlass() {
  if (glasses < 8) glasses++;

  document.getElementById("glassCount").innerHTML =
    glasses + " / 8 Glasses";
}

// Sleep Tracker
function checkSleep() {
  let hours = parseFloat(document.getElementById("sleepHours").value);

  document.getElementById("sleepResult").innerHTML =
    hours >= 7
      ? "😴 Healthy Sleep! Keep it up."
      : "⚠️ Sleep at least 7–8 hours daily.";
}

// Step Tracker
function checkSteps() {
  let steps = parseInt(document.getElementById("steps").value);

  document.getElementById("stepResult").innerHTML =
    steps >= 8000
      ? "🎉 Goal Completed! Great job."
      : "🚶 Walk more to reach 8000 steps.";
}

// Calorie Calculator
function calculateCalories() {
  let w = parseFloat(document.getElementById("weight").value) || 0;

  let calories = Math.round(w * 30);

  document.getElementById("calorieResult").innerHTML =
    "🔥 Estimated Daily Calories: " + calories + " kcal";
}

// AI Meal Planner
function generateMeal() {
  document.getElementById("breakfast").innerHTML =
    "🥣 Oats + Banana + Milk";

  document.getElementById("lunch").innerHTML =
    "🍛 Dal + Rice + Salad";

  document.getElementById("snacks").innerHTML =
    "🍎 Dates + Almonds";

  document.getElementById("dinner").innerHTML =
    "🥗 Paneer + Chapati + Vegetables";
}

// AI Health Report
function generateReport() {
  let name =
    document.getElementById("name").value || "User";

  document.getElementById("report").innerHTML =
    "<b>" + name + "'s AI Health Report</b><br><br>" +
    document.getElementById("bmiResult").innerHTML + "<br>" +
    document.getElementById("anemiaResult").innerHTML + "<br>" +
    document.getElementById("waterResult").innerHTML + "<br>" +
    "❤️ Health Score: " +
    document.getElementById("healthScore").innerHTML + "<br>" +
    document.getElementById("dietResult").innerHTML + "<br><br>" +
    "✅ Stay hydrated and follow a healthy lifestyle.";
}
