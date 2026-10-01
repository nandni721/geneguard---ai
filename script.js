// =====================================================
// GeneGuard AI - Complete Working JavaScript
// =====================================================

let glasses = 0;

// =====================================================
// HELPER FUNCTION
// =====================================================

function getValue(id) {
  const element = document.getElementById(id);
  return element ? element.value : "";
}

// =====================================================
// BMI CALCULATOR
// =====================================================

function calculateBMI() {

  const w = parseFloat(getValue("weight"));
  const h = parseFloat(getValue("height"));

  const result = document.getElementById("bmiResult");

  if (!w || !h || w <= 0 || h <= 0) {
    result.innerHTML = "⚠️ Please enter valid weight and height.";
    return;
  }

  const bmi = w / (h * h);

  let status = "";

  if (bmi < 18.5) {
    status = "🟡 Underweight";
  } else if (bmi < 25) {
    status = "🟢 Normal";
  } else if (bmi < 30) {
    status = "🟠 Overweight";
  } else {
    status = "🔴 Obese";
  }

  result.innerHTML =
    "BMI: <b>" + bmi.toFixed(2) + "</b> | " + status;

  updateDashboard();
}


// =====================================================
// ANEMIA RISK PREDICTOR
// =====================================================

function checkAnemia() {

  const hb = parseFloat(getValue("hb"));

  const result = document.getElementById("anemiaResult");

  if (!hb || hb <= 0) {
    result.innerHTML =
      "⚠️ Please enter a valid hemoglobin value.";
    return;
  }

  let risk = "";

  if (hb < 11) {
    risk = "🔴 High Anemia Risk";
  } else if (hb < 12) {
    risk = "🟡 Medium Anemia Risk";
  } else {
    risk = "🟢 Low Anemia Risk";
  }

  result.innerHTML = risk;

  updateDashboard();
}


// =====================================================
// PERSONALIZED AI DASHBOARD
// =====================================================

function updateDashboard() {

  const weight =
    parseFloat(getValue("weight")) || 0;

  const hb =
    parseFloat(getValue("hb")) || 12;

  const age =
    parseInt(getValue("age")) || 0;

  const gender =
    getValue("gender");


  // ---------------------------------------------
  // HEALTH SCORE
  // ---------------------------------------------

  let score = 100;


  // Anemia effect
  if (hb < 11) {
    score -= 25;
  } else if (hb < 12) {
    score -= 15;
  }


  // BMI effect
  if (weight > 0) {

    const height =
      parseFloat(getValue("height")) || 0;

    if (height > 0) {

      const bmi =
        weight / (height * height);

      if (bmi < 18.5) {
        score -= 5;
      } else if (bmi >= 30) {
        score -= 10;
      } else if (bmi >= 25) {
        score -= 5;
      }
    }
  }


  // Sleep effect
  const sleep =
    parseFloat(getValue("sleepHours")) || 0;

  if (sleep > 0 && sleep < 7) {
    score -= 5;
  }


  // Steps effect
  const steps =
    parseInt(getValue("steps")) || 0;

  if (steps > 0 && steps < 5000) {
    score -= 5;
  }


  // Keep score between 0 and 100
  score = Math.max(0, Math.min(100, score));


  const scoreElement =
    document.getElementById("healthScore");

  if (scoreElement) {
    scoreElement.innerHTML =
      score + "%";
  }


  // ---------------------------------------------
  // PERSONALIZED WATER GOAL
  // ---------------------------------------------

  if (weight > 0) {

    const water =
      (weight * 35) / 1000;

    const waterElement =
      document.getElementById("waterResult");

    if (waterElement) {

      waterElement.innerHTML =
        "💧 Daily Water Goal: " +
        water.toFixed(1) +
        " L/day";
    }
  }


  // ---------------------------------------------
  // PERSONALIZED AI DIET
  // ---------------------------------------------

  const dietElement =
    document.getElementById("dietResult");

  if (!dietElement) return;


  let diet = "";


  if (hb < 11) {

    diet =
      "🩸 Iron-rich plan: Spinach, beetroot, lentils, " +
      "dates, jaggery and vitamin-C rich fruits.";

  } else if (hb < 12) {

    diet =
      "🥬 Iron-support plan: Green leafy vegetables, " +
      "lentils, beans, dates and vitamin-C rich fruits.";

  } else {

    diet =
      "🥗 Balanced plan: Milk, paneer, dal, " +
      "whole grains, fruits and vegetables.";
  }


  if (age > 0 && age < 18) {

    diet +=
      " Include adequate protein and nutritious meals " +
      "for healthy growth.";

  }


  if (gender === "Female") {

    diet +=
      " Include iron and folate-rich foods regularly.";
  }


  dietElement.innerHTML = diet;
}


// =====================================================
// WATER TRACKER
// =====================================================

function addGlass() {

  if (glasses < 8) {
    glasses++;
  }

  const element =
    document.getElementById("glassCount");

  if (element) {

    element.innerHTML =
      glasses + " / 8 Glasses 💧";
  }


  updateDashboard();
}


// =====================================================
// SLEEP TRACKER
// =====================================================

function checkSleep() {

  const hours =
    parseFloat(getValue("sleepHours"));

  const result =
    document.getElementById("sleepResult");

  if (!hours || hours < 0) {

    result.innerHTML =
      "⚠️ Please enter your sleep hours.";

    return;
  }


  if (hours >= 8) {

    result.innerHTML =
      "😴 Excellent! You are getting enough sleep.";

  } else if (hours >= 7) {

    result.innerHTML =
      "😴 Healthy Sleep! Keep it up.";

  } else if (hours >= 5) {

    result.innerHTML =
      "🟡 Try to get at least 7–8 hours of sleep.";

  } else {

    result.innerHTML =
      "🔴 Very low sleep. Aim for 7–8 hours.";
  }


  updateDashboard();
}


// =====================================================
// STEP TRACKER
// =====================================================

function checkSteps() {

  const steps =
    parseInt(getValue("steps"));

  const result =
    document.getElementById("stepResult");

  if (isNaN(steps) || steps < 0) {

    result.innerHTML =
      "⚠️ Please enter your steps.";

    return;
  }


  if (steps >= 10000) {

    result.innerHTML =
      "🏆 Excellent! 10,000+ steps completed.";

  } else if (steps >= 8000) {

    result.innerHTML =
      "🎉 Great! Your 8,000-step goal is completed.";

  } else {

    result.innerHTML =
      "🚶 You have " +
      (8000 - steps) +
      " steps left to reach 8,000.";
  }


  updateDashboard();
}


// =====================================================
// CALORIE CALCULATOR
// =====================================================

function calculateCalories() {

  const weight =
    parseFloat(getValue("weight"));

  const age =
    parseInt(getValue("age")) || 25;

  const gender =
    getValue("gender");

  const result =
    document.getElementById("calorieResult");


  if (!weight || weight <= 0) {

    result.innerHTML =
      "⚠️ Enter your weight first.";

    return;
  }


  // Simple estimate for this demo
  let calories =
    weight * 30;


  // Small age adjustment
  if (age > 50) {
    calories -= 100;
  }


  if (gender === "Male") {
    calories += 150;
  }


  calories =
    Math.max(1200, Math.round(calories));


  result.innerHTML =
    "🔥 Estimated Daily Calories: " +
    calories +
    " kcal/day";
}


// =====================================================
// AI MEAL PLANNER
// =====================================================

function generateMeal() {

  const hb =
    parseFloat(getValue("hb")) || 12;


  if (hb < 12) {

    document.getElementById("breakfast").innerHTML =
      "🥣 Oats + Banana + Milk";

    document.getElementById("lunch").innerHTML =
      "🍛 Dal + Spinach + Rice + Salad";

    document.getElementById("snacks").innerHTML =
      "🍎 Dates + Almonds + Vitamin-C fruit";

    document.getElementById("dinner").innerHTML =
      "🥗 Paneer + Chapati + Green Vegetables";

  } else {

    document.getElementById("breakfast").innerHTML =
      "🥣 Oats + Banana + Milk";

    document.getElementById("lunch").innerHTML =
      "🍛 Dal + Rice + Salad + Vegetables";

    document.getElementById("snacks").innerHTML =
      "🍎 Fruit + Almonds";

    document.getElementById("dinner").innerHTML =
      "🥗 Paneer + Chapati + Vegetables";
  }
}


// =====================================================
// AI HEALTH REPORT
// =====================================================

function generateReport() {

  const name =
    getValue("name") || "User";

  const bmi =
    document.getElementById("bmiResult");

  const anemia =
    document.getElementById("anemiaResult");

  const water =
    document.getElementById("waterResult");

  const diet =
    document.getElementById("dietResult");

  const score =
    document.getElementById("healthScore");

  const report =
    document.getElementById("report");


  report.innerHTML =
    "<h3>🧬 " +
    name +
    "'s AI Health Report</h3>" +

    "<p>⚖️ " +
    bmi.innerHTML +
    "</p>" +

    "<p>🩸 " +
    anemia.innerHTML +
    "</p>" +

    "<p>" +
    water.innerHTML +
    "</p>" +

    "<p>❤️ Health Score: <b>" +
    score.innerHTML +
    "</b></p>" +

    "<p>" +
    diet.innerHTML +
    "</p>" +

    "<hr>" +

    "<p>💧 Water Intake: " +
    glasses +
    " / 8 glasses</p>" +

    "<p>📋 This report is for educational purposes " +
    "and is not a medical diagnosis.</p>";
}


// =====================================================
// MAKE FUNCTIONS AVAILABLE TO HTML BUTTONS
// =====================================================

window.calculateBMI = calculateBMI;
window.checkAnemia = checkAnemia;
window.updateDashboard = updateDashboard;
window.addGlass = addGlass;
window.checkSleep = checkSleep;
window.checkSteps = checkSteps;
window.calculateCalories = calculateCalories;
window.generateMeal = generateMeal;
window.generateReport = generateReport;


// =====================================================
// INITIAL DASHBOARD
// =====================================================

document.addEventListener("DOMContentLoaded", function () {

  updateDashboard();

});
