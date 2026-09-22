print("🧬 GeneGuard AI - Health Risk Checker")

name = input("Enter your name: ")
weight = float(input("Weight (kg): "))
height = float(input("Height (m): "))
hb = float(input("Hemoglobin (g/dL): "))

bmi = weight / (height * height)

print("\nHello", name)
print("BMI:", round(bmi, 2))

# BMI Result
if bmi < 18.5:
    print("BMI Status: Underweight")
elif bmi < 25:
    print("BMI Status: Healthy")
else:
    print("BMI Status: Overweight")

# Anemia Risk
if hb < 11:
    print("Anemia Risk: HIGH 🔴")
elif hb < 12:
    print("Anemia Risk: MEDIUM 🟠")
else:
    print("Anemia Risk: LOW 🟢")
