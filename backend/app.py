print("🧬 Welcome to GeneGuard AI")

name = input("Enter your name: ")
weight = float(input("Weight (kg): "))
height = float(input("Height (m): "))

bmi = weight / (height * height)

print("Hello", name)
print("Your BMI is:", round(bmi, 2))

if bmi < 18.5:
    print("Status: Underweight")
elif bmi < 25:
    print("Status: Healthy")
else:
    print("Status: Overweight")
