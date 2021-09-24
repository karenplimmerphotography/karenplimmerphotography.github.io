
// FUNCTION FACTORY TO CREATE NEW FOOD
const createNewFood = (name, volume, weeklyVolume, category, colour, price, energy, protein, netCarbs, fat, water, vitaminB1, vitaminB2, vitaminB3, vitaminB5, vitaminB6, vitaminB12, choline, folate, vitaminA, vitaminC, vitaminD, vitaminE, vitaminK, calcium, copper, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, zinc, carbs, fibre, starch, sugar, fructose, monosatFat, polyunsatFat, omega3, omega6, transFat, satFat, cholesterol, leucine, omegaRatio, zincCopperRatio, potassiumSodiumRatio, calciumMagnesiumRatio, showFood, favFood, topPriority, recommended) => {
  return {
    name,
    volume,
    weeklyVolume,
    category,
    colour,
    price,
    energy,
    protein,
    netCarbs,
    fat,
    water,
    vitaminB1,
    vitaminB2,
    vitaminB3,
    vitaminB5,
    vitaminB6,
    vitaminB12,
    choline,
    folate,
    vitaminA,
    vitaminC,
    vitaminD,
    vitaminE,
    vitaminK,
    calcium,
    copper,
    iron,
    magnesium,
    manganese,
    phosphorus,
    potassium,
    selenium,
    sodium,
    zinc,
    carbs,
    fibre,
    starch,
    sugar,
    fructose,
    monosatFat,
    polyunsatFat,
    omega3,
    omega6,
    transFat,
    satFat,
    cholesterol,
    leucine,
    omegaRatio,
    zincCopperRatio,
    potassiumSodiumRatio,
    calciumMagnesiumRatio,
    showFood,
    favFood,
    topPriority,
    recommended
  }
}

// CREATE NEW FOODS
const acai = createNewFood("acai berry", 0, 0, "fruit", "purple", 0, 61, 0.82, 1.19, 4.72, 87.7, 0, 3.6, 0, 1.8, 5.3, 0, 0.2, 0.8, 5.5, 0, 0, 98.7, 36.3, 2.1, 22.1, 8.6, 5.9, 372.8, 2.6, 4.7, 1.3, 0.2, 3.4, 4.9, 5.24, 1.03, 0.16, 0.05, 2.87, 0.65, 0.05, 0.59, 0, 1.26, 0, 0.07, 11.88, 1.35, 41, 1.316, true, false, false, false);
const almondMilkSoGood = createNewFood("almond milk", 0, 0, "drinks", null, 0.135, 16.53, 0.56, 0.32, 1.4, null, null, 15.6, null, null, null, 16.7, null, null, null, null, null, 4, null, 10, null, null, null, null, 10.7, 0.8, null, 2.4, null, 0.64, 0.32, null, 0.12, null, 0.88, 0.4, null, null, 0, 0.1, 0, null, null, null, 0.544, null, true, false, false, false);
const almonds = createNewFood("almonds", 0, 0, "nuts and seeds", null, 2.92, 579, 21.15, 8.77, 49.93, 4.41, 18.6, 103.5, 25.8, 9.4, 9.1, 0, 12.3, 11, 0.1, 0, 0, 170.9, 0, 22.4, 114.6, 46.4, 84.4, 121.1, 68.7, 28.2, 7.5, 0.1, 39, 21.55, 12.5, 0.72, 4.35, 0.11, 31.55, 12.33, 0, 12.32, 0.01, 3.8, 0, 1.47, 4107, 3.026, 733, 0.996, true, false, false, false);
const apples = createNewFood("apples", 0, 0, "fruit", null, 0, 52, 0.26, 10.6, 0.17, 85.56, 1.5, 2.4, .7, 1.2, 2.7, 0, 0.8, 0.8, 2.3, 6.1, 0, 1.4, 2.4, 0.5, 3, 1.5, 1.6, 1.9, 1.6, 4.1, 0, 0.1, 0.5, 13.8, 2.4, 0.05, 10.39, 5.9, 0.01, 0.05, 0.01, 0.04, 0, 0.03, 0, 0.01, 4.778, 1.481, 107, 1.2, true, false, false, false);
const applesRed = createNewFood("apples (red)", 0, 0, "fruit", "red", 0.40, 52, 0.26, 10.6, 0.17, 85.56, 1.5, 2.4, .7, 1.2, 2.7, 0, 0.8, 0.8, 2.3, 6.1, 0, 1.4, 2.4, 0.5, 3, 1.5, 1.6, 1.9, 1.6, 4.1, 0, 0.1, 0.5, 13.8, 2.4, 0.05, 10.39, 5.9, 0.01, 0.05, 0.01, 0.04, 0, 0.03, 0, 0.01, 4.778, 1.481, 107, 1.2, true, false, false, false);
const applesGreen = createNewFood("apples (green)", 0, 0, "fruit", "green", 0.40, 52, 0.26, 10.6, 0.17, 85.56, 1.5, 2.4, .7, 1.2, 2.7, 0, 0.8, 0.8, 2.3, 6.1, 0, 1.4, 2.4, 0.5, 3, 1.5, 1.6, 1.9, 1.6, 4.1, 0, 0.1, 0.5, 13.8, 2.4, 0.05, 10.39, 5.9, 0.01, 0.05, 0.01, 0.04, 0, 0.03, 0, 0.01, 4.778, 1.481, 107, 1.2, true, false, false, false);
const asparagus = createNewFood("asparagus", 0, 0, "vegetables", "green", 2, 20, 2.2, 1.74, 0.12, 93.22, 13, 12.8, 7, 5.5, 6.1, 0, 3.8, 13, 32.4, 7.5, 0, 7.5, 46.2, 2, 21, 26.8, 4.4, 8.8, 7.4, 7.8, 4.2, 0.1, 6.8, 3.88, 2.1, 0.08, 1.88, 1.0, 0, 0.05, 0.01, 0, 0, 0.04, 0, 0.13, 0, 2.857, 101, 1.714, true, false, false, false);
const avocadoHass = createNewFood("avocado (hass)", 0, 0, "fruit", "green", 1.50, 167, 1.96, 1.79, 15.41, 72.33, 6.8, 13, 13.7, 29.3, 19.1, 0, 3.3, 22.3, 6.3, 11.7, 0, 12.9, 23.3, 1.1, 18.9, 7.6, 9.1, 8.3, 7.7, 19.5, 0.7, 0.5, 8.5, 8.64, 6.8, 0.11, 0.3, 0.08, 9.8, 1.82, 0.11, 1.69, 0, 2.13, 0, 0.14, 15.216, 4, 63.375, 0.448, true, false, false, false);
const avocadoOil = createNewFood("avocado oil", 0, 0, "oils", null, 4.80, 884, 0, 0, 100, 0, null, null, null, null, null, null, null, null, null, null, null, 83.7, 101.5, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 70.55, 13.49, 0.85, 12.53, 0, 11.56, 0, null, 14.741, null, null, null, true, false, false, false);
const avocadoShephard = createNewFood("avocado (shephard)", 0, 0, "fruit", "green", 0.80, 120, 2.23, 2.17, 10.06, 78.81, 1.9, 4.8, 4.8, 18.6, 5.2, 0, 3.3, 8.8, 6, 23.2, 0, 17.7, 23.3, 0.8, 34.6, 2.1, 7.5, 5.3, 5.7, 13.5, 0.7, 0.1, 5, 7.82, 5.6, 0, 2.42, 0.25, 5.51, 1.68, 0.09, 1.59, 0, 1.96, 0, 0.16, 18.718, 1.286, 175.5, 0.417, true, false, false, false);
const bananas = createNewFood("bananas (fresh)", 0, 0, "fruit", null, 0.50, 89, 1.09, 20.23, 0.33, 74.91, 2.8, 6.6, 4.8, 6.7, 24.5, 0, 2.3, 5, 2.7, 11.6, 0, 0.9, 0.6, 0.4, 8.7, 3.3, 8.4, 15, 3.1, 13.8, 1.8, 0.1, 1.9, 22.84, 2.6, 5.38, 12.23, 4.85, 0.03, 0.07, 0.03, 0.05, 0, 0.11, 0, 0.07, 1.704, 1.923, 358, 0.185, true, false, false, false);
const bananasCharlies = createNewFood("bananas (Charlie's)", 0, 0, "fruit", null, 1.78, 89, 1.09, 20.23, 0.33, 74.91, 2.8, 6.6, 4.8, 6.7, 24.5, 0, 2.3, 5, 2.7, 11.6, 0, 0.9, 0.6, 0.4, 8.7, 3.3, 8.4, 15, 3.1, 13.8, 1.8, 0.1, 1.9, 22.84, 2.6, 5.38, 12.23, 4.85, 0.03, 0.07, 0.03, 0.05, 0, 0.11, 0, 0.07, 1.704, 1.923, 358, 0.185, true, false, false, false);
const bananasFrozen = createNewFood("bananas (frozen)", 0, 0, "fruit", null, 1.00, 89, 1.09, 20.23, 0.33, 74.91, 2.8, 6.6, 4.8, 6.7, 24.5, 0, 2.3, 5, 2.7, 11.6, 0, 0.9, 0.6, 0.4, 8.7, 3.3, 8.4, 15, 3.1, 13.8, 1.8, 0.1, 1.9, 22.84, 2.6, 5.38, 12.23, 4.85, 0.03, 0.07, 0.03, 0.05, 0, 0.11, 0, 0.07, 1.704, 1.923, 358, 0.185, true, false, false, false);
const bananasFrozenOrganic = createNewFood("bananas (frozen organic)", 0, 0, "fruit", null, 1.5555, 89, 1.09, 20.23, 0.33, 74.91, 2.8, 6.6, 4.8, 6.7, 24.5, 0, 2.3, 5, 2.7, 11.6, 0, 0.9, 0.6, 0.4, 8.7, 3.3, 8.4, 15, 3.1, 13.8, 1.8, 0.1, 1.9, 22.84, 2.6, 5.38, 12.23, 4.85, 0.03, 0.07, 0.03, 0.05, 0, 0.11, 0, 0.07, 1.704, 1.923, 358, 0.185, true, false, false, false);
const beetroot = createNewFood("beetroot", 0, 0, "vegetables", "red", 0.80, 43, 1.61, 6.71, 0.17, 87.5, 2.8, 3.6, 2.4, 3.1, 4.5, 0, 1.4, 27.3, 1.4, 6.5, 0, 0.3, 0.2, 1.3, 8.3, 10, 7.2, 18.3, 5.7, 12.5, 0.7, 5.2, 4.4, 9.56, 2.8, 0.48, 6.76, 0.2, 0.03, 0.06, 0.01, 0, 0, 0, 0, 0.07, 0, 4.667, 4.167, 0.696, true, false, false, false);
const blackBeans = createNewFood("black beans", 0, 0, "legumes", "purple", 0.6666, 132, 8.86, 14.95, 0.54, 65.74, 22.2, 5.4, 3.6, 4.8, 4.6, 0, 7.7, 37.3, 0.3, 0, 0, 5.8, 3.7, 2.3, 23.2, 26.3, 21.9, 24.7, 20, 13.7, 2.2, 0.1, 14, 23.71, 8.7, 9.1, 0.63, 0, 0.05, 0.23, 0.11, 0.13, 0, 0.14, 0, 0.71, 1.2, 5.359, 355, 0.386, true, false, false, false);
const blackberries = createNewFood("blackberries", 0, 0, "fruit", "purple", 1.00, 64, 1.18, 10.5, 0.43, 82.21, 2.6, 4.2, 8.6, 3, 4.1, 0, 2, 8.5, 4.9, 4.1, 0, 7.8, 22, 2.4, 13.3, 10, 6.9, 67.9, 4.3, 5.4, 0.7, 0.1, 3.1, 15.67, 5, 0, 10.67, 5.25, 0.04, 0.24, 0.08, 0.16, 0, 0, 0, 0, 1.988, 2.083, 140, 1.318, true, false, false, false);
const blueberries = createNewFood("blueberries", 0, 0, "fruit", "purple", 1.00, 51, 0.42, 9.47, 0.64, 86.59, 2.9, 3.4, 3.7, 2.5, 3.9, 0, 1.2, 1.8, 2, 3.3, 0, 3.2, 18.2, 0.7, 3.7, 2.3, 1.6, 8.2, 1.6, 2.1, 0.2, 0.1, 0.9, 12.17, 2.7, 0.03, 8.45, 4.17, 0.09, 0.28, 0.11, 0.17, 0, 0.1, 0, 0.03, 1.491, 2.121, 54, 1.6, true, false, false, false);
const bluePeas = createNewFood("blue peas", 0, 0, "legumes", "green", 0.495, 124, 8.8, 27.11, 0.68, 62.3, 20.5, 14.1, 22.1, 20.6, 17.7, 0, 0, 36, 7.1, 13.9, 0, 0, 0, 3, 30.2, 28.3, 17.7, 24.3, 23.6, 14.7, 1.1, 1.3, 13.1, 27.11, 0, 0, 0, 0, 0.06, 0.33, 0.06, 0.26, 0, 0.12, 0, 0.37, 4.344, 3.86, 19.05, 0.643, true, false, false, false);
const brazilNuts = createNewFood("brazil nuts", 0, 0, "nuts and seeds", null, 3.80, 659, 14.32, 4.24, 67.1, 3.42, 56.1, 3.22, 2.1, 3.7, 6.7, 0, 6.8, 5.5, 0, 0.9, 0, 37.7, 0, 13.3, 193.7, 30.4, 117.5, 67.9, 103.6, 25.3, 3485.5, 0.2, 50.7, 11.74, 7.5, 0.25, 2.33, 0, 23.88, 24.4, 0.02, 23.88, 0, 16.13, 0, 1.19, 1405, 2.329, 219.667, 0.426, true, false, false, false);
const broccoli = createNewFood("broccoli", 0, 0, "vegetables", "green", 1.20, 34, 2.82, 4.04, 0.37, 89.30, 6.5, 10.6, 4.6, 11.5, 11.7, 0, 4.4, 15.8, 26.7, 118.9, 0, 9.6, 113.3, 3.9, 5.4, 9.1, 6.6, 11.7, 9.4, 12.2, 4.5, 2.2, 5.1, 6.64, 2.6, 0, 1.7, 0.68, 0.03, 0.11, 0.06, 0, 0, 0.11, 0, 0.13, 0, 8.367, 9.576, 2.238, true, false, false, false);
const broccolini = createNewFood("broccolini", 0, 0, "vegetables", "green", 1.25, 34, 2.82, 4.04, 0.37, 89.30, 6.5, 10.6, 4.6, 11.5, 11.7, 0, 4.4, 15.8, 26.7, 118.9, 0, 9.6, 113.3, 3.9, 5.4, 9.1, 6.6, 11.7, 9.4, 12.2, 4.5, 2.2, 5.1, 6.64, 2.6, 0, 1.7, 0.68, 0.03, 0.11, 0.06, 0, 0, 0.11, 0, 0.13, 0, 8.367, 9.576, 2.238, true, false, false, false);
const bokChoy = createNewFood("bok choy", 0, 0, "vegetables", "green", 1.40, 13, 1.5, 1.15, 0.2, 95.32, 3.6, 6.4, 3.6, 1.8, 12.9, 0, 1.5, 16.5, 191.5, 60, 0, 0.6, 50.6, 8.8, 2.3, 10, 5.9, 8.8, 5.3, 9.7, 0.9, 4.3, 2.4, 2.18, 1.0, 0, 1.18, 0.4, 0.01, 0.1, 0.06, 0, 0, 0.03, 0, 0.09, 0, 9.048, 3.877, 5.526, true, false, false, false);
const butterBeans = createNewFood("butter beans", 0, 0, "vegetables", "yellow", 0.5882, 28, 1.49, 3.31, 0.17, 91.42, 3.2, 8.2, 2.7, 1, 4, 0, 3.2, 5.7, 4.8, 5.5, 0, 0.3, 42.3, 4.1, 6.8, 11, 7.5, 17.9, 4.4, 4.8, 0.7, 0.6, 6, 6.45, 3, 1.72, 1.88, 0.8, 0.01, 0.08, 0.05, 0, 0, 0.04, 0, 0.09, 0, 7.869, 14, 2.042, true, false, false, false);
const cabbage = createNewFood("cabbage", 0, 0, "vegetables", "green", 0.80, 25, 1.28, 3.56, 0.1, 92.18, 5.5, 3.6, 1.7, 4.2, 8.3, 0, 2.5, 10.8, 4.2, 48.8, 0, 1, 84.4, 3.3, 2.1, 5.9, 3.8, 8.9, 3.7, 6.5, 0.5, 1.2, 2.3, 5.8, 2.24, 0, 3.2, 1.45, 0.02, 0.02, 0, 0, 0, 0.03, 0, 0.04, 0, 9.474, 9.444, 3.333, true, false, false, false);
const cacao = createNewFood("cacao powder", 0, 0, "other", null, 2.20, 228, 19.6, 20.9, 13.7, 3, 7, 22, 16, 5, 8, 0, 3, 8, 0, 0, 0, 1, 3, 11, 421, 173, 156, 213, 105, 59, 26, 1, 85, 57.9, 37, 12.5, 1.8, 1.2, 4.6, 0.4, 0, 0.4, 0, 8.1, 0, 1.2, 0, 1.798, 72.571, 0.257, true, false, false, false);
const cantaloupe = createNewFood("cantaloupe", 0, 0, "fruit", "orange", 1.60, 34, 0.84, 6.9, 0.19, 90.15, 3.7, 1.7, 5.2, 2.1, 4.8, 0, 1.8, 5.3, 145, 48.9, 0, 0.4, 2.8, 0.8, 4.6, 2.6, 3.8, 2.3, 2.1, 10.3, 0.7, 1.1, 2.3, 8.16, 4.3, 0.03, 7.86, 1.87, 0, 0.08, 0.05, 0.04, 0, 0.05, 0, 0.03, 0.761, 4.39, 16.688, 0.75, true, false, false, false);
const capsicumRed = createNewFood("capsicum (red)", 0, 0, "vegetables", "red", 0.40, 26, 0.99, 3.85, 0.3, 92.21, 4.91, 7.7, 7, 6.3, 19.4, 0, 1.3, 11.5, 134.2, 170.3, 0, 10.5, 5.4, 0.6, 1.9, 5.4, 3.8, 6.2, 3.7, 8.1, 0.2, 0.3, 3.1, 6.03, 2.1, 0, 4.2, 2.26, 0.01, 0.16, 0.06, 0, 0, 0.06, 0, 0.04, 0, 14.706, 52.75, 0.583, true, false, false, false);
const capsicumGreen = createNewFood("capsicum (green)", 0, 0, "vegetables", "green", 0.40, 20, 0.86, 2.88, 0.17, 93.89, 5.2, 2.5, 3.4, 2, 14.9, 0, 1.3, 2.5, 15.9, 107.2, 0, 0.5, 7.9, 0.8, 7.3, 4.3, 3.1, 6.8, 2.9, 6.7, 0, 0.2, 1.6, 4.64, 1.7, 0, 2.5, 1.12, 0.01, 0.06, 0.01, 0, 0, 0.06, 0, 0.04, 0, 1.97, 58.333, 1, true, false, false, false);
const carrots = createNewFood("carrots", 0, 0, "vegetables", "orange", 0.20, 41, 0.93, 6.56, 0.24, 88.29, 6, 5.3, 7, 5.5, 9.2, 0, 2.1, 4.8, 716.1, 7.9, 0, 5.7, 9.2, 2.8, 5, 3.8, 3.8, 7.9, 5, 12.3, 0.2, 4.6, 3, 9.58, 2.8, 1.43, 4.74, 0.55, 0.01, 0.1, 0, 0, 0, 0.03, 0, 0.1, 0, 5.333, 4.638, 2.75, true, false, false, false);
const cashewNuts = createNewFood("cashew nuts", 0, 0, "nuts and seeds", null, 0, 553, 18.22, 26.81, 43.85, 5.2, 38.5, 5.3, 7.6, 17.3, 27.8, 0, 14.4, 6.3, 0, 0.7, 0, 6, 37.9, 3.1, 243.9, 83.5, 91.3, 91.9, 84.7, 25.4, 36.2, 0.8, 72.3, 30.19, 3.3, 23.49, 5.91, 0.05, 23.8, 7.85, 0.06, 7.78, 0, 7.78, 0, 1.47, 125.516, 2.633, 55, 0.127, true, false, false, false);
const cauliflower = createNewFood("cauliflower", 0, 0, "vegetables", null, 0.43, 25, 1.92, 2.91, 0.28, 92.07, 4.5, 5.5, 3.6, 13.3, 12.3, 0, 10.4, 14.3, 0, 64.3, 0, 0.5, 17.2, 1.8, 4.3, 5.3, 4.7, 8.6, 6.3, 11.5, 1.1, 2, 3.4, 4.97, 2, 0.36, 1.91, 0.97, 0.03, 0.03, 0.01, 0.01, 0, 0.13, 0, 0.11, 0.867, 6.923, 9.967, 1.467, true, false, false, false);
const celery = createNewFood("celery", 0, 0, "vegetables", "green", 1.00, 14, 0.69, 0.88, 0.17, 95.43, 1.9, 5.2, 2.3, 4.9, 4.9, 0, 1.4, 9, 19.2, 4.1, 0, 1.7, 32.2, 3.3, 3.9, 2.5, 3.4, 5.7, 3.4, 10, 0.7, 5.3, 1.6, 2.97, 1.6, 0, 1.34, 0.37, 0.03, 0.08, 0, 0, 0, 0.04, 0, 0.03, 0, 3.714, 3.25, 3.636, true, false, false, false)
const cheeseFeta = createNewFood("feta cheese (reduced fat)", 0, 0, "dairy", null, 2.25, 209.3, 21.06, 3.61, 11.97, 58.34, 8.2, 45.7, 4.1, 12.4, 16.1, 40.1, 2.7, 4.7, 63, 0.2, 1.5, 0.7, 1.1, 19.6, 2.3, 5.4, 6.7, 1, 34.5, 5.8, 16.8, 82.4, 23.2, 3.61, 0, 0, 3.61, 0, 2.58, 0.33, 0.13, 0.03, 0.59, 7.41, 50.08, 2.03, 0.231, 88.333, 0.123, 10.909, true, false, false, false);
const cherries = createNewFood("cherries", 0, 0, "fruit", "red", 1.00, 63, 1.06, 11.8, 0.2, 82.25, 2.5, 3, 1.1, 4, 3.3, 0, 1.4, 1, 2.7, 9.3, 0, 0.4, 2.3, 1.1, 6.7, 4.5, 3.4, 3.9, 3, 8.5, 0, 0, 0.9, 16.01, 2.1, 0, 12.82, 5.37, 0.05, 0.05, 0.03, 0.03, 0, 0.04, 0, 0.03, 27, 1.167, 0, 1.182, true, false, false, false);
const chiaSeeds = createNewFood("chia seeds", 0, 0, "nuts and seeds", null, 1.71, 486, 16.54, 7.72, 30.74, 5.8, 16.4, 3.6, 43.8, 11.9, 92.9, 0, 15.4, 12.3, 1.9, 1.6, 0, 3.3, 787.7, 52.6, 102.7, 205, 121.9, 151.3, 122.9, 15.7, 100.4, 1.1, 57.3, 42.12, 34.4, 6.08, 0.93, 0, 2.31, 23.67, 17.83, 5.84, 0.14, 3.8, 0, 1.37, 0.327, 4.957, 25.438, 1.618, true, false, false, false);
const chickpeas = createNewFood("chickpeas", 0, 0, "legumes", null, 0.6666, 139, 7.05, 16.03, 2.77, 66.72, 2.5, 1.4, 1.0, 4.8, 7.7, 0, 8.4, 12, 1, 0.1, 0, 1.9, 3.8, 3.8, 28.1, 12.2, 8.1, 47, 12.1, 4.2, 5.6, 14.1, 7.9, 22.5, 6.4, 13.79, 4.01, 0, 0.49, 0.97, 0.04, 0.74, 0, 0.21, 0, 0.5, 20.667, 2.49, 0.514, 1.731, true, false, false, false);
const chickpeasCharlies = createNewFood("chickpeas (Charlie's)", 0, 0, "legumes", null, 5.00, 139, 7.05, 16.03, 2.77, 66.72, 2.5, 1.4, 1.0, 4.8, 7.7, 0, 8.4, 12, 1, 0.1, 0, 1.9, 3.8, 3.8, 28.1, 12.2, 8.1, 47, 12.1, 4.2, 5.6, 14.1, 7.9, 22.5, 6.4, 13.79, 4.01, 0, 0.49, 0.97, 0.04, 0.74, 0, 0.21, 0, 0.5, 20.667, 2.49, 0.514, 1.731, true, false, false, false);
const chocolateCharlies = createNewFood("chocolate (Charlie's)", 0, 0, "treats", null, 0, 563.7, 6.9, 24.2, 46.7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4.8, null, 24.2, 0, null, 24.2, null, null, null, null, null, null, 33.2, 0, null, null, null, null, null, true, false, false, false);
const chocolatePanaMint = createNewFood("chocolate (pana mint)", 0, 0, "treats", null, 13.33, 563.7, 6.9, 24.2, 46.7, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 4.8, null, 24.2, 0, null, 24.2, null, null, null, null, null, null, 33.2, 0, null, null, null, null, null, true, false, false, false);
const coriander = createNewFood("coriander", 0, 0, "herbs", "green", 0, 23, 2.13, 0.87, 0.52, 92.21, 6.1, 14.7, 8, 11.4, 9.9, 0, 3, 15.5, 289.2, 36, 0, 16.7, 344.4, 5.6, 25, 22.1, 8.1, 23.7, 6.9, 20, 1.6, 3.1, 6.3, 3.67, 2.8, 0.13, 0.87, 0.29, 0.28, 0.04, 0, 0.04, 0, 0.01, 0, null, 0, 2.222, 11.36, 2.577, true, false, false, false);
const corn = createNewFood("corn", 0, 0, "vegetables", "yellow", 0.47, 81, 2.55, 16.84, 0.67, 77.03, 2.7, 5.6, 9.4, 3.0, 6.6, 0, 5.2, 8.8, 8.5, 4.7, 0, 0.5, 0.3, 0.3, 5.3, 5.9, 8.8, 8.6, 11.3, 9, 1.3, 0.1, 7.9, 19.3, 2.4, 13.8, 3.07, 0.46, 0.2, 0.32, 0.01, 0.09, 0, 0.1, 0, 0.25, 10.111, 13.125, 233, 0.107, true, false, false, false);
const coconut = createNewFood("coconut (dried)", 0, 0, "nuts and seeds", null, 0, 660, 6.88, 7.32, 64.53, 3, 5.5, 9.1, 4.3, 16, 20, 0, 5.2, 2.3, 0, 2, 0, 2.9, 0.3, 2.2, 88.4, 41.5, 28.1, 152.5, 29.4, 20.9, 33.6, 2.5, 25.1, 23.65, 16.3, 0, 7.35, 2.94, 2.75, 0.71, 0, 0.71, 0, 57.22, 0, 0.51, 0, 2.525, 14.676, 0.289, true, false, false, false);
const coconutWater = createNewFood("coconut water", 0, 0, "drinks", null, 1.136, 16.2, 0, 3.8, 0.01, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.9, null, null, 3.4, null, null, 8.1, null, 1.9, null, null, null, null, null, null, null, null, null, null, null, 0.01, null, null, null, null, null, 0.990, true, false, false, false);
const coconutYoghurt = createNewFood("coconut yoghurt (vanilla coyo)", 0, 0, "other", null, 1.60, 172.69, 1.5, 6.7, 15.6, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.2, null, 7.2, 0.5, 0, 2.1, 0, 0, 0, 0, 0, 0, 14.5, 0, 0, null, null, null, null, true, false, false, false)
const cottageCheese = createNewFood("cottage cheese (2% fat)", 0, 0, "dairy", null, 0.80, 81, 10.45, 4.76, 2.27, 81.24, 1.8, 22.8, 0.7, 10.5, 3.8, 19.6, 3.8, 2, 10.1, 0, 0, 0.5, 0, 9.3, 3.7, 1.6, 2.8, 0.8, 21.4, 4.8, 21.6, 20.5, 6.4, 4.76, 0, 0, 4, 0, 0.52, 0.08, 0.01, 0.05, 0, 1.24, 12, 39, 5.222, 15.455, 0.406, 12.333, true, false, false, false);
const cucumber = createNewFood("cucumber (with peel)", 0, 0, "vegetables", null, 0.85, 15, 0.65, 2.38, 0.11, 95.23, 2.5, 3, 0.7, 5.2, 2.7, 0, 1.4, 1.8, 4.5, 3.7, 0, 0.2, 18.2, 1.3, 4.6, 3.5, 4.1, 4.4, 3.4, 5.7, 0.5, 0.1, 2.5, 3.63, 1.14, 0.83, 1.67, 0.87, 0.01, 0.03, 0.01, 0.03, 0, 0.04, 0, 0.03, 5.6, 4.878, 73.5, 1.231, true, false, false, false);
const dates = createNewFood("dates (medjool)", 0, 0, "fruit", "purple", 2.0, 277, 1.81, 68.27, 0.15, 21.32, 4.5, 5.5, 11.5, 16.1, 16.6, 0, 2.3, 3.8, 6.4, 0, 0, 0, 3, 5.3, 40.2, 11.2, 16.9, 16.4, 8.9, 26.8, 0, 0.1, 5.5, 74.97, 6.7, 1.8, 66.47, 31.95, 0, 0, 0, 0, 0, 0, 0, 0.08, 0, 1.215, 696, 1.185, true, false, false, false);
const dragonfruit = createNewFood("dragonfruit", 0, 0, "fruit", "red", 1.60, 89.3, 1.43, 18.5, null, null, null, null, null, null, null, null, null, null, null, null, null, 19, null, 7, null, 8.9, null, 31.7, null, 15.5, null, 0.5, null, 21.43, 2.86, 0, 20.71, null, null, null, null, null, null, null, 0, null, null, null, 51.273, null, true, false, false, false);
const edamame = createNewFood("edamame", 0, 0, "legumes", "green", 1.25, 121, 11.9, 3.58, 5.2, 72.7, 18.2, 14.1, 6.5, 7.9, 6.7, 0, 13.2, 77.8, 12.8, 8.1, 0, 4.5, 29.7, 5.3, 38.3, 28.4, 20, 56.9, 24.1, 16.8, 1.5, 0.4, 17.1, 8.91, 5.2, 1.51, 2.18, 0.12, 1.28, 2.16, 0.36, 1.79, 0.01, 0.62, 0, 0.75, 4.956, 3.971, 72.667, 0.984, true, false, false, false);
const eggplant = createNewFood("eggplant", 0, 0, "vegetables", "purple", 0.9, 25, 0.98, 2.76, 0.18, 92.3, 3.5, 3.4, 4.6, 5.6, 5.6, 0, 1.6, 5.5, 1, 2.9, 0, 2, 3.9, 0.8, 9, 2.9, 4.4, 12.9, 3.4, 8.8, 0.5, 0.1, 2, 5.88, 3, 0.24, 3.53, 1.54, 0.02, 0.08, 0.01, 0, 0, 0.03, 0, 0.06, 0, 1.975, 114.5, 0.643, true, false, false, false);
const eggs = createNewFood("eggs", 0, 0, "eggs", null, 1.00, 155, 12.58, 1.11, 10.61, 74.62, 6, 46.6, 0.5, 28, 8.1, 46.3, 69.1, 11, 22.3, 0, 14.5, 6.9, 0.3, 4.2, 1.4, 14.9, 3.1, 1.4, 24.6, 4.8, 56, 8.3, 13.1, 1.12, 0, 0, 1.12, 0, 4.08, 1.41, 0.07, 1.31, 0, 3.27, 373, 1.08, 19.029, 80.769, 1.016, 5, true, false, false, false);
const fennel = createNewFood("fennel", 0, 0, "vegetables", "green", 0.40, 35, 1.24, 4.15, 0.2, 90.21, 0.9, 2.9, 4.6, 4.6, 3.1, 0, 3.1, 6.8, 41.3, 16, 0, 3.9, 69.8, 4.1, 7.3, 9.1, 5.3, 10.6, 7.1, 15.9, 1.3, 3.5, 2.5, 7.3, 3.1, 0.21, 3.93, 1.63, 0.07, 0.17, 0, 0, 0, 0.09, 0, 0.06, 0, 3.030, 7.962, 2.882, true, false, false, false);
const ginger = createNewFood("ginger root (raw)", 0, 0, "vegetables", "yellow", 5.00, 80, 1.82, 15.77, 0.75, 78.89, 2.3, 3.1, 5.4, 4.1, 10.7, 0, 6.8, 2.8, 0, 6.7, 0, 1.7, 0.1, 1.3, 25.1, 7.5, 13.4, 12.7, 4.9, 16, 1.3, 0.9, 4.3, 17.77, 2, 9.46, 1.7, 0.92, 0.15, 0.15, 0.03, 0, 0, 0.2, 0, 0.07, 0, 1.504, 31.923, 0.372, true, false, false, false);
const gojiBerries = createNewFood("goji berries (dried)", 0, 0, "fruit", "red", 3.133, 362, 12.1, 63.49, 7.1, 0, 21.8, 109.1, 32.1, 20, 0, 0, 0, 0, 1714.5, 160, 0, 0, 0, 5, 222.2, 125, 40.6, 72.2, 29, 61.5, 90.0, 28, 25, 74.08, 50.4, 0, 45.86, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 1, 3.81, 0.462, true, false, false, false);
const grapefruitPink = createNewFood("grapefruit (pink)", 0, 0, "fruit", "red", 0.50, 42, 0.77, 8.86, 0.14, 88.06, 3.9, 2.8, 1.5, 5.2, 3.5, 0, 1.8, 3.3, 49.3, 41.6, 0, 1.1, 0, 1.8, 3.6, 1.0, 2.8, 1.2, 2.6, 5.2, 0.2, 0, 0.9, 10.66, 1.6, 0, 6.89, 1.77, 0.02, 0.04, 0.01, 0.03, 0, 0.02, 0, 0.01, 3.625, 2.188, 0, 2.444, true, false, false, false);
const grapefruit = createNewFood("grapefruit", 0, 0, "fruit", "orange", 0.50, 42, 0.77, 8.86, 0.14, 88.06, 3.9, 2.8, 1.5, 5.2, 3.5, 0, 1.8, 3.3, 49.3, 41.6, 0, 1.1, 0, 1.8, 3.6, 1.0, 2.8, 1.2, 2.6, 5.2, 0.2, 0, 0.9, 10.66, 1.6, 0, 6.89, 1.77, 0.02, 0.04, 0.01, 0.03, 0, 0.02, 0, 0.01, 3.625, 2.188, 0, 2.444, true, false, false, false);
const grapesGreen = createNewFood("grapes (green)", 0, 0, "fruit", "green", 0.557, 69, 0.72, 17.07, 0.16, 80.54, 6.3, 6.4, 1.3, 1, 5.7, 0, 1.3, 0.5, 2.8, 4.3, 0, 2.5, 16.5, 0.8, 14.1, 4.5, 2.2, 3.9, 2.9, 7.3, 0.2, 0.1, 0.9, 18.1, 0.9, 0, 15.48, 8.13, 0.01, 0.05, 0.01, 0.04, 0, 0.05, 0, 0.02, 5.286, 0.551, 95.5, 1.429, true, false, false, false);
const grapesRed = createNewFood("grapes (red)", 0, 0, "fruit", "red", 0.30, 69, 0.72, 17.07, 0.16, 80.54, 6.3, 6.4, 1.3, 1, 5.7, 0, 1.3, 0.5, 2.8, 4.3, 0, 2.5, 16.2, 0.8, 14.1, 4.5, 2.2, 3.9, 2.9, 7.3, 0.2, 0.1, 0.09, 18.1, 0.9, 0, 15.48, 8.13, 0.01, 0.05, 0.01, 0.04, 0, 0.05, 0, 0.02, 5.286, 0.551, 95.5, 1.429, true, false, false, false);
const grapesPurple = createNewFood("grapes (purple)", 0, 0, "fruit", "purple", 0.30, 69, 0.72, 17.07, 0.16, 80.54, 6.3, 6.4, 1.3, 1, 5.7, 0, 1.3, 0.5, 2.8, 4.3, 0, 2.5, 16.2, 0.8, 14.1, 4.5, 2.2, 3.9, 2.9, 7.3, 0.2, 0.1, 0.09, 18.1, 0.9, 0, 15.48, 8.13, 0.01, 0.05, 0.01, 0.04, 0, 0.05, 0, 0.02, 5.286, 0.551, 95.5, 1.429, true, false, false, false);
const greenBeans = createNewFood("green beans", 0, 0, "vegetables", "green", 0.47, 28, 1.49, 3.4, 0.17, 91.4, 3.2, 8.2, 2.7, 1, 4, 0, 3.2, 5.7, 18, 5.5, 0, 0.3, 42.3, 3.5, 6.6, 8.3, 5.9, 16, 4.1, 6.1, 0.7, 0.1, 3, 6.45, 3, 1.72, 1.88, 0.8, 0.01, 0.08, 0.05, 0, 0, 0, 0, 0.09, 0, 4.068, 159, 2.211, true, false, false, false);
const hazelnuts = createNewFood("hazelnuts", 0, 0, "nuts and seeds", null, 0, 628, 14.95, 6.96, 60.75, 5.31, 58.5, 10.3, 12.9, 18.4, 37.5, 0, 10.7, 28.3, 0.9, 8.4, 0, 100.2, 15.8, 9.5, 191.7, 58.8, 50.9, 343.1, 41.4, 26.2, 4.4, 0, 30.6, 16.7, 9.7, 0.48, 4.34, 0.07, 45.65, 7.92, 0.09, 7.83, 0, 4.46, 0, 1.06, 90.034, 1.42, 0, 0.699, true, false, false, false);
const kale = createNewFood("kale", 0, 0, "vegetables", "green", 1.40, 35, 2.92, 0.23, 1.49, 89.63, 10.3, 31.5, 8.4, 7.4, 9.8, 0, 0.1, 15.5, 206.3, 124.5, 0, 4.4, 432.9, 21.2, 5.9, 20, 10.3, 51.1, 7.9, 13.4, 1.6, 3.5, 4.9, 4.42, 4.1, 0, 0.99, 0.41, 0.1, 0.67, 0.38, 0.29, 0, 0.18, 0, 0.2, 0.762, 7.358, 6.566, 7.697, true, false, false, false);
const kidneyBeans = createNewFood("kidney beans", 0, 0, "legumes", "red", 0.6666, 127, 8.67, 16.24, 0.5, 66.94, 14.5, 5.3, 4.1, 4.4, 8, 0, 7.2, 32.5, 0, 1.6, 0, 0.2, 9.3, 2.9, 24, 27.8, 13.1, 23.9, 19.7, 15.6, 2, 0.1, 12.5, 22.8, 6.4, 14.5, 0.32, 0, 0.04, 0.28, 0.16, 0.11, 0, 0.07, 0, 0.74, 0.697, 4.63, 405, 0.833, true, false, false, false);
const kiwifruitGreen = createNewFood("kiwifruit (green)", 0, 0, "fruit", "green", 0.50, 61, 1.14, 11.52, 0.52, 83.07, 2.5, 2.3, 2.4, 3.7, 4.2, 0, 1.8, 6.3, 3.7, 123.6, 0, 8.7, 44.8, 2.8, 14.4, 3.9, 5.3, 5.4, 4.9, 12, 0.4, 0.2, 1.8, 14.66, 3, 0, 8.99, 4.35, 0.05, 0.29, 0.04, 0.25, 0, 0.03, 0, 0.07, 6.649, 1.077, 104, 2, true, false, false, false);
const kiwifruitGold = createNewFood("kiwifruit (gold)", 0, 0, "fruit", "yellow", 0.70, 63, 1.02, 14.39, 0.28, 82.44, 0, 6.7, 1.7, 2.4, 5.3, 3.3, 0.4, 7.8, 1, 215.1, 0, 9.3, 6.8, 1.4, 16.8, 2.6, 3.8, 2.7, 3.6, 12.1, 0.7, 0.2, 1, 15.79, 1.4, 0.12, 12.3, 5.8, 0.02, 0.11, 0.05, 0.06, 0, 0.07, 0, 0, 1.157, 0.53, 105, 1.417, true, false, false, false);
const leeks = createNewFood("leeks", 0, 0, "vegetables", "green", 1.00, 61, 1.5, 12, 0.3, 83, 5.5, 2.7, 2.9, 2.8, 15.5, 0, 2.2, 16, 71.5, 16, 0, 6.1, 52.2, 4.9, 13.3, 26.3, 8.8, 26.7, 5, 6.9, 1.8, 1.3, 1.5, 14.15, 1.8, 1.15, 3.9, 1.6, 0, 0.17, 0.1, 0, 0, 0.04, 0, 0.1, 0, 1, 9, 2.107, true, false, false, false);
const lentils = createNewFood("lentils", 0, 0, "legumes", null, 0.6666, 116, 9.02, 14.27, 0.38, 69.64, 15.4, 6.6, 7.6, 12.8, 11.9, 0, 7.7, 45.3, 0.3, 2, 0, 0.7, 1.9, 1.6, 27.9, 41.6, 11.3, 27.4, 25.7, 14.2, 5.1, 15.9, 15.9, 20.13, 5.86, 13.4, 0.39, 0, 0.06, 0.17, 0.04, 0.14, 0, 0.05, 0, 0.65, 3.703, 5.06, 1.55, 0.528, true, false, false, false);
const lettuceCos = createNewFood("lettuce (cos)", 0, 0, "vegetables", "green", 0, 17, 1.23, 1.17, 0.3, 94.61, 6.5, 6.1, 2.2, 2.8, 4.9, 0, 2.3, 34, 373.3, 5.3, 0, 0.9, 113.9, 2.8, 5.3, 12.1, 4.4, 8.6, 4.3, 9.5, 0.7, 0.5, 2.9, 3.29, 2.1, 0, 1.19, 0.8, 0.01, 0.16, 0.11, 0, 0, 0.04, 0, 0.08, 0, 4.792, 30.875, 2.357, true, false, false, false);
const lettuceIceberg = createNewFood("lettuce (iceberg)", 0, 0, "vegetables", "green", 0.50, 14, .9, 1.75, 0.14, 95.64, 3.7, 2.3, 0.9, 1.8, 2.8, 0, 1.6, 7.3, 21.5, 3.7, 0, 1.5, 26.8, 1.5, 2.8, 5.7, 2.2, 6.9, 2.9, 5.4, 0.2, 0.7, 1.9, 2.97, 1.2, 0, 1.97, 1, 0.01, 0.07, 0.05, 0, 0, 0.02, 0, 0.03, 0, 6, 14.1, 2.571, true, false, false, false);
const lettuceMixedGreens = createNewFood("lettuce (mixed greens)", 0, 0, "vegetables", "green", 1.666, 17.2, 1.52, 1.22, 0.24, 94.08, 6.2, 7.9, 2.8, 5.3, 5.6, 0, 3.1, 27.0, 241.4, 13.5, 0, 4, 214.8, 4, 7.3, 14.4, 8, 20.5, 4.5, 11.2, 0.8, 2, 4.7, 3.22, 1.98, 0.02, 0.92, 0.5, 0.01, 0.11, 0.08, 0, 0, 0.04, 0, 0.1, 0, 5.697, 9.891, 1.859, true, false, false, false);
const linseeds = createNewFood("linseeds", 0, 0, "nuts and seeds", null, 0.66, 534, 18.29, 1.58, 42.16, 6.96, 149.5, 14.6, 22, 19.7, 31.5, 0, 18.5, 21.7, 0, 0.8, 0, 2.1, 4.8, 21.3, 135.6, 71.6, 122.5, 137.9, 91.7, 31.3, 46.2, 2, 54.3, 28.8, 27.3, 0, 1.55, 0, 7.53, 28.73, 22.93, 6.35, 0.01, 3.66, 0, 1.24, 0.277, 3.557, 27.1, 0.651, true, false, false, false);
const macadamiaNuts = createNewFood("macadamia nuts", 0, 0, "nuts and seeds", null, 0, 718, 7.91, 5.22, 75.77, 1.36, 108.6, 14.7, 17.7, 15.2, 18.3, 0, 10.5, 2.8, 0, 1.6, 0, 3.6, 0, 7.1, 84, 46.1, 40.6, 229.5, 26.9, 14.2, 6.5, 0.3, 16.3, 13.82, 8.6, 1.05, 4.57, 0.07, 58.88, 1.5, 0.21, 1.3, 0, 12.06, 0, 0.6, 6.291, 1.72, 73.6, 0.654, true, false, false, false);
const macadamiaOil = createNewFood("macadamia oil", 0, 0, "oils", null, 2.40, 884, 0, 0, 100, 0, null, null, null, null, null, null, null, null, null, null, null, 82, 19, null, null, null, null, null, null, null, null, null, null, 0, 0, 0, 0, 0, 78.8, 2.5, 0.3, 2.2, null, 14.3, 0, 0, 7.01, null, null, null, true, false, false, false);
const mandarin = createNewFood("mandarin", 0, 0, "fruit", "orange", 0.50, 53, 0.81, 11.23, 0.31, 85.17, 5.3, 3.3, 2.7, 4.3, 5.2, 0, 2.4, 4, 29.2, 35.6, 0, 1.3, 0, 3.1, 4.7, 1.9, 3.8, 2.2, 2.9, 6.4, 0.2, 0.1, 0.9, 13.34, 1.8, 0, 10.58, 2.4, 0.06, 0.07, 0.02, 0.05, 0, 0.04, 0, 0.03, 2.667, 1.667, 83, 3.083, true, false, false, false);
const mango = createNewFood("mango", 0, 0, "fruit", "orange", 1.00, 60, 0.82, 13.2, 0.38, 83.46, 2.5, 3.5, 4.8, 3.9, 7.9, 0, 1.8, 10.8, 46.4, 48.5, 0, 6, 4.7, 0.9, 12.3, 2, 3.1, 3.5, 2, 6.5, 1.1, 0.1, 1.1, 14.98, 1.6, 0.23, 13.66, 4.68, 0.14, 0.07, 0.05, 0.02, 0, 0.1, 0, 0.05, 0.373, 0.811, 168, 1.1, true, false, false, false);
const mungBeanSprouts = createNewFood("mung bean sprouts", 0, 0, "legumes", "green", 0, 30, 3.04, 4.13, 0.18, 90.4, 7.6, 11.3, 5.4, 7.6, 5.9, 0, 3.4, 15.3, 0.9, 17.6, 0, 0.7, 36.7, 1.1, 18.2, 11.4, 6.6, 10.4, 7.7, 5.7, 1.1, 0.4, 5.1, 5.94, 1.8, 1.68, 2.1, 1.1, 0.02, 0.06, 0.02, 0, 0, 0.05, 0, 0.17, 0, 2.5, 24.833, 0.619, true, false, false, false)
const mushrooms = createNewFood("mushrooms", 0, 0, "vegetables", null, 1.0, 22, 3.09, 1.47, 0.34, 92.45, 7.4, 36.5, 25.8, 29.9, 6.9, 1.7, 4.1, 4.3, 0, 2.8, 1.2, 0.1, 0, 0.3, 35.3, 6.3, 2.8, 2.6, 12.3, 12.2, 16.9, 0.3, 6.5, 3.26, 1, 0.59, 1.98, 0.17, 0, 0.16, 0, 0.16, 0, 0.05, 0, 0.12, 0, 1.635, 63.6, 0.33, true, false, false, false);
const nectarine = createNewFood("nectarine", 0, 0, "fruit", "yellow", 0, 44, 1.06, 8.13, 0.32, 87.59, 3.1, 2.5, 8, 3.7, 1.7, 0, 1.5, 1.3, 14.2, 7.2, 0, 4.7, 2.4, 0.5, 9.6, 3.5, 2.8, 3, 3.7, 7.7, 0, 0, 2.1, 10.55, 1.7, 0.07, 7.81, 1.37, 0.09, 0.11, 0, 0.11, 0, 0.03, 0, 0.01, 55.5, 1.977, 0, 0.667, true, false, false, false);
const olivesGreen = createNewFood("olives (green)", 0, 0, 'fruit', "green", 3.0, 145, 1.03, 0.5, 15.32, 75.28, 1.9, 0.6, 1.7, 0.5, 2.1, 0, 3.3, 0.8, 16.8, 0, 0, 25.4, 1.6, 4.3, 13.3, 6.1, 3.4, 1.1, 0.6, 1.6, 1.6, 103.7, 0.5, 3.84, 3.3, 0, 0.03, 0.02, 11.31, 1.31, 0.09, 1.22, 0, 2.03, 0, 0.06, 13.207, 0.333, 0.027, 4.727, true, false, false, false);
const olivesBlack = createNewFood("olives (black)", 0, 0, 'fruit', "purple", 3.0, 145, 1.03, 0.5, 15.32, 75.28, 1.9, 0.6, 1.7, 0.5, 2.1, 0, 3.3, 0.8, 16.8, 0, 0, 25.4, 1.6, 4.3, 13.3, 6.1, 3.4, 1.1, 0.6, 1.6, 1.6, 103.7, 0.5, 3.84, 3.3, 0, 0.03, 0.02, 11.31, 1.31, 0.09, 1.22, 0, 2.03, 0, 0.06, 13.207, 0.333, 0.027, 4.727, true, false, false, false);
const oliveOil = createNewFood("olive oil", 0, 0, "oils", null, 0, 884, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 95.7, 66.9, 0.1, 0, 7, 0, 0, 0, 0, 0, 0.1, 0, 0, 0, 0, 0, 0, 72.96, 10.52, 0.76, 9.76, 0.16, 13.81, 0, 0, 12.825, 0, 0.5, 0, true, false, false, false);
const onion = createNewFood("onion", 0, 0, "vegetables", null, 0.80, 40, 1.1, 7.73, 0.1, 89.11, 4.2, 2.5, 0.8, 2.5, 8, 0, 1.4, 4.8, 0.1, 9.9, 0, 0.1, 0.4, 1.9, 4.3, 2.6, 3.1, 7.1, 4.1, 5.6, 0.9, 0.3, 2.1, 9.34, 1.46, 0, 4.24, 1.29, 0.01, 0.02, 0, 0, 0, 0.04, 0, 0.03, 0, 4.359, 36.5, 2.3, true, false, false, false);
const oranges = createNewFood("oranges", 0, 0, "fruit", "orange", 0.45, 47, 0.94, 9.09, 0.12, 86.75, 7.9, 3.6, 2, 5, 4, 0, 2, 7.5, 9.6, 70.9, 0, 1.7, 0, 3.3, 5, 1.3, 3.1, 1.4, 2, 7, 0.9, 0, 0.9, 11.75, 2.35, 0, 9.35, 2.03, 0.02, 0.03, 0.01, 0.02, 0, 0.01, 0, 0.02, 2.571, 1.556, 0, 4, true, false, false, false);
const parsley = createNewFood("parsley", 0, 0, "herbs", "green", 1.00, 36, 2.97, 2.97, 0.79, 87.71, 7.8, 8.9, 9.4, 8, 6, 0, 3, 38, 361.1, 177.3, 0, 5, 1822.2, 11.5, 16.6, 77.5, 15.6, 8.9, 8.3, 21.3, 0.2, 3.7, 13.4, 6.33, 3.3, 0.4, 0.85, 0.3, 0.29, 0.12, 0.01, 0, 0, 0.13, 0, 0.2, 0, 7.181, 9.893, 2.76, true, false, false, false);
const parsnip = createNewFood("parsnip", 0, 0, "vegetables", "yellow", 1.00, 75, 1.2, 13.09, 0.3, 79.53, 8.2, 4.5, 5, 12, 6, 0, 2.1, 16.8, 0, 22.7, 0, 9.9, 25, 3, 13.3, 7.4, 9.1, 31.1, 10.1, 14.4, 3.3, 0.7, 7.4, 17.9, 4.9, 5.84, 4.8, 0.52, 0.11, 0.05, 0, 0, 0, 0.05, 0, 0.06, 0, 4.917, 37.5, 1.241, true, false, false, false);
const passionfruit = createNewFood("passionfruit", 0, 0, "fruit", "yellow", 1.60, 114.6, 2.5, 15.5, 3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 0.3, null, 24, 8.5, 0, 7, null, null, null, null, null, 0, 0.5, 0, null, null, null, null, null, true, false, false, false);
const peanuts = createNewFood("peanuts", 0, 0, "legumes", null, 0, 567, 25.8, 7.5, 49.24, 6.5, 58.2, 12.3, 86.2, 35.3, 23.2, 0, 12.4, 60, 0, 0, 0, 55.5, 0, 7.7, 127.1, 57.3, 52.5, 107.4, 53.7, 27.1, 13.1, 1.2, 40.9, 16.13, 8.5, 3.46, 4.72, 0, 24.4, 15.56, 0, 15.52, 0, 6.28, 0, 1.67, 1574, 2.858, 39.167, 0.548, true, false, false, false);
const pears = createNewFood("pear", 0, 0, "fruit", null, 0.30, 57, 0.36, 9.84, 0.14, 83.96, 1.1, 2.4, 1.2, 1, 1.9, 0, 1.2, 1.8, 1.1, 5.7, 0, 1.4, 4.9, 0.8, 9.1, 2.3, 2.2, 2.7, 1.7, 4.5, 0.2, 0.1, 1.3, 15.23, 3.16, 0, 9.75, 6.42, 0.08, 0.09, 0, 0.09, 0, 0.02, 0, 0.02, 93, 1.22, 116, 1.286, true, false, false, false);
const peas = createNewFood("peas", 0, 0, "vegetables", "green", 0.47, 78, 5.15, 9.65, 0.27, 79.52, 25.7, 9.1, 10.6, 2.6, 7.5, 0, 6.5, 14.8, 90, 13.2, 0, 0.2, 26.7, 2, 11.7, 19, 6.9, 15.5, 11, 4.2, 1.8, 4.8, 8.4, 14.26, 4.5, 3.9, 4.4, 0.13, 0.02, 0.13, 0.02, 0, 0, 0.05, 0, 0.31, 0, 6.381, 1.528, 1.091, true, false, false, false);
const pecans = createNewFood("pecans", 0, 0, "nuts and seeds", null, 3.30, 691, 9.17, 4.26, 71.97, 3.52, 60, 11.8, 8.3, 17.3, 14, 0, 9.5, 5.5, 2.4, 1.5, 0, 9.3, 3.9, 5.8, 133.3, 31.6, 37.8, 250, 39.6, 15.8, 6.9, 0, 56.6, 13.86, 9.6, 0.46, 3.97, 0.04, 40.80, 21.61, 0.99, 20.63, 0, 6.18, 0, 0.6, 20.921, 3.775, 0, 0.579, true, false, false, false);
const pineapple = createNewFood("pineapple", 0, 0, "fruit", "yellow", 0.90, 50, 0.54, 11.64, 0.12, 86, 7.2, 2.9, 3.6, 4.3, 7.5, 0, 1.3, 4.5, 2.5, 63.7, 0, 0.1, 0.8, 1.1, 12.2, 3.6, 3.8, 51.5, 1.1, 4.2, 0.2, 0.1, 1.5, 13.12, 1.4, 0, 9.85, 2.12, 0.01, 0.04, 0.02, 0.02, 0, 0.01, 0, 0.02, 1.353, 1.091, 109, 1.083, true, false, false, false);
const pintoBeans = createNewFood("pinto beans", 0, 0, "legumes", null, 0, 114, 6.99, 14.7, 0.9, 70.60, 4.7, 1.7, 1.9, 3.3, 11.9, 0, 6.4, 6, 0, 0.1, 0, 4.9, 3, 5.3, 28.8, 16.6, 10, 21.3, 14.4, 10.5, 8.7, 15.9, 7.6, 20.22, 5.5, 10.21, 0.54, 0, 0.15, 0.27, 0.16, 0.11, 0, 0.16, 0, 0.51, 0.728, 2.355, 1.146, 1.969, true, false, false, false);
const pistachioNuts = createNewFood("pistachio nuts", 0, 0, "nuts and seeds", null, 0, 560, 20.16, 16.57, 45.32, 4.37, 79.1, 14.5, 9.3, 10.4, 113.3, 0, 16.8, 12.7, 22.1, 7.5, 0, 19.1, 77.8, 8.8, 144.4, 49, 37.8, 66.7, 70, 39.4, 12.7, 0.1, 27.5, 27.17, 10.6, 1.67, 7.66, 0.24, 23.26, 14.38, 0.29, 14.09, 0, 5.91, 0, 1.6, 48.758, 1.692, 1025, 0.868, true, false, false, false);
const plumsRed = createNewFood("plums (red)", 0, 0, "fruit", "red", 0.80, 46, 0.7, 9.25, 0.28, 87.23, 2.5, 2.4, 3, 2.7, 1.9, 0, 0.4, 1.3, 14.8, 9.5, 0, 1.9, 7.1, 0.5, 6.3, 2.1, 2.2, 2.9, 2.3, 6, 0, 0, 1.3, 11.42, 1.4, 0, 9.92, 3.07, 0.13, 0.04, 0, 0.04, 0, 0.02, 0, 0.01, 0, 1.754, 0, 0.857, true, false, false, false);
const plumsPurple = createNewFood("plums (purple)", 0, 0, "fruit", "purple", 0.80, 46, 0.7, 9.25, 0.28, 87.23, 2.5, 2.4, 3, 2.7, 1.9, 0, 0.4, 1.3, 14.8, 9.5, 0, 1.9, 7.1, 0.5, 6.3, 2.1, 2.2, 2.9, 2.3, 6, 0, 0, 1.3, 11.42, 1.4, 0, 9.92, 3.07, 0.13, 0.04, 0, 0.04, 0, 0.02, 0, 0.01, 0, 1.754, 0, 0.857, true, false, false, false);
const potatoes = createNewFood("potatoes", 0, 0, "vegetables", null, 0.40, 77, 2.05, 15.39, 0.09, 79.25, 7.4, 2.9, 7.6, 5.9, 19.9, 0, 2.8, 3.8, 0.1, 26.3, 0, 0.1, 2.2, 1.0, 12.2, 10.1, 7.2, 8.5, 8.1, 16.3, 0.7, 0.4, 3.8, 17.4, 2.1, 15.29, 0.82, 0.26, 0, 0.04, 0.01, 0.03, 0, 0.03, 0, 0.1, 3.2, 2.727, 70.833, 0.522, true, false, false, false);
const potatoesRed = createNewFood("potatoes (red)", 0, 0, "vegetables", "red", 0.40, 77, 2.05, 15.39, 0.09, 79.25, 7.4, 2.9, 7.6, 5.9, 19.9, 0, 2.8, 3.8, 0.1, 26.3, 0, 0.1, 2.2, 1.0, 12.2, 10.1, 7.2, 8.5, 8.1, 16.3, 0.7, 0.4, 3.8, 17.4, 2.1, 15.29, 0.82, 0.26, 0, 0.04, 0.01, 0.03, 0, 0.03, 0, 0.1, 3.2, 2.727, 70.833, 0.522, true, false, false, false);
const potatoesCharlies = createNewFood("potatoes (Charlie's)", 0, 0, "vegetables", null, 5.00, 77, 2.05, 15.39, 0.09, 79.25, 7.4, 2.9, 7.6, 5.9, 19.9, 0, 2.8, 3.8, 0.1, 26.3, 0, 0.1, 2.2, 1.0, 12.2, 10.1, 7.2, 8.5, 8.1, 16.3, 0.7, 0.4, 3.8, 17.4, 2.1, 15.29, 0.82, 0.26, 0, 0.04, 0.01, 0.03, 0, 0.03, 0, 0.1, 3.2, 2.727, 70.833, 0.522, true, false, false, false);
const proteinPowderBRaw = createNewFood("protein powder (BRaw)", 0, 0, "processed", null, 6.00, 391.71, 75, 8.5, 5.25, 0, null, null, null, null, null, 0, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null, 101.3, null, 12.25, 3.75, null, 1.25, null, null, null, null, null, 0, 0, 0, 6.75, null, null, null, null, true, false, false, false);
const proteinPowderMacroMike = createNewFood("protein powder (MacroMike)", 0, 0, "processed", null, 4.00, 354, 61, 7.7, 8.9, 0, null, null, null, null, null, 0, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null, 23, null, 17.7, 10, null, 5.9, null, null, null, null, null, 0, 2.3, 0, 2.7, null, null, null, null, true, false, false, false);
const pumpkin = createNewFood("pumpkin", 0, 0, "vegetables", "orange", 0, 20, 0.72, 3.74, 0.07, 93.69, 2.8, 7.1, 3, 4, 2.9, 0, 1.5, 2.3, 246.7, 6.3, 0, 5.3, 0.9, 1.3, 10.1, 7.1, 2.8, 4.9, 4.3, 8.8, 0.4, 0.1, 2.9, 4.9, 1.1, 0.16, 2.08, 0.63, 0.01, 0, 0, 0, 0, 0.04, 0, 0.03, 1, 2.527, 230, 1.667, true, false, false, false);
const pumpkinSeeds = createNewFood('pumpkin seeds', 0, 0, "nuts and seeds", null, 0, 574, 29.84, 8.21, 49.05, 2.03, 6.4, 13.6, 31.6, 11.4, 6.7, 0, 14.8, 14.3, 0.3, 2.4, 0, 3.7, 5, 4.3, 141.7, 100.9, 171.9, 249.4, 167.7, 30.3, 17.1, 1.2, 95.5, 14.71, 6.5, 0.74, 1.29, 0.07, 15.73, 19.86, 0.11, 19.56, 0.04, 8.54, 0, 2.39, 176.207, 5.992, 43.778, 0.095, true, false, false, false);
const radish = createNewFood("radish", 0, 0, "vegetables", "red", 0, 16, 0.68, 1.69, 0.1, 95.27, 1.1, 3.5, 1.8, 3.3, 4.7, 0, 1.5, 6.3, 0.3, 19.7, 0, 0, 1.6, 2.1, 5.6, 4.3, 3.1, 3.8, 2.9, 9, 1.2, 2.6, 3.5, 3.4, 1.6, 0, 1.86, 0.71, 0.02, 0.05, 0.03, 0, 0, 0.03, 0, 0.03, 0, 5.6, 5.974, 2.5, true, false, false, false);
const raspberries = createNewFood("raspberries", 0, 0, "fruit", "red", 1.00, 56, 1.15, 8.2, 0.81, 85, 8.1, 9.1, 4.8, 8, 4.1, 0, 2.9, 7, 3.2, 23.5, 0, 5, 8.7, 2, 10, 9.5, 7.2, 33.9, 4.3, 7.1, 0.4, 0.3, 3.9, 12.55, 4.3, 0.19, 6.54, 3.24, 0.03, 0.03, 0.02, 0.01, 0, 0.1, 0, 0.01, 0.789, 3.444, 46, 1.043, true, false, false, false);
const redCabbage = createNewFood("red cabbage", 0, 0, "vegetables", "purple", 0.80, 31, 1.43, 5.26, 0.16, 90.39, 5.8, 6.3, 3, 2.9, 13.9, 0, 4, 4.5, 47.8, 76, 0, 0.5, 42.4, 3.8, 1.9, 10, 5, 13.5, 4.3, 9.3, 1.1, 1.8, 2.8, 7.37, 2.1, 0, 3.83, 1.48, 0.01, 0.08, 0.05, 0, 0, 0.02, 0, 0.05, 0, 12.941, 9, 2.813, true, false, false, false);
const riceBlackCooked = createNewFood("black rice (cooked)", 0, 0, "grains", null, 2.0, 178.4, 3.68, 38.08, 1.28, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 13.3, null, 39.76, 1.68, null, null, null, 0.32, 0.72, null, null, 0, 0.32, 0, null, null, null, null, null, true, false, false, false);
const riceBlack = createNewFood("black rice (dry)", 0, 0, "grains", null, 1.0, 346.6, 8.9, 70.8, 2, null, null, null, null, null, null, 0, null, null, null, null, null, null, null, null, null, 20, null, null, null, 10.3, null, 0.4, null, 73.6, 2.8, null, 5, null, null, null, null, null, 0, 0.05, 0, null, null, null, 41.231, null, true, false, false, false);
const rocket = createNewFood("rocket", 0, 0, "vegetables", "green", 0, 25, 2.58, 2.03, 0.66, 91.71, 4, 7.8, 2.2, 8.7, 4.9, 0, 3.6, 24.2, 101.7, 20, 0, 2.9, 120.7, 13.3, 8.4, 18.3, 14.7, 17.8, 7.4, 14.2, 0.5, 1.8, 5.9, 3.65, 1.6, 0, 2.05, 1.02, 0.05, 0.32, 0.17, 0, 0, 0.09, 0, 0, 0, 6.184, 13.667, 3.404, true, false, false, false);
const salt = createNewFood("salt", 0, 0, "condiments", null, 0.20, 1, 0, 0, 0, 0.2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2584, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3.333, 0, 24, true, false, false, false);
const spinach = createNewFood("spinach", 0, 0, "vegetables", "green", 0.80, 23, 2.86, 1.41, 0.39, 91.4, 7.1, 17.2, 5.2, 1.3, 13, 0, 4.5, 48.5, 401.9, 37.5, 0, 13.1, 536.6, 8.3, 14.4, 33.9, 24.7, 49.8, 7, 21.5, 1.8, 5.3, 6.6, 3.63, 2.2, 0.1, 0.42, 0.15, 0.01, 0.17, 0.14, 0, 0, 0.06, 0, 0.22, 0, 4.077, 7.063, 1.253, true, false, false, false);
const seaweed = createNewFood("seaweed (wakame, raw)", 0, 0, "vegetables", "green", 5.71, 45, 3.03, 8.64, 0.64, 79.99, 5.5, 20.9, 11.4, 13.9, 0.1, 0, 3.3, 49, 15.4, 4, 0, 6.7, 5.9, 12.5, 31.6, 27.3, 33.4, 77.8, 11.4, 1.9, 1.3, 58.1, 4.8, 9.14, 0.5, 7.99, 0.65, 0, 0.06, 0.22, 0.19, 0.01, 0, 0.13, 0, 0.26, 0.053, 1.338, 0.057, 1.402, true, false, false, false);
const sesameSeeds = createNewFood("sesame seeds", 0, 0, "nuts and seeds", null, 1.66, 631, 20.45, 0.13, 61.21, 3.75, 63.5, 8.2, 41.4, 5.8, 26.7, 0, 6, 28.8, 2.8, 0, 0, 11.2, 0, 5, 155.6, 79.5, 107.8, 80, 95.3, 14.2, 62.5, 3.1, 84.1, 11.73, 11.6, 0.07, 0.48, 0.07, 23.92, 25.49, 0.26, 25.23, 0, 9.06, 0, 1.5, 95.92, 4.807, 7.872, 0.174, true, false, false, false);
const snowPeas = createNewFood("snow peas", 0, 0, "vegetables", "green", 1.20, 42, 2.8, 4.95, 0.2, 88.89, 13.6, 7.3, 4.3, 15, 10.7, 0, 4.1, 10.5, 46.6, 80, 0, 2.6, 27.8, 3.6, 8.8, 26, 7.5, 13.6, 7.6, 7.7, 1.3, 0.3, 3.4, 7.55, 2.6, 1.16, 4, 0.4, 0.02, 0.09, 0.01, 0, 0, 0.04, 0, 0.23, 0, 3.418, 50, 1.792, true, false, false, false);
const springOnionsTops = createNewFood("spring onions (tops only)", 0, 0, "vegetables", "green", 0, 27, 0.97, 3.81, 0.47, 92.32, 2.7, 2.4, 2.4, 2.8, 5.9, 0, 1, 7.5, 171.5, 17.9, 0, 1.4, 173.7, 4.3, 3.4, 6.4, 5, 8.3, 3.6, 6.1, 0.9, 1, 2.5, 5.74, 1.8, 0, 3.91, 2.12, 0.04, 0.12, 0.04, 0.08, 0, 0.17, 0, 0.06, 2.025, 6.452, 10.6, 3.25, true, false, false, false);
const strawberries = createNewFood("strawberries", 0, 0, "fruit", "red", 1.00, 35, 0.43, 6.82, 0.11, 89.97, 2, 3.4, 3.3, 2.2, 1.9, 0, 1.3, 4.3, 1.9, 54.9, 0, 1.9, 2.4, 1.3, 5.4, 9.4, 3.4, 16.1, 1.9, 5.7, 1.3, 0.1, 1.6, 9.13, 2.1, 0, 4.56, 2.17, 0.01, 0.05, 0.02, 0.03, 0, 0.01, 0, 0.02, 1.348, 2.653, 74, 1.455, true, false, false, false);
const strawberriesCharlies = createNewFood("strawberries (Charlie's)", 0, 0, "fruit", "red", 1.60, 35, 0.43, 6.82, 0.11, 89.97, 2, 3.4, 3.3, 2.2, 1.9, 0, 1.3, 4.3, 1.9, 54.9, 0, 1.9, 2.4, 1.3, 5.4, 9.4, 3.4, 16.1, 1.9, 5.7, 1.3, 0.1, 1.6, 9.13, 2.1, 0, 4.56, 2.17, 0.01, 0.05, 0.02, 0.03, 0, 0.01, 0, 0.02, 1.348, 2.653, 74, 1.455, true, false, false, false);
const sunflowerSeeds = createNewFood("sunflower seeds", 0, 0, "nuts and seeds", null, 0.80, 584, 20.78, 11.39, 51.46, 4.73, 134.5, 32.3, 59.5, 22.6, 8.97, 0, 13, 56.8, 2.1, 1.9, 0, 234.5, 0, 6.5, 200, 65.6, 101.6, 108.3, 94.3, 24.8, 96.4, 0.6, 62.5, 20, 8.6, 5.66, 2.62, 0, 18.53, 23.14, 0.09, 23.05, 0, 4.45, 0, 1.66, 261.932, 2.778, 71.667, 0.24, true, false, false, false)
const swede = createNewFood("swede", 0, 0, "vegetables", "yellow", 0.50, 37, 1.08, 6.3, 0.16, 89.43, 8.2, 3.6, 5, 3.2, 6.7, 0, 3.3, 5.3, 0.1, 33.3, 0, 2, 0.3, 3.6, 3.6, 5.5, 6.3, 7.3, 7.6, 11.7, 1.3, 0.8, 3, 8.62, 2.3, 0.4, 4.46, 1.61, 0.03, 0.09, 0.05, 0, 0, 0.03, 0, 0.04, 0, 7.5, 25.417, 2.15, true, false, false, false);
const sweetPotatoCharlies = createNewFood("sweet potato (Charlie's)", 0, 0, "vegetables", "orange", 5.00, 86, 1.57, 17.08, 0.05, 77.28, 7.1, 5.5, 4, 16, 13.9, 0, 2.9, 2.8, 608.1, 3.2, 0, 1.7, 2, 2.5, 16.8, 7.6, 7.8, 14.3, 6.7, 13, 1.1, 3.7, 3.8, 20.1, 3, 12.65, 4.18, 0.7, 0, 0.01, 0, 0, 0, 0.02, 0, 0.09, 0, 1.987, 6.127, 1.2, true, false, false, false);
const sweetPotatoOrange = createNewFood("sweet potato (orange)", 0, 0, "vegetables", "orange", 1.00, 86, 1.57, 17.08, 0.05, 77.28, 7.1, 5.5, 4, 16, 13.9, 0, 2.9, 2.8, 608.1, 3.2, 0, 1.7, 2, 2.5, 16.8, 7.6, 7.8, 14.3, 6.7, 13, 1.1, 3.7, 3.8, 20.1, 3, 12.65, 4.18, 0.7, 0, 0.01, 0, 0, 0, 0.02, 0, 0.09, 0, 1.987, 6.127, 1.2, true, false, false, false);
const sweetPotatoPurple = createNewFood("sweet potato (purple)", 0, 0, "vegetables", "purple", 1.00, 86, 1.57, 17.08, 0.05, 77.28, 7.1, 5.5, 4, 16, 13.9, 0, 2.9, 2.8, 608.1, 3.2, 0, 1.7, 2, 2.5, 16.8, 7.6, 7.8, 14.3, 6.7, 13, 1.1, 3.7, 3.8, 20.1, 3, 12.65, 4.18, 0.7, 0, 0.01, 0, 0, 0, 0.02, 0, 0.09, 0, 1.987, 6.127, 1.2, true, false, false, false);
const tahini = createNewFood("tahini", 0, 0, "nuts and seeds", null, 1.3246, 595, 17, 11.89, 53.76, 3.05, 110.9, 43, 38.9, 13.9, 9.9, 0, 6.1, 24.5, 2.9, 0, 0, 1.7, 0, 35.5, 178.9, 111.9, 29.7, 80.9, 104.6, 15.9, 62.5, 7.7, 57.8, 21.19, 9.3, 5.95, 1.94, 0.07, 20.3, 23.56, 0.41, 23.13, 0.53, 7.5, 0, 1.3, 56.838, 2.87, 3.6, 4.484, true, false, false, false);
const tangelo = createNewFood("tangelo", 0, 0, "fruit", "orange", 0.50, 47, 0.94, 9.09, 0.12, 86.75, 7.9, 3.6, 2, 5, 4, 0, 2, 7.5, 9.6, 70.9, 0, 1.7, 0, 3.3, 5, 1.3, 3.1, 1.4, 2, 7, 0.9, 0, 0.9, 11.75, 2.35, 0, 9.35, 2.03, 0.02, 0.03, 0.01, 0.02, 0, 0.01, 0, 0.02, 2.571, 1.556, 0, 4, true, false, false, false);
const tofu = createNewFood ('tofu', 0, 0,  'legumes', null, 0, 103.7, 12.02, 2.43, 5.55, 77.3, 7.3, 7.6, 1, 2.9, 6.3, 0, 8.8, 6.3, 0, 0.4, 0, 0.1, 3.5, 22.3, 31.4, 26.8, 15.4, 46.2, 23, 7.6, 23.9, 1.1, 13.8, 3.79, 5.7, 0, 0, 0, 1.5, 2.19, 0.22, 1.91, 0, 1.06, 0, 0.97, 8.617, 3.901, 12.333, 5.432, true, false, false, false) 
const tomatoesCherry = createNewFood("tomatoes (cherry)", 0, 0, "vegetables", "red", 1.75, 18, 0.88, 2.57, 0.2, 94.52, 3.4, 1.7, 4.2, 1.8, 5.3, 0, 1.6, 3.8, 35.7, 18.3, 0, 3.6, 8.8, 0.8, 6.6, 3.4, 3.4, 6.3, 3.4, 9.1, 0, 0.3, 2.1, 3.89, 1.2, 0, 2.63, 1.37, 0.03, 0.08, 0, 0, 0, 0.03, 0, 0.03, 0, 2.881, 47.4, 0.909, true, false, false, false);
const tomatoesRed = createNewFood("tomatoes (red)", 0, 0, "vegetables", "red", 0.666, 18, 0.88, 2.57, 0.2, 94.52, 3.4, 1.7, 4.2, 1.8, 5.3, 0, 1.6, 3.8, 35.7, 18.3, 0, 3.6, 8.8, 0.8, 6.6, 3.4, 3.4, 6.3, 3.4, 9.1, 0, 0.3, 2.1, 3.89, 1.2, 0, 2.63, 1.37, 0.03, 0.08, 0, 0, 0, 0.03, 0, 0.03, 0, 2.881, 47.4, 0.909, true, false, false, false);
const tomatoesKumato = createNewFood("tomatoes (kumato)", 0, 0, "vegetables", "red", 1.3333, 18, 0.88, 2.57, 0.2, 94.52, 3.4, 1.7, 4.2, 1.8, 5.3, 0, 1.6, 3.8, 35.7, 18.3, 0, 3.6, 8.8, 0.8, 6.6, 3.4, 3.4, 6.3, 3.4, 9.1, 0, 0.3, 2.1, 3.89, 1.2, 0, 2.63, 1.37, 0.03, 0.08, 0, 0, 0, 0.03, 0, 0.03, 0, 2.881, 47.4, 0.909, true, false, false, false);
const turnip = createNewFood("turnip", 0, 0, "vegetables", null, 1.00, 28, 0.9, 4.57, 0.1, 91.87, 3.6, 2.7, 2.9, 4, 6, 0, 2.6, 3.8, 0, 28, 0, 0.2, 0.1, 2.5, 9.4, 3.8, 3.4, 7.4, 3.9, 7.3, 1.3, 4.5, 3.4, 6.43, 1.8, 0.18, 3.8, 1.43, 0.01, 0.05, 0.04, 0, 0, 0.01, 0, 0.03, 0, 3.176, 2.851, 2.727, true, false, false, false);
const walnuts = createNewFood("walnuts", 0, 0, "nuts and seeds", null, 2.316, 654, 15.23, 6.81, 65.21, 4.07, 31, 13.6, 8, 11.4, 35.8, 0, 9.2, 24.5, 0.9, 1.7, 0, 4.7, 3, 8.2, 176.2, 36.4, 49.4, 189.7, 49.4, 17, 8.9, 0.1, 38.6, 13.71, 6.7, 0.06, 2.61, 0.09, 8.93, 47.17, 9.08, 38.09, 0, 6.13, 0, 1.17, 4.195, 1.948, 220.5, 0.620, true, false, false, false);
const waterChestnuts = createNewFood("water chestnuts", 0, 0, "vegetables", null, 0.5882, 49, 0.9, 10.9, 0, 85.6, 0.9, 2.7, 2.1, 4.4, 10.7, 0, 4.6, 1.4, 0, 8, 0, 3.3, 0.2, 1.5, 3.3, 6.3, 0.9, 1.7, 10.3, 5.9, 1.3, 0.9, 2.1, 13.1, 2.2, 5.3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5.667, 11, 5.98, true, false, false, false);
const watermelon = createNewFood("watermelon", 0, 0, "fruit", "red", 1.6, 30, 0.61, 7.12, 0.15, 91.45, 3, 1.9, 1.3, 4.4, 3, 0, 1, 0.8, 24.4, 10.8, 0, 0.3, 0.1, 0.6, 4.7, 3, 3.1, 2.1, 1.6, 4.3, 0.7, 0.1, 1.3, 7.55, 0.4, 0, 6.2, 3.36, 0.04, 0.05, 0, 0.05, 0, 0.02, 0, 0.02, 0, 2.381, 112, 0.7, true, false, false, false);
const zucchini = createNewFood("zucchini", 0, 0, "vegetables", "green", 1.20, 17, 1.21, 2.06, 0.32, 94.79, 4.1, 8.5, 3.2, 4.1, 10.9, 0, 2.2, 6, 8.6, 23.9, 0, 0.8, 4.8, 1.3, 5.9, 4.6, 5.6, 9.8, 5.4, 10, 0.4, 0.5, 4, 3.11, 1, 0, 2.5, 1.38, 0.01, 0.09, 0.06, 0.03, 0, 0.08, 0, 0.07, 0.492, 6.038, 32.625, 0.889, true, false, false, false);



// FUNCTION FACTORY TO CREATE NEW MACRONUTRIENT
const createNewMacroNutrient = (name, nameCap, RDIg = null, maxThreshold = null, heading1 = "", average) => {
  return {
    name,
    nameCap,
    RDIg: null,
    maxThreshold: null,
    heading1: "",
    average
  }
}

const satFat = createNewMacroNutrient("saturated fat", "Saturated fat", null, null, heading1 = "", 0);
const monosatFat = createNewMacroNutrient("monosaturated fat - plant origin", "Monosaturated fat - plant origin", null, null, heading1 = "", 0);
const polyunsatFat = createNewMacroNutrient("polyunsaturated fat", "Polyunsaturated fat", null, null, heading1 = "", 0);
const carbs = createNewMacroNutrient("carbohydrates", "Carbohydrates", null, null, "", 0);
const netCarbs = createNewMacroNutrient("net carbohydrates", "Net Carbohydrates", null, null, "", 0);
const protein = createNewMacroNutrient("protein", "Protein", null, null, "", 0);
const fat = createNewMacroNutrient("fat", "Fat", null, null, "", 0);
const fibre = createNewMacroNutrient("fibre", "Fibre", null, null, "", 0);

//// FUNCTION FACTORY TO CREATE NEW MICRONUTRIENT ARRAYS

// vitaminB1, vitaminB2, vitaminB3, vitaminB5, vitaminB6, vitaminB12, choline, folate, vitaminA, vitaminC, vitaminD, vitaminE, vitaminK, calcium, copper, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, zinc, carbs, fibre, starch, sugar, fructose, monosatFat, polyunsatFat, omega3, omega6, transFat, satFat, cholesterol, leucine, omegaRatio, zincCopperRatio, potassiumSodiumRatio, calciumMagnesiumRatio


const createNewMicroNutrient = (name, nameCap, RDImg, RDIiu, maxThreshold, heading1 = "", richFoodsHeading = "", ultraRichFoodsHeading = "", megaRichFoodsHeading = "", noRichFoodsMessage = "", infoDeficiency = "", infoFoods = "", alert = "", severeDeficiencyMessage = "", deficiencyMessage = "", borderlineMessage = "", richFoodsArray = [], richFoodsNamesArray = [], richFoodsList = "", richFoodsListWithPercentAndPrice = "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", showNutrient, alertIfHigh, alertIfLow, borderlineNutrient, deficientNutrient, veryDeficientNutrient, weekly = [], total, average, in2000) => {
  return {
    name,
    nameCap,
    RDImg,
    RDIiu,
    maxThreshold,
    heading1: "",
    richFoodsHeading: "",
    ultraRichFoodsHeading: "",
    megaRichFoodsHeading: "",
    noRichFoodsMessage: "",
    infoDeficiency: "",
    infoFoods: "",
    alert: "",
    severeDeficiencyMessage: "",
    deficiencyMessage: "",
    borderlineMessage: "",
    richFoodsArray: [],
    richFoodsNamesArray: [],
    richFoodsList: "",
    richFoodsListWithPercentAndPrice: "",
    ultraRichFoodsArray: [],
    ultraRichFoodsNamesArray: [],
    ultraRichFoodsList: "",
    megaRichFoodsArray: [],
    megaRichFoodsNamesArray: [],
    megaRichFoodsList: "",
    showNutrient,
    alertIfHigh,
    alertIfLow,
    borderlineNutrient,
    deficientNutrient,
    veryDeficientNutrient,
    weekly: [],
    total,
    average
  }
}

const vitaminA = createNewMicroNutrient("vitamin A", "Vitamin A", RDImg = null, 2333, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const vitaminB1 = createNewMicroNutrient("vitamin B1", "Vitamin B1", 1.1, null, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], richFoodsList = "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const vitaminB2 = createNewMicroNutrient("vitamin B2", "Vitamin B2", 1.1, null, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const vitaminB3 = createNewMicroNutrient("vitamin B3", "Vitamin B3", 14, null, 35, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const vitaminB5 = createNewMicroNutrient("vitamin B5", "Vitamin B5", 5, null, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const vitaminB6 = createNewMicroNutrient("vitamin B6", "Vitamin B6", 1.5, null, 100, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], richFoodsList = "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const vitaminB12 = createNewMicroNutrient("vitamin B12", "Vitamin B12", 0.0024, null, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const choline = createNewMicroNutrient("choline", "Choline", 425, null, 3500, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const folate = createNewMicroNutrient("folate", "Folate", 0.4, null, 1, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const vitaminC = createNewMicroNutrient("vitamin C", "Vitamin C", 75, null, 2000, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const vitaminD = createNewMicroNutrient("vitamin D", "Vitamin D", null, 600, 4000, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const vitaminE = createNewMicroNutrient("vitamin E", "Vitamin E", 15, null, 1000, "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const vitaminK = createNewMicroNutrient("vitamin K", "Vitamin K", 0.09, null, 2, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const calcium = createNewMicroNutrient("calcium", "Calcium", 1200, null, 2000, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const copper = createNewMicroNutrient("copper", "Copper", 0.9, null, 10, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const iron = createNewMicroNutrient("iron", "Iron", 8, null, 45, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const magnesium = createNewMicroNutrient("magnesium", "Magnesium", 320, null, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const manganese = createNewMicroNutrient("manganese", "Manganese", 1.8, null, 11, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const phosphorus = createNewMicroNutrient("phosphorus", "Phosphorus", 700, null, 4000, "", "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const potassium = createNewMicroNutrient("potassium", "Potassium", 2600, null, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const selenium = createNewMicroNutrient("selenium", "Selenium", 0.055, null, 0.4, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const sodium = createNewMicroNutrient("sodium", "Sodium", 1500, null, 2300, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const zinc = createNewMicroNutrient("zinc", "Zinc", 8, null, 40, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, true, true, false, false, false, weekly = [], 0, 0);
const omega6 = createNewMicroNutrient("omega 6", "Omega 6", 1100, null, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const omega3 = createNewMicroNutrient("omega 3", "Omega 3", 11000, null, null, "", "", "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const omegaRatio = createNewMicroNutrient("omega 6 : omega 3 ratio", "Omega 6 : Omega 3 Ratio", null, null, null, "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const zincCopperRatio = createNewMicroNutrient("zinc copper ratio", "Zinc Copper Ratio", null, null, null, "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const potassiumSodiumRatio = createNewMicroNutrient("potassium sodium ratio", "Potassium Sodium Ratio", null, null, null, "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);
const calciumMagnesiumRatio = createNewMicroNutrient("calcium magnesium ratio", "Calcium Magnesium Ratio", null, null, null, "", "", "", "", "", "", "", "", "", richFoodsArray = [], richFoodsNamesArray = [], "", "", ultraRichFoodsArray = [], ultraRichFoodsNamesArray = [], ultraRichFoodsList = "", megaRichFoodsArray = [], megaRichFoodsNamesArray = [], megaRichFoodsList = "", true, false, true, false, false, false, weekly = [], 0, 0);


const myFood = { // THE myFood OBJECT
  foods: [acai, almondMilkSoGood, almonds, apples, applesGreen, applesRed, asparagus, avocadoHass, avocadoOil, avocadoShephard, bananas, bananasCharlies, bananasFrozen, bananasFrozenOrganic, beetroot, blackBeans, blackberries, blueberries, bluePeas, bokChoy, brazilNuts, broccoli, broccolini, butterBeans, cabbage, cacao, cantaloupe, capsicumGreen, capsicumRed, carrots, cashewNuts, cauliflower, celery, cheeseFeta, cherries, chiaSeeds, chickpeas, chickpeasCharlies, chocolateCharlies, chocolatePanaMint, coconut, coconutWater, coconutYoghurt, coriander, corn, cottageCheese, cucumber, dates, dragonfruit, edamame, eggplant, eggs, fennel, ginger, gojiBerries, greenBeans, grapefruit, grapefruitPink, grapesGreen, grapesPurple, grapesRed, hazelnuts, kale, kidneyBeans, kiwifruitGreen, kiwifruitGold, lentils, leeks, lettuceCos, lettuceMixedGreens, lettuceIceberg, linseeds, macadamiaNuts, macadamiaOil, mandarin, mango, mungBeanSprouts, mushrooms, nectarine, olivesBlack, olivesGreen, oliveOil, onion, oranges, parsley, parsnip, passionfruit, peanuts, pears, peas, pecans, pineapple, pintoBeans, pistachioNuts, plumsPurple, plumsRed, potatoes, potatoesRed, potatoesCharlies, proteinPowderBRaw, proteinPowderMacroMike, pumpkin, pumpkinSeeds, radish, raspberries, redCabbage, riceBlack, riceBlackCooked, rocket, salt, seaweed, sesameSeeds, snowPeas, spinach, springOnionsTops, sunflowerSeeds, strawberries, strawberriesCharlies, swede, sweetPotatoCharlies, sweetPotatoOrange, sweetPotatoPurple, tahini, tangelo, tofu, tomatoesCherry, tomatoesKumato, tomatoesRed, turnip, walnuts, waterChestnuts, watermelon, zucchini],
  myShoppingCartFoods: [],
  myContributoryFoods: [],
  myContributoryFoodsNames: [],
  myFrequentFoods: [],
  myFrequentFoodsNames: [],
  myVeryFrequentFoods: [],
  myVeryFrequentFoodsNames: [],
  myMonopolyFoods: [],
  myMonopolyFoodNames: [],
  myCommonFoods: [],
  myCommonFoodsNames: [],
  myFavFoods: [],
  myUnFavButShowFoods: [],
  myShowFoods: [],
  myHideFoods: [],
  myTopPriorityFoods: [],
  myTopPriorityFoodsNames: [],
  myRecommendedFoods: [],
  myRecommendedFoodsNames: [],
  myUsefulFoods: [],
  myUsefulFoodsNames: [],
  myNovelFoodChoices: [],
  myNovelFoodChoicesNames: [],
  myFruitsWeek: [],
  myFruitsButAlsoFatsWeek: [],
  myVegetablesWeek: [],
  myNutsAndSeedsWeek: [],
  myLegumesWeek: [],
  myHerbsWeek: [],
  myEggsWeek: [],
  myDairyWeek: [],
  myOtherWeek: [],
  resetPrice(object, newPrice) {
    object.price = newPrice
  },
  resetPriceComplex(object, volume1, price1, volume2 = null, price2 = null, volume3 = null, price3 = null, volume4 = null, price4 = null, volume5 = null, price5 = null, volume6 = null, price6 = null, volume7 = null, price7 = null, volume8 = null, price8 = null) {
    let totalVolume = volume1 + volume2 + volume3 + volume4 + volume5 + volume6 + volume7 + volume8;
    let totalPrice = (volume1 * price1) + (volume2 * price2) + (volume3 * price3) + (volume4 * price4) + (volume5 * price5) + (volume6 * price6) + (volume7 * price7) + (volume8 * price8);
    object.price = totalPrice / totalVolume;
  },
  hideFoodCategory(myname = null, foodgroup = null) { // method
    this.foods.forEach(food => {
      if (typeof myname === "string" && food.category === foodgroup) food.showFood = false;
    }); // end for each
  },
  showFoodCategory(myname = null, foodgroup = null) { // method
    this.foods.forEach(food => {
      if (typeof myname === "string" && food.category === foodgroup) food.showFood = true;
    }); // end for each
  },
  hideFood(myname = null, foodtohide = null) { // method
    this.foods.forEach(food => {
      if (typeof myname === "string" && food === foodtohide) food.showFood = false;
    }); // end for each
  },
  showFood(myname = null, foodtoshow = null) { // method
    this.foods.forEach(food => {
      if (typeof myname === "string" && food === foodtoshow) food.showFood = true;
    }); // end for each
  },
  favFood(myname = null, foodtofav = null) { // method
    this.foods.forEach(food => {
      if (typeof myname === "string" && food === foodtofav) food.favFood = true;
    }); // end for each
  },
  unfavFood(myname = null, foodtounfav = null) { // method
    this.foods.forEach(food => {
      if (typeof myname === "string" && food === foodtounfav) food.favFood = false;
    }); // end for each
  },
  get generateMyFavFoods() { // getter
    this.myFavFoods = this.foods.filter(food => food.favFood === true)
  },
  get generateMyFavFoodsNames() { // getter
    this.myFavFoodsNames = this.myFavFoods.map(food => food.name)
  },
  get generateMyUnFavButShowFoods() { // getter
    this.myUnFavButShowFoods = this.myShowFoods.filter(food => food.favFood === false)
  },
  get generateMyShowFoods() { // getter
    this.myShowFoods = this.foods.filter(food => food.showFood === true)
  },
  get generateMyHideFoods() { // getter
    this.myHideFoods = this.foods.filter(food => food.showFood === false)
  },
  get generateMyHideFoodsNames() { // getter
    this.myHideFoodsNames = this.myHideFoods.map(food => food.name)
  },
  get generateMyShoppingCartFoods() { // getter
    this.myShoppingCartFoods = this.myShowFoods.filter(food => food.weeklyVolume > 0)
  },
  get generateMyContributoryFoods() { // getter
    this.myContributoryFoods = this.myShoppingCartFoods.filter(food => food.weeklyEnergy >= 50 * numDaysOfGroceries && food.weeklyEnergy < 100 * numDaysOfGroceries)
  },
  get generateMyContributoryFoodsNames() { // getter
    this.myContributoryFoodsNames = this.myContributoryFoods.map(food => food.name)
  },
  get generateMyFrequentFoods() { // getter
    this.myFrequentFoods = this.myShoppingCartFoods.filter(food => food.weeklyEnergy >= 100 * numDaysOfGroceries && food.weeklyEnergy < 200 * numDaysOfGroceries)
  },
  get generateMyFrequentFoodsNames() { // getter
    this.myFrequentFoodsNames = this.myFrequentFoods.map(food => food.name)
  },
  get generateMyVeryFrequentFoods() { // getter
    this.myVeryFrequentFoods = this.myShoppingCartFoods.filter(food => food.weeklyEnergy >= 200 * numDaysOfGroceries && food.weeklyEnergy < 300 * numDaysOfGroceries)
  },
  get generateMyVeryFrequentFoodsNames() { // getter
    this.myVeryFrequentFoodsNames = this.myVeryFrequentFoods.map(food => food.name)
  },
  get generateMyMonopolyFoods() { // getter
    this.myMonopolyFoods = this.myShoppingCartFoods.filter(food => food.weeklyEnergy >= 300 * numDaysOfGroceries)
  },
  get generateMyMonopolyFoodsNames() { // getter
    this.myMonopolyFoodsNames = this.myMonopolyFoods.map(food => food.name)
  },
  get generateMyCommonFoods() { // getter
    this.myCommonFoods = this.myShoppingCartFoods.filter(food => food.weeklyEnergy >= 50 * numDaysOfGroceries)
  },
  get generateMyCommonFoodsNames() { // getter
    this.myCommonFoodsNames = this.myCommonFoods.map(food => food.name)
  },
} // end of food object



const nutrients = { // THE nutrient OBJECT
  macronutrients: [netCarbs, carbs, fibre, protein, fat], //energy, water,
  micronutrients: [vitaminA, vitaminB1, vitaminB2, vitaminB3, vitaminB5, vitaminB6, vitaminB12, choline, folate, vitaminC, vitaminD, vitaminE, vitaminK, calcium, copper, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, zinc, omega6, omega3],
  carbohydrates: [], //netCarbs, carbs, fibre, starch, sugar, not used
  macrolipids: [monosatFat, polyunsatFat, satFat],
  lipids: [omega6, omega3], //monoPolySatFatRatio to add?
  protein: [], //leucine not used
  vitamins: [vitaminA, vitaminB1, vitaminB2, vitaminB3, vitaminB5, vitaminB6, vitaminB12, choline, folate, vitaminC, vitaminD, vitaminE, vitaminK],
  minerals: [calcium, copper, iron, magnesium, manganese, phosphorus, potassium, selenium, sodium, zinc],
  ratios: [zincCopperRatio, potassiumSodiumRatio, calciumMagnesiumRatio],
  averages: [],
  averageMinerals: [],
  averageLipids: [],
  veryDeficientNutrientsArray: [],
  veryDeficientNutrientsNamesArray: [],
  deficientNutrientsArray: [],
  deficientNutrientsNamesArray: [],
  borderlineNutrientsArray: [],
  borderlineNutrientsNamesArray: [],
  lowerNutrientsArray: [],
  lowerNutrientsNamesArray: [],
  alertIfHighNutrientsArray: [],
  alertIfHighNutrientsNamesArray: [],
  noConcernHighNutrientsArray: [],
  noConcernHighNutrientsNamesArray: [],
  get fillMicroNutrientsText() { //getter
    this.micronutrients.forEach(nutrient => {
      nutrient.heading1 += `<h4 class = \"nutrientHeading\">Foods rich in ${nutrient.name}</h4>`;
      nutrient.megaRichFoodsHeading = `<h5 class =\"padTop\">Foods containing at least 8 x RDI <span class = "bold">${nutrient.name}</span> on an energy basis include - </h5>`;
      nutrient.ultraRichFoodsHeading = `<h5 class =\"padTop\">Foods containing between 4 and 8 x RDI <span class = "bold">${nutrient.name}</span> on an energy basis include - </h5>`;
      nutrient.richFoodsHeading = `<h5 class =\"padTop\">Foods containing between 2 and 4 x RDI <span class = "bold">${nutrient.name}</span> on an energy basis include - </h5>`;
      nutrient.severeDeficiencyMessage += `Your foods are extremely low in <span class = "bold red">${nutrient.name}</span> : ${nutrient.average.toFixed(0)}% of RDI`;
      nutrient.deficiencyMessage += `Your foods are low in <span class = "bold">${nutrient.name}</span> : ${nutrient.average.toFixed(0)}% of RDI`
      nutrient.borderlineMessage += `Your foods are borderline in <span class = "bold">${nutrient.name}</span> : ${nutrient.average.toFixed(0)}% of RDI; you may not reach daily targets for this nutrient`;
      nutrient.noRichFoodsMessage += `None of your foods contain 2 x RDI <span class = "bold">${nutrient.name}</span> on an energy basis. Please check you have not hidden too many foods or food groups!`
    }); // end for Each
  },


} // end nutrients object


const createNewUser = (userName, budgetTips, highNutrients, advancedHighNutrients, eatTheRainbow, eatLotsOfPlants, nutrientsHelp, learnMore, alertHighCost, alertHighCalories) => {
  return {
    userName,
    budgetTips,
    highNutrients,
    advancedHighNutrients,
    eatTheRainbow,
    eatLotsOfPlants,
    nutrientsHelp,
    learnMore,
    alertHighCost,
    alertHighCalories
  }
}

const Karen = createNewUser("Karen", true, true, true, true, true, true, true, true);
const Nici = createNewUser("Nici", false, true, true, true, false, false, false, false);
let budgetTips;

const user = { // The user object
  userName: "guest",
  userName(myusername) {
    if (typeof myusername === "string") userName = myusername;
  },
  goal(mygoal) {
    if (mygoal === "high nutrients") highNutrients = true;
    if (mygoal === "advanced high nutrients") advancedHighNutrients = true;
    if (mygoal === "eat the rainbow") eatTheRainbow = true;
    if (mygoal === "eat lots of plants") eatLotsOfPlants = true;
    if (mygoal === "extra help with nutrients") nutrientsHelp = true;
    if (mygoal === "learn more") learnMore = true;
  },
  alertHighCost(myusername = null) {
    if (typeof myusername === "string") alertHighCost = true;
  },
  alertHighCalories(myusername = null) {
    if (typeof myusername === "string") alertHighCalories = true;
  },
  budgetTips(myusername = null) {
    if (typeof myusername === "string") budgetTips = true;
  },

} // end user object

// myFood, nutrients and user objects all created now




//----------------------------------------------------------------------------------------=================================================================================

//USER INPUT REQUIRED BELOW IN YOUR USER FORM
//RESET PRICE FUNCTION
//IF PRICE OF GROCERY ITEM CHANGES RESET THE VALUE HERE AND RUN THE FUNCTION

// changes value of object price and returns this.price 
//myFood.resetPrice(object, price)

//myFood.resetPriceComplex(object, volume1, price1, volume2 = null, price2 = null, volume3 = null, price3 = null) // etc etc up to 8 values); to enter multiple prices for the same food item



// FUNCTION TO RESET WEEKLY VOLUME TO MATCH INPUT FOR WEIGHT, PRICE AND NUTIENTS
// REQUIRED TO ALLOW USER TO INPUT NEW VOLUMES

const setWeeklyVolume = (food, serveOf100g = 0) => {
  food.weeklyVolume = serveOf100g;
  food.weeklyPrice = serveOf100g * food.price;
  food.weeklyEnergy = serveOf100g * food.energy;
  food.weeklyProtein = serveOf100g * food.protein;
  food.weeklyNetCarbs = serveOf100g * food.netCarbs;
  food.weeklyFat = serveOf100g * food.fat;
  food.weeklyPotassium = serveOf100g * food.potassium;
  food.weeklyWater = serveOf100g * food.water;
  food.weeklyCarbs = serveOf100g * food.carbs;
  food.weeklyFibre = serveOf100g * food.fibre;
  food.weeklyVitaminB1 = serveOf100g * food.vitaminB1;
  food.weeklyVitaminB2 = serveOf100g * food.vitaminB2;
  food.weeklyVitaminB3 = serveOf100g * food.vitaminB3;
  food.weeklyVitaminB5 = serveOf100g * food.vitaminB5;
  food.weeklyVitaminB6 = serveOf100g * food.vitaminB6;
  food.weeklyVitaminB12 = serveOf100g * food.vitaminB12;
  food.weeklyCholine = serveOf100g * food.choline;
  food.weeklyFolate = serveOf100g * food.folate;
  food.weeklyVitaminA = serveOf100g * food.vitaminA;
  food.weeklyVitaminC = serveOf100g * food.vitaminC;
  food.weeklyVitaminD = serveOf100g * food.vitaminD;
  food.weeklyVitaminE = serveOf100g * food.vitaminE;
  food.weeklyVitaminK = serveOf100g * food.vitaminK;
  food.weeklyCalcium = serveOf100g * food.calcium;
  food.weeklyCopper = serveOf100g * food.copper;
  food.weeklyIron = serveOf100g * food.iron;
  food.weeklyMagnesium = serveOf100g * food.magnesium;
  food.weeklyManganese = serveOf100g * food.manganese;
  food.weeklyPhosphorus = serveOf100g * food.phosphorus;
  food.weeklyPotassium = serveOf100g * food.potassium;
  food.weeklySelenium = serveOf100g * food.selenium;
  food.weeklySodium = serveOf100g * food.sodium;
  food.weeklyZinc = serveOf100g * food.zinc;
  food.weeklyOmega6 = serveOf100g * food.omega6;
  food.weeklyOmega3 = serveOf100g * food.omega3;
  food.weeklyStarch = serveOf100g * food.starch;
  food.weeklySugar = serveOf100g * food.sugar;
  food.weeklyFructose = serveOf100g * food.fructose;
  food.weeklyMonosatFat = serveOf100g * food.monosatFat;
  food.weeklyPolyunsatFat = serveOf100g * food.polyunsatFat;
  food.weeklyTransFat = serveOf100g * food.transFat;
  food.weeklySatFat = serveOf100g * food.satFat;
  food.weeklyCholesterol = serveOf100g * food.cholesterol;
  food.weeklyLeucine = serveOf100g * food.leucine;
}

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


// FOR KAREN ONLY
  
// ENTER YOUR WEEKLY FOOD INTAKE (YOUR GROCERY LIST) HERE
//KAREN remember to reset price and show/hide foods and numDaysOfGroceries above
//up to date price is required before weekly volumes are entered

//USER INPUT REQUIRED (all users)
user.userName("Karen")
 user.budgetTips("Karen");
 user.alertHighCost("Karen");
 user.alertHighCalories("Karen")
 let numDaysOfGroceries = 7;
 let groceryStatus = "final";
let date = "Monday 20 September 2021";
let startDate = " Tuesday 14 September 2021";
let month = "September";
let season = "Spring"
 // these user inputs have been set now



 //myFood.resetPriceComplex(object, volume1, price1, volume2, price2, volume3 = null, price3 = null, volume4 = null, price4 = null); // to enter multiple prices for the same food item
 //myFood.resetPrice(acai, 0);
 myFood.resetPrice(applesRed, 0.474); // 0.40, 0.425, 0.33, 0.39, 0.39, 0.52, 0.39, 0.30, 0.33, 0.31, 0.40, 0.37, 0.38, 0.47 (default 0.40)
 myFood.resetPrice(applesGreen, 0.382); // 0.35, 0.41, 0.43, 0.47, 0.47, 0.38, 0.42, 0.39, 0.35, 0.42, 0.48, 0.38 (default 0.40)
 //myFood.resetPrice(asparagus, 0);
//myFood.resetPrice(avocadoShephard, 0); // 0.86, 0.92, 0.65, default 0.80
 //myFood.resetPriceComplex(avocadoShephard, 1.962, 1.02);
 myFood.resetPrice(avocadoHass, 0.694); // 0.91, 0.7, 0.67, 0.72, 0.78, 0.63, 0.51, 0.55, 0.69
 myFood.resetPriceComplex(bananas, 5.49, 0.46); //fresh varies each shop, green bowl $4/100g, 0.50, 0.60, 0.52, 0.41, 0.41, 0.49, 0.65, 0.67, 0.73, 0.51, 0.60, 0.40, 0.46 (default 0.50)
 //myFood.resetPrice(bananasFrozenOrganic, 1.3333); //on special $6 usually 1.5555
 myFood.resetPriceComplex(blackBeans, 0, 0.666, 7.2, 0.58333) //$1.60, $1.40
 myFood.resetPriceComplex(broccoli, 2.5, 0.666, 0, 0.84, 0.5, 1.40, 0.5, 1, 1.5, 0.588, 4.4, 0.218); //ricespecial, rice, superfoods, simmer, oriental, bunch
 myFood.resetPrice(broccolini, 1.06); // default is 200g bunch $2.50 = $1.25, 1.395, 0.926, 1.50, 1.18, 1.71, 1.55, 2.16, 1.15
 myFood.resetPrice(butterBeans, 0.588) // oriental $4.50 is 0.529 default is oriental $5 0.588
 //myFood.resetPrice(cantaloupe, 0.3); // to correct once weighed skin, 1254 for $3
 myFood.resetPriceComplex(carrots, 10, 0.20, 0.5, 1.4, 0.9375, 0.8, 0.5, 1.0, 1.5, 0.588, 0, 0.666); //1kg bag, superfoods, rainbow, simmer, oriental, rice
 myFood.resetPriceComplex(capsicumRed, 1, 0.588, 7.11, 0.49); // oriental $4.50 is 0.529, $4 is 0.47 default is oriental $5 0.588, traditional on special, fresh default 0.40 but was 0.81, 0.35, 0.60, 0.59, 0.74, 0.68
 //myFood.resetPrice(capsicumGreen, 0.404), //0.41, 0.40 default 0.40
 //myFood.resetPrice(cashewNuts, 3.5);
 myFood.resetPriceComplex(cauliflower, 0, 0.84, 2.5, 0.6666, 0.5, 1, 9.52, 0.263); //rice, ricespecial, simmer, fresh 0.57, 0.38, 0.31, 0.20, 0.3, 0.44, 0.33, 0.26
//myFood.resetPrice(coconut, 3.5)
//myFood.resetPrice(coconutWater, 4)
//myFood.resetPrice(coconutYoghurt, 0)
 myFood.resetPriceComplex(corn, 0, 0.47, 0.375, 0.80); //peas and corn, rainbow
//myFood.resetPrice(cucumber, 1.19) //$1.90 each, 0.69, 0.86, 0.91, 1.14, 1.14, 1.19 (default 0.85)
 //myFood.resetPrice(eggplant, 1.06) // 0.73, 0.63, 0.86, 1.10, 1.32, 0.78, 0.97, 0.53, 1.03, 1.06 (default is 0.9)
 //myFood.resetPrice(eggs, 1.00); // $6 carton $1 is default
 myFood.resetPrice(fennel, 0.583); // 0.395, 0.43, 0.52, 0.93, 0.44, 0.58, 0.45, 0.50, 0.53, 0.68, 0.54, 0.30, 0.58 default 0.40
 //myFood.resetPrice(gojiBerries, 4.0)
 myFood.resetPriceComplex(kidneyBeans, 0, 0.66, 9.6, 0.5833) //$1.60, $1.40 
 myFood.resetPrice(kiwifruitGold, 0.784); // 0.76, 0.69, 0.92, 0.65, 0.53, 0.7, 0.72, 0.66, 0.75, 0.95, 0.66, 0.74, 0.78 (default 0.70)
 //myFood.resetPrice(kiwifruitGreen, 0.612); // 0.48, 0.61 (default 0.50)
 myFood.resetPriceComplex(lettuceMixedGreens, 2.8, 1.6667, 1.7, 2.353, 0, 2.22)// baby leaf salad 1.6666 is default ($5), butter lettuce 2.53, baby leaf beetroot 2.222
 //myFood.resetPrice(macadamiaNuts, 3.5)
 myFood.resetPrice(mandarin, 0.88) //have guessed skin as 28%, 0.69, 0.57, 0.73, 0.47, 0.84, 0.68, 0.34, 0.26, 0.53, 0.30, 0.27, 0.88
 myFood.resetPrice(mango, 0.98); //500g bags, 1kg bags are 0.66 (default)
 myFood.resetPrice(mushrooms, 1.16); //$6 for 500g, default is $5 ($1)
 //myFood.resetPriceComplex(mushrooms, 5, 1, 2.3, 1.891); // punnet/jar
 //myFood.resetPrice(oranges, 0.45); // 0.34, 0.32, 0.56, 0.43, 0.43, 0.50, 0.57, 0.308, 0.67, 0.47, 0.54, 0.45 (default 0.45)
myFood.resetPrice(pears, 0.256); // 0.28, 0.33, 0.29, 0.28, 0.24, 0.32, 0.32, 0.25, 0.25, 0.30, 0.44, 0.26 (default 0.30)
 myFood.resetPriceComplex(pineapple, 2.5, 1.20); //$4.50 is 0.90; $6 is $1.20, default is 0.90 (on special $4.5)
 myFood.resetPrice(potatoes, 0.40); // default 0.40
 //myFood.resetPrice(potatoesRed, 0); //0.31 default 0.40
 //myFood.resetPrice(pumpkinSeeds, 3.5);
 myFood.resetPriceComplex(redCabbage, 0.9375, 0.80, 0.5, 1.40, 0, 1); //rainbow, superfoods, traditional on special
 myFood.resetPriceComplex(snowPeas, 1.5, 0.588, 0, 1) // record sugar snap peas as snow peas, oriental, traditional on special
 myFood.resetPriceComplex(spinach, 0.375, 0.80, 0, 1.7857) //1.7857 for 280g, 0.80 for rainbow, $4 green bowl
 //myFood.resetPrice(springOnionsTops, 1.08695); // minus throw away bits
 //myFood.resetPrice(sesameSeeds, 3.5);
 //myFood.resetPrice(sunflowerSeeds, 3.5);
 myFood.resetPrice(swede, 0.636) // 0.38, 0.59, 0.44, 0.36, 0.36, 0.55, 0.66, 0.53, 0.47, 0.64 (default 0.50)
 //myFood.resetPrice(sweetPotatoOrange, 0.60); // 0.57, 0.60
 //myFood.resetPrice(sweetPotatoPurple, 0);
 //myFood.resetPrice(tahini, 1.324675) //$5.10/ 385g jar is 1.3247 (default) next jar $1.0933
 //myFood.resetPrice(tangelo, 0.5); //0.53, 0.5 default 0.50
 //myFood.resetPrice(tomatoesRed, 0.666) // canned price 0.666 is default
myFood.resetPrice(waterChestnuts, 0.588)  // oriental $4.50 is 0.529 default is oriental $5 is 0.588
//myFood.resetPrice(zucchini, 1.25) //traditional on special, $4 green bowl
 // superfoods is $1.40 ($3.50/250g), simmer is $1($4/400g), rice on special is 0.666, rainbow veges is $0.80, traditional is $1.25
 //oriental 0.529 $4.50 or 0.588 $5




// METHODS ON THE FOOD OBJECT TO SELECT FROM
 //myFood.hideFoodCategory(myname = null, foodgroup = null); 
 //myFood.showFoodCategory(myname = null, foodgroup = null); // this is the default
 //myFood.hideFood(myname = null, foodtohide = null); 
 //myFood.showFood(username = null, foodtoshow = null); // this is the default
 //myFood.favFood(username = null, foodtofav = null); 
 //myFood.unfavFood(username = null, foodtounfav = null);  // this is the default
 // these foods have been hidden or faved now



 // ENTER YOUR WEEKLY FOOD INTAKE (YOUR GROCERY LIST) HERE
 //KAREN remember to reset price and show/hide foods and numDaysOfGroceries above
  
  
  //Fruit
   setWeeklyVolume(acai, 0); // 200g in acai bowl
   setWeeklyVolume(applesRed, 3.54); //
   setWeeklyVolume(applesGreen, 10.33); //
   setWeeklyVolume(bananas, 5.49); // with skin 500g (58-60%), 250g/400g in green bowl, 200g in acao bowl
   setWeeklyVolume(bananasFrozen, 0); // creative gourmet(500g)
   setWeeklyVolume(bananasFrozenOrganic, 0); // organic(450g)  7 days is 1.75
   setWeeklyVolume(blackberries, 4.375); // 7 days = 4.375
   setWeeklyVolume(blueberries, 4.375); // 7 days = 4.375
   setWeeklyVolume(cantaloupe, 0); // rock melon x0.8 to weigh, start 1254g
   setWeeklyVolume(cherries, 1); //
   setWeeklyVolume(gojiBerries, 0); //
   setWeeklyVolume(grapefruitPink, 0);
   setWeeklyVolume(grapesGreen, 0); //
   setWeeklyVolume(grapesPurple, 0); //
   setWeeklyVolume(grapesRed, 0); // 
   setWeeklyVolume(kiwifruitGreen, 1.53); // 134g, 116g
   setWeeklyVolume(kiwifruitGold, 0); // 158g, 165g
   setWeeklyVolume(mandarin, 0.58); // 28% skin
   setWeeklyVolume(mango, 1); // 
   setWeeklyVolume(nectarine, 0);
   setWeeklyVolume(oranges, 0); // x 0.66, 175g
   setWeeklyVolume(passionfruit, 0); //
   setWeeklyVolume(pears, 2.62)// 
   setWeeklyVolume(pineapple, 1) // 
   setWeeklyVolume(plumsPurple, 0); // 
   setWeeklyVolume(plumsRed, 0); //
   setWeeklyVolume(plumsRed, 0); //
   setWeeklyVolume(raspberries, 4.375); // 7 days = 4.375
   setWeeklyVolume(strawberries, 4.375); // 7 days = 4.375
   setWeeklyVolume(tangelo, 0);
   setWeeklyVolume(watermelon, 0); // 
  
  //Breakfast Foods
   setWeeklyVolume(almondMilkSoGood, 40); // 4 cartons
   //setWeeklyVolume(cacao, 0); // 3g per day x 3.5 days .105
   //setWeeklyVolume(chiaSeeds, 0); // 12 g x 3.5 days 0.42
   //setWeeklyVolume(proteinPowderMacroMike, 0); // 
   //setWeeklyVolume(proteinPowderBRaw, 0); // 20g in green bowl

   //Vegetables
   setWeeklyVolume(asparagus, 0);// x0.75
   setWeeklyVolume(beetroot, 0); // packet(250g), beetroot&carrot(20g)
   setWeeklyVolume(bokChoy, 0.5); // superfoods (50g) 0.5
   setWeeklyVolume(broccoli, 9.4); // superfoods(50g), simmer(50g), rice(250g), oriental(150g), traditional (75g)
   setWeeklyVolume(broccolini, 3.77); // 175g
   setWeeklyVolume(butterBeans, 1.5); // oriental(150g)
   setWeeklyVolume(cabbage, 0.9375); // rainbow(93.75g) (25%) 2x = 1.875
   setWeeklyVolume(capsicumRed, 8.11); //x 0.9 oriental(100g) traditional(50g)
   setWeeklyVolume(capsicumGreen, 0) //x 0.85
   setWeeklyVolume(carrots, 13.8375); // rainbow(93.75g), superfoods(50g), simmer(50g), beetroot&carrot (20g), oriental(150g), traditional(50g)
   setWeeklyVolume(cauliflower, 12.52); // simmer(50g), rice(250g) , frozen cauli (500g) 
   setWeeklyVolume(celery, 0.5); // simmer (50g)
   setWeeklyVolume(corn, 0.375); // rainbow(37.5g), peas/corn(250g) 
   setWeeklyVolume(cucumber, 3.12); // very small 307g
   setWeeklyVolume(eggplant, 0); // x0.95
   setWeeklyVolume(fennel, 9.6); // x0.95
   setWeeklyVolume(greenBeans, 35);// 500g a day x 7 days
   setWeeklyVolume(ginger, 0);
   setWeeklyVolume(kale, 0.5); // superfoods(50g) 0.5
   setWeeklyVolume(leeks, 0.5); // simmer(50g) 0.5
   setWeeklyVolume(lettuceCos, 0); //
   setWeeklyVolume(lettuceIceberg, 0); //
   setWeeklyVolume(lettuceMixedGreens, 4.5); // butter lettuce(170g), beetroot&carrot(140g), babyleaf(280g) usually 4.5
   setWeeklyVolume(mushrooms, 5.18); // punnet(500g), jar(230g)
   setWeeklyVolume(mungBeanSprouts, 0); 
   setWeeklyVolume(onion, 0.375); // rainbow(37.5g), traditional(50g) 0.375
   setWeeklyVolume(parsnip, 0.5); // simmer(50g) 0.5
   setWeeklyVolume(peas, 0); // peas+corn(250g)// 
   setWeeklyVolume(potatoes, 0); //   
   setWeeklyVolume(potatoesRed, 0); //  
   setWeeklyVolume(pumpkin, 0);
   setWeeklyVolume(radish, 0);
   setWeeklyVolume(redCabbage, 1.4375); // rainbow(93.75g), superfoods (50g), traditional (75g) rainbow plus superfoods 1.4375
   setWeeklyVolume(rocket, 0);
   setWeeklyVolume(snowPeas, 1.5) // oriental-sugarsnap(150g), traditional(50g)
   setWeeklyVolume(spinach, 0.1875); // rainbow vege(18.75g) (5%), 25g in green bowl 
   setWeeklyVolume(springOnionsTops, 0); // 
   setWeeklyVolume(swede, 4.34); // x0.75 for peel
   setWeeklyVolume(sweetPotatoOrange, 0); //
   setWeeklyVolume(sweetPotatoPurple, 0); //
   setWeeklyVolume(tomatoesCherry, 0); // punnet(200g) 
   setWeeklyVolume(tomatoesKumato, 0); // box(300g)
   setWeeklyVolume(tomatoesRed, 0); // use this for canned tomatoes
   setWeeklyVolume(turnip, 0); // simmer(50g) 0.5
   setWeeklyVolume(waterChestnuts, 1.5); //oriental (150g)
   setWeeklyVolume(zucchini, 0); // traditional(50g), 25g in green bowl

   //power bowl - black rice, pinto beans, cos lettuce, tomato salsa, corn salsa, coriander and onion salsa, jalapenos, lime, sauce 

   //Herbs
    setWeeklyVolume(coriander, 0);
    setWeeklyVolume(parsley, 0); // simmer(50g)
 
  //Legumes and Grains
   setWeeklyVolume(blackBeans, 7.2); // 1 can/week is 2.4, 3 cans is 7.2, 4 cans is 9.6
   setWeeklyVolume(bluePeas, 0); //
   setWeeklyVolume(chickpeas, 0); // 1 can/week , 33g in chickpea soup
   setWeeklyVolume(kidneyBeans, 9.6); // 
   setWeeklyVolume(lentils, 0); // 1 can/week 
   setWeeklyVolume(peanuts, 0);
   setWeeklyVolume(pintoBeans, 0)
   setWeeklyVolume(riceBlack, 0),
   setWeeklyVolume(tofu, 0),
 
  //Nuts/Seeds/Oils/HealthyFats
   setWeeklyVolume(almonds, 1.6); //13g x7days (91g) plus add salads, 10g paleo acai
   setWeeklyVolume(avocadoShephard, 0); // x 0.7 
   setWeeklyVolume(avocadoHass, 1.44); // 
   setWeeklyVolume(brazilNuts, 0.14);
   setWeeklyVolume(cashewNuts, 0); // 10g in green bowl, paleo acai
   setWeeklyVolume(coconut, 0); // 20g in green bowl, 10g in paleo acai
   setWeeklyVolume(hazelnuts, 0);
   setWeeklyVolume(linseeds, 0.4); //
   setWeeklyVolume(macadamiaNuts, 0); // 10g in green bowl, paleo acai
   setWeeklyVolume(macadamiaOil, 0.3); // count simmer, superfoods, brocollini, eggplant, oriental x2
   setWeeklyVolume(olivesGreen, 1.1); // one jar is 1.1
   setWeeklyVolume(olivesBlack, 0); // 
   setWeeklyVolume(oliveOil, 0);
   setWeeklyVolume(pecans, 0);
   setWeeklyVolume(pistachioNuts, 0);
   setWeeklyVolume(pumpkinSeeds, 0); // 10g in green bowl, paleo acai
   setWeeklyVolume(sesameSeeds, 0); // 20g paleo acai bowl
   setWeeklyVolume(sunflowerSeeds, 0); // yellow container,  10g in green bowl, 20g in paleo acai
   setWeeklyVolume(tahini, 0.91); // 1/2 jar a week is 1.925, 1/4 = 0.9625 
   setWeeklyVolume(walnuts, 0);
  
  //Eggs/Dairy
   //setWeeklyVolume(cottageCheese, 0); // 
   setWeeklyVolume(eggs, 3.85); // 1 egg x 7 days is 3.85
   //setWeeklyVolume(cheeseFeta, 0); 


  //Other
  setWeeklyVolume(salt, 0.21); // to avoid low sodium message 360mg(0.0036) per wiggle tab
  //setWeeklyVolume(coconutWater, 0); 
  
  //Infrequent Foods

  //Other

  //Nici's Foods
   setWeeklyVolume(bananasCharlies, 0);
   //setWeeklyVolume(edamame, 0); 
   setWeeklyVolume(strawberriesCharlies, 0);
   setWeeklyVolume(coconutWater, 0);
   setWeeklyVolume(chocolateCharlies, 0); // 0.05

// weekly food volumes have been set now




// end Karen //

/*
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// NICI ONLY

// ENTER YOUR WEEKLY FOOD INTAKE (YOUR GROCERY LIST) HERE
//NICI remember to reset price and show/hide foods above
//up to date price is required before weekly volumes are entered

//NICI
user.userName("Nici");
user.budgetTips(username = null);
user.alertHighCost(username = null);
user.alertHighCalories(username = null);
let numDaysOfGroceries = 9;
let groceryStatus = "final";
let startDate = "Monday 13 September 2021";
let date = "Tuesday 21 September 2021";
let month = "September";
let season = "Spring";
// these user inputs have been set



// METHODS ON THE FOOD OBJECT TO SELECT FROM
//myFood.hideFoodCategory(myname = null, foodgroup = null); 
//myFood.showFoodCategory(myname = null, foodgroup = null); // this is the default
//myFood.hideFood(myname = null, foodtohide = null); 
//myFood.showFood(username = null, foodtoshow = null); // this is the default
//myFood.favFood(username = null, foodtofav = null); 
//myFood.unfavFood(username = null, foodtounfav = null);  // this is the default

//myFood.hideFood("Nici", food to hide);
myFood.hideFood("Nici", almondMilkSoGood);
myFood.hideFood("Nici", proteinPowderMacroMike);
//myFood.hideFood("Nici", proteinPowderBRaw);
myFood.hideFood("Nici", cottageCheese);
myFood.hideFood("Nici", acai);
myFood.hideFood("Nici", peanuts);
myFood.hideFoodCategory("Nici", "nuts and seeds");
myFood.showFood("Nici", coconut);
// these foods have been hidden now



// NICIS GROCERY LIST
//Nici remember to reset price and show/hide foods
myFood.resetPrice(applesRed, 0.65);
myFood.resetPrice(applesGreen, 0.35); // 0.49, 0.49, 0.49, 0.39, 0.35
//myFood.resetPriceComplex(avocadoShephard, 0, 0.909); //$6.50 for 5x100g, default is $7.50 for 5
myFood.resetPriceComplex(avocadoHass, 7.5, 0.667);
myFood.resetPriceComplex(bananas, 2.77, 0.667, 3.7, 0.58); //fresh varies each shop
myFood.resetPrice(bananasFrozenOrganic, 1.3333); //on special $6 usually 1.5555
myFood.resetPriceComplex(blackBeans, 0, 0.666, 2.4, 0.58333) //$1.60, $1.40
myFood.resetPrice(blueberries, 3.25)
myFood.resetPriceComplex(broccoli, 3.33, 0.84);
myFood.resetPriceComplex(carrots, 5, 0.3, 3.33, 0.84); // baby carrots 500g bag $3 per kg, carrot, cauli, broc rice not on special, on special, fresh
myFood.resetPriceComplex(cauliflower, 3.33, 0.84);
//myFood.resetPrice(celery, 1);
myFood.resetPriceComplex(chickpeas, 9.6, 0.6666, 9.6, 0.58333); //$1.60, $1.40
myFood.resetPriceComplex(chocolatePanaMint, 0.9, 10.666, 0, 13.333); //$4.80 (10.666) default $6 (13.333)
myFood.resetPrice(coconutYoghurt, 1.20)
myFood.resetPrice(coriander, 0);
myFood.resetPrice(cucumber, 1.17) //
//myFood.resetPrice(corn, 0.53) //fresh
//myFood.resetPriceComplex(corn, 1.25, 0.47, 0.375, 0.80);
//myFood.resetPrice(dates, 2.0); //default $20/kg
myFood.resetPriceComplex(edamame, 2, 1.25) // $2.20 per 200g bag is 1.1,  default is $2.50 or 1.25
myFood.resetPrice(eggs, 0.6818); //$4.50 
//myFood.resetPrice(grapesGreen, 0.69);
//myFood.resetPrice(grapesRed, 0.69);
//myFood.resetPrice(grapesPurple, 0.69)
//myFood.resetPriceComplex(kidneyBeans, 0, 0.66, 0, 0.625, 2.4, 0.5833, 0, 0.54166) //$1.60, $1.50 $1.40 $1.30
myFood.resetPriceComplex(lentils, 0, 0.666, 2.4, 0.58333, 0, 0.4167, 2.4, 0.542) //$1.60, $1.40, $1, $1.30
myFood.resetPriceComplex(mandarin, 15.13, 0.375, 11.61, 0.54) //0.54, 0.54, 0.54, 0.54, 0.68, 0.54, 0.38, 0.38
//myFood.resetPrice(mango, 0.80); //500g bags, 1kg bags are 0.66
myFood.resetPriceComplex(mushrooms, 2, 1.50); //$4 for 200g $6 for 500g, default is $5 ($1), fresh 
//myFood.resetPriceComplex(olivesGreen, 3.3, 1.1, 1.64, 1.1)
//myFood.resetPrice(olivesBlack, 3.18)
//myFood.resetPriceComplex(oranges, 0.3, 1.60, 0.5, 5.71);
myFood.resetPrice(parsley, 0);
//myFood.resetPrice(pears, 1.60);
//myFood.resetPrice(plumsRed, 0);
//myFood.resetPriceComplex(pineapple, 0.3, 1.60, 0.5, 5.71); //$4.50 is 0.90; $6 is $1.20, default is 0.90
//myFood.resetPriceComplex(potatoes, 5.22, 0.4);// spudlite 350g $2, fresh
myFood.resetPrice(potatoesRed, 0.4);
myFood.resetPriceComplex(raspberries, 1.25, 4.40) // 125g $4.50 ix $3.60, $5.50 is $4.40, $6 is $4.80, $6.5 is $5.20
//myFood.resetPriceComplex(redCabbage, 0.9375, 0.80, 0.5, 1.4);
//myFood.resetPrice(riceBlack, 5.71);
myFood.resetPriceComplex(spinach, 2.8, 1.7857, 0, 4); //60g bag $2, 120g bag $3
myFood.resetPrice(strawberries, 0.40)
myFood.resetPrice(sweetPotatoOrange, 1.40); //as rice 
//myFood.resetPrice(sweetPotatoPurple, 0.69);
myFood.resetPriceComplex(tomatoesRed, 2.7, 1.48) //potato salad, salsa is 270g $1.33 or 1.48 ($4)
myFood.resetPrice(zucchini, 1.20); // carrot zucchini 250g for $3 is $1.20

// superfoods is $1.40 ($3.50/250g), simmer is $1($4/400g), rice on special is 0.666 otherwise 0.84, rainbow veges is $0.80
// these prices have been reset now


//Fruit Nici
setWeeklyVolume(applesRed, 3.77);
setWeeklyVolume(applesGreen, 14);
setWeeklyVolume(bananas, 9.25); // x 0.6, 200g raspberry swirl bowl
setWeeklyVolume(bananasFrozen, 0);
setWeeklyVolume(bananasFrozenOrganic, 9);
setWeeklyVolume(blackberries, 0);
setWeeklyVolume(blueberries, 6);
setWeeklyVolume(cantaloupe, 0)
setWeeklyVolume(cherries, 0);
setWeeklyVolume(dates, 0);
setWeeklyVolume(dragonfruit, 0);
setWeeklyVolume(grapesGreen, 0);
setWeeklyVolume(grapesPurple, 0); 
setWeeklyVolume(grapesRed, 0);
setWeeklyVolume(kiwifruitGold, 3.2);
setWeeklyVolume(kiwifruitGreen, 3.2);
setWeeklyVolume(mandarin, 27); 
setWeeklyVolume(mango, 0);
setWeeklyVolume(nectarine, 0)
setWeeklyVolume(oranges, 0);
setWeeklyVolume(passionfruit, 0);
setWeeklyVolume(pears, 0);
setWeeklyVolume(pineapple, 0);
setWeeklyVolume(plumsPurple, 0);
setWeeklyVolume(plumsRed, 0);
setWeeklyVolume(raspberries, 0); // 125g fresh punnet, 50g raspberry swirl bowl
setWeeklyVolume(strawberries, 0);
setWeeklyVolume(tangelo, 0);
setWeeklyVolume(watermelon, 0);

//Vegetables Nici
setWeeklyVolume(asparagus, 0);
setWeeklyVolume(beetroot, 0);
setWeeklyVolume(bokChoy, 0);
setWeeklyVolume(broccoli, 1.83); // 0.833g in broccoli cauli sw.pot rice(250g) 
setWeeklyVolume(broccolini, 0);
setWeeklyVolume(butterBeans, 1.5);
setWeeklyVolume(cabbage, 0);
setWeeklyVolume(capsicumRed, 1); //25g in chickpea salad
setWeeklyVolume(carrots, 11.83); // 
setWeeklyVolume(cauliflower, 1.33); // 166.67g in cauli carrot broc rice , 100g cauli power bowl
setWeeklyVolume(celery, 0);
setWeeklyVolume(corn, 0.3); // 10g cauli power bowl, 20g sweet potato salad
setWeeklyVolume(cucumber, 0);
setWeeklyVolume(eggplant, 0);
setWeeklyVolume(fennel, 0);
setWeeklyVolume(ginger, 0);
setWeeklyVolume(greenBeans, 5);
setWeeklyVolume(kale, 0);
setWeeklyVolume(leeks, 0);
setWeeklyVolume(lettuceCos, 0.25); // 25g cauli power bowl
setWeeklyVolume(lettuceIceberg, 0);
setWeeklyVolume(lettuceMixedGreens, 1);
setWeeklyVolume(mushrooms, 0); //
setWeeklyVolume(mungBeanSprouts, 0); //
setWeeklyVolume(onion, 0.35); // 10g cauli power bowl
setWeeklyVolume(parsnip, 0);
setWeeklyVolume(peas, 0);
setWeeklyVolume(potatoes, 0); //guess one potato as 150g
setWeeklyVolume(potatoesRed, 20); // 
setWeeklyVolume(pumpkin, 0);
setWeeklyVolume(radish, 0);
setWeeklyVolume(redCabbage, 0);
setWeeklyVolume(rocket, 0.3);
setWeeklyVolume(snowPeas, 1.5) // oriental-sugarsnap(150g)
setWeeklyVolume(spinach, 3.1); // carry over 2.8
setWeeklyVolume(springOnionsTops, 0.6); //20g for potato/sweet potato or chickpea or sweet potato salad 
setWeeklyVolume(swede, 0);
setWeeklyVolume(sweetPotatoOrange, 2); // as rice 0.833 is one 250g container
setWeeklyVolume(sweetPotatoPurple, 0);
setWeeklyVolume(tomatoesCherry, 0);
setWeeklyVolume(tomatoesKumato, 0); //one packet is 300g
setWeeklyVolume(tomatoesRed, 1.35); // 20g in potato salad /270g in salsa, 25g in cauli power bowl 
setWeeklyVolume(turnip, 0);
setWeeklyVolume(waterChestnuts, 1.5);
setWeeklyVolume(zucchini, 0);

//Herbs Nici
setWeeklyVolume(coriander, 0.4); // 10g per potato/sweet potato or chickpea salad or salsa, 10g in cauli power bowl Sat
setWeeklyVolume(parsley, 0.4); // 10g per potato/sweet potato or chickpea salad Tues

//Legumes Nici
setWeeklyVolume(blackBeans, 0);
setWeeklyVolume(bluePeas, 0);
setWeeklyVolume(chickpeas, 0); // 
setWeeklyVolume(edamame, 14); // 1 bag is 200g 
setWeeklyVolume(kidneyBeans, 0);
setWeeklyVolume(lentils, 0);
setWeeklyVolume(pintoBeans, 0.5); //50g in cauli power bowl
setWeeklyVolume(tofu, 0),

//Nuts/Seeds/Oils/HealthyFats Nici
setWeeklyVolume(avocadoOil, 0); // purchased avocado oil and salt on 26 June (7.5ml/day) and 8 Sept***********************************REMEMBER
setWeeklyVolume(avocadoShephard, 0); // 1 very small avo is 100g, gigantic is 250g
setWeeklyVolume(avocadoHass, 9.5); // 50g for guacamole, default size 180g, smallish 150g, carry over 150g
setWeeklyVolume(coconut, 0); // 10g raspberry swirl bowl
setWeeklyVolume(olivesGreen, 0); //one jar is 1.1
setWeeklyVolume(olivesBlack, 0.25); //one jar is 1.1
setWeeklyVolume(oliveOil, 0.1); // one chickpea salad = 0.05ml

//Eggs/Dairy Nici
setWeeklyVolume(eggs, 12.65); // carry over 10.45 thurs 2 tues 2
setWeeklyVolume(cheeseFeta, 0);

//Infrequent Foods Nici
setWeeklyVolume(cacao, 0);
setWeeklyVolume(chocolatePanaMint, 0); // 0.45 per packet
setWeeklyVolume(coconutYoghurt, 0) // 50g raspberry swirl bowl
setWeeklyVolume(proteinPowderBRaw, 0) // 20g raspberry swirl bowl
setWeeklyVolume(riceBlack, 0.5); // 50g cauli power bowl
setWeeklyVolume(seaweed, 0);
setWeeklyVolume(salt, 0); // --------------------------------------------------------------------------------------------------REMEMBER

//Nici's Foods
setWeeklyVolume(bananasCharlies, 24); //200g mon mon tues tues wed wed thurs thurs fri fri sat  (11) mon mon tues tues (15)
setWeeklyVolume(chickpeasCharlies, 0); // 1 salad is 200g 
setWeeklyVolume(chocolateCharlies, 0.6); // 0.05
setWeeklyVolume(coconutWater, 11.25); // 0.9375 each 
setWeeklyVolume(potatoesCharlies, 6); //1 salad is 200g  wed, sun tues
setWeeklyVolume(strawberriesCharlies, 21.6); // 1.8 each 
setWeeklyVolume(sweetPotatoCharlies, 2) //  sat
// 
// weekly food volumes have been set now

//power bowl - black rice, pinto beans, cos lettuce, tomato salsa, corn salsa, coriander and onion salsa, jalapenos, lime, sauce 
// guzman gomez veges - mushroom, onion, capsicum
//raspberry swirl bowl - banana, vanilla protein, coconut yoghurt, raspberries, coconut flakes

// end Nici
*/
//----------------------------------------------------------------------------------------------------------------------------

myFood.generateMyFavFoods; // getter
myFood.generateMyFavFoodsNames; // getter
myFood.generateMyUnFavButShowFoods; // getter
myFood.generateMyShowFoods; // getter
myFood.generateMyHideFoods; // getter
myFood.generateMyHideFoodsNames; // getter
myFood.generateMyShoppingCartFoods; // getter
myFood.generateMyContributoryFoods; // getter
myFood.generateMyContributoryFoodsNames; // getter
myFood.generateMyFrequentFoods; // getter
myFood.generateMyFrequentFoodsNames; // getter
myFood.generateMyVeryFrequentFoods; // getter
myFood.generateMyVeryFrequentFoodsNames; // getter
myFood.generateMyMonopolyFoods; // getter
myFood.generateMyMonopolyFoodsNames; // getter
myFood.generateMyCommonFoods; // getter
myFood.generateMyCommonFoodsNames; // getter

// these getters have been called now




const endListWithAnd = array => {
  let listString = '';
  for (let i = 0; i < array.length; i++) {
    listString += array[i] ;
    if (i < array.length - 2) {
      listString += ', ';
    } else if (i === array.length - 2) {
      listString += ' and ';
    }
  }
  return listString;
}

const endListWithOr = array => {
  let listString = '';
  for (let i = 0; i < array.length; i++) {
    listString += array[i];
    if (i < array.length - 2) {
      listString += ', ';
    } else if (i === array.length - 2) {
      listString += ' or ';
    }
  }
  return listString;
}

const endListWith = (array, lastWord) => {
  let listString = '';
  for (let i = 0; i < array.length; i++) {
    listString += array[i];
    if (i < array.length - 2) {
      listString += ', ';
    } else if (i === array.length - 2) {
      listString += ' ' + lastWord + ' ';
    }
  }
  return listString;
}


//---------------------------------------------------------------------------------------------------------------------------------

document.getElementById('date').textContent = date;
document.getElementById('startDate').textContent = startDate;
if (userName) document.getElementById('helloUser').textContent = userName;

const fillFoodCategoryArrays = () => {
  myFood.myShoppingCartFoods.forEach(food => {
    if (food.category === "vegetables") {
      myFood.myVegetablesWeek.push(food);
    } else if (food.category === "fruit" && !food.name.includes("olives") && !food.name.includes("avocado")) {
      myFood.myFruitsWeek.push(food);
    } else if (food.name.includes("olives") || food.name.includes("avocado")) {
      myFood.myFruitsButAlsoFatsWeek.push(food);
    } else if (food.category === "nuts and seeds") {
      myFood.myNutsAndSeedsWeek.push(food);
    } else if (food.category === "legumes") {
      myFood.myLegumesWeek.push(food);
    } else if (food.category === "herbs") {
      myFood.myHerbsWeek.push(food);
    } else if (food.category === "eggs") {
      myFood.myEggsWeek.push(food);
    } else if (food.category === "dairy" || food === almondMilkSoGood) {
      myFood.myDairyWeek.push(food)
    } else {
      myFood.myOtherWeek.push(food);
    }
  }); //end for Each 
} // end of fillFoodCategoryArrays
fillFoodCategoryArrays();


const calculateAndPrintWeeklyCostOfFood = () => { //requires myFood.foods
  let fruitsVolume = [];
  let fruitsButAlsoFatsVolume = []
  let vegetablesVolume = [];
  let nutsVolume = [];
  let legumesVolume = [];
  let eggsVolume = [];
  let fruitsServings = 0;
  let fruitsServingsPerDay = 0;
  let fruitsButAlsoFatsServings = 0;
  let fruitsButAlsoFatsServingsPerDay = 0;
  let vegetablesServings = 0;
  let vegetablesServingsPerDay = 0;
  let nutsServings = 0;
  let nutsServingsPerDay = 0;
  let legumesServings = 0;
  let legumesServingsPerDay = 0;
  let groceryList = "";
  let weeklyCost = myFood.myShoppingCartFoods.map(food => food.weeklyPrice);
  fruitsVolume = myFood.myFruitsWeek.map(food => food.weeklyVolume);
  if (fruitsVolume.length > 0) {
    fruitsServings = fruitsVolume.reduce((accumulator, currentValue) => accumulator + currentValue);
    fruitsServingsPerDay = fruitsServings / numDaysOfGroceries / 1.5; // serve of fruit is 150g
    if (fruitsServingsPerDay > 0 && fruitsServingsPerDay < 5) {
      fruitsServingsPerDay = fruitsServingsPerDay.toFixed(1);
    } else {
      fruitsServingsPerDay = fruitsServingsPerDay.toFixed(0);
    }
  }
  fruitsButAlsoFatsVolume = myFood.myFruitsButAlsoFatsWeek.map(food => food.weeklyVolume);
  if (fruitsButAlsoFatsVolume.length > 0) {
    fruitsButAlsoFatsServings = fruitsButAlsoFatsVolume.reduce((accumulator, currentValue) => accumulator + currentValue);
    fruitsButAlsoFatsServingsPerDay = fruitsButAlsoFatsServings / numDaysOfGroceries / 0.6; // serve of avocado or olives is 60g
    if (fruitsButAlsoFatsServingsPerDay > 0 && fruitsButAlsoFatsServingsPerDay < 5) {
      fruitsButAlsoFatsServingsPerDay = fruitsButAlsoFatsServingsPerDay.toFixed(1);
    } else {
      fruitsButAlsoFatsServingsPerDay = fruitsButAlsoFatsServingsPerDay.toFixed(0);
    }
  }
  vegetablesVolume = myFood.myVegetablesWeek.map(food => food.weeklyVolume);
  if (vegetablesVolume.length > 0) {
    vegetablesServings = vegetablesVolume.reduce((accumulator, currentValue) => accumulator + currentValue);
    vegetablesServingsPerDay = vegetablesServings / numDaysOfGroceries / 0.75; // serve of veges is 75g
    if (vegetablesServingsPerDay > 0 && vegetablesServingsPerDay < 5) {
      vegetablesServingsPerDay = vegetablesServingsPerDay.toFixed(1);
    } else {
      vegetablesServingsPerDay = vegetablesServingsPerDay.toFixed(0);
    }
  }
  nutsVolume = myFood.myNutsAndSeedsWeek.map(food => food.weeklyVolume);
  if (nutsVolume.length > 0) {
    nutsServings = nutsVolume.reduce((accumulator, currentValue) => accumulator + currentValue);
    nutsServingsPerDay = nutsServings / numDaysOfGroceries / 0.30; // serve of nuts or seeds is 30g
    if (nutsServingsPerDay > 0 && nutsServingsPerDay < 5) {
      nutsServingsPerDay = nutsServingsPerDay.toFixed(1);
    } else {
      nutsServingsPerDay = nutsServingsPerDay.toFixed(0);
    }
  }
  legumesVolume = myFood.myLegumesWeek.map(food => food.weeklyVolume);
  if (legumesVolume.length > 0) {
    legumesServings = legumesVolume.reduce((accumulator, currentValue) => accumulator + currentValue);
    legumesServingsPerDay = legumesServings / numDaysOfGroceries / 1.5; // serve of legumes is 150g (cooked)
    if (legumesServingsPerDay > 0 && legumesServingsPerDay < 5) {
      legumesServingsPerDay = legumesServingsPerDay.toFixed(1);
    } else {
      legumesServingsPerDay = legumesServingsPerDay.toFixed(0);
    }
  }
  eggsVolume = myFood.myEggsWeek.map(food => food.weeklyVolume);
  let eggsServingsPerDay = eggsVolume / numDaysOfGroceries / 1.1; // serve of eggs is 2 large eggs
  if (eggsServingsPerDay > 0 && eggsServingsPerDay < 5) {
    eggsServingsPerDay = eggsServingsPerDay.toFixed(1);
  } else {
    eggsServingsPerDay = eggsServingsPerDay.toFixed(0);
  }
  if (myFood.myFruitsWeek.length > 0) {
    groceryList += `<tbody><tr><td class = \"groceryListCategoryHeading\" colspan = "3">Fruit (${fruitsServingsPerDay} servings per day)</td></tr>`;
    myFood.myFruitsWeek.forEach(food => {
      food.nameWithIcon = `<span class =\"la-icon la la-lemon\"></span>${food.name}`;
      groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
    }); // end for Each
  }
  if (myFood.myFruitsButAlsoFatsWeek.length > 0) {
    groceryList += `<tr><td class = \"groceryListCategoryHeading\" colspan = "3">Fruit / healthy fats (${fruitsButAlsoFatsServingsPerDay} servings per day)</td></tr>`;
    myFood.myFruitsButAlsoFatsWeek.forEach(food => {
      food.nameWithIcon = `<span class =\"la-icon la la-egg\"></span>${food.name}`;
      groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
    }); // end for Each
  }
  if (myFood.myVegetablesWeek.length > 0) {
    groceryList += `<tr><td class = \"groceryListCategoryHeading\" colspan = "3">Vegetables (${vegetablesServingsPerDay} servings per day)</td></tr>`;
    myFood.myVegetablesWeek.forEach(food => {
      food.nameWithIcon = `<span class =\"la-icon la la-carrot\"></span>${food.name}`
      groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
    }); // end for Each
  }
  if (myFood.myNutsAndSeedsWeek.length > 0) {
    groceryList += `<tr><td class = \"groceryListCategoryHeading\" colspan = "3">Nuts and seeds (${nutsServingsPerDay} servings per day)</td></tr>`;
    myFood.myNutsAndSeedsWeek.forEach(food => {
      food.nameWithIcon = `<span class =\"la-icon la la-brain\"></span>${food.name}`
      groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
    }); // end for Each
  }
  if (myFood.myLegumesWeek.length > 0) {
    groceryList += `<tr><td class = \"groceryListCategoryHeading\" colspan = "3">Legumes (${legumesServingsPerDay} servings per day)</td></tr>`;
    myFood.myLegumesWeek.forEach(food => {
      food.nameWithIcon = `<span class =\"la-icon la la-hotdog\"></span>${food.name}`
      groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
    }); // end for Each
  }
  if (myFood.myHerbsWeek.length > 0) {
    groceryList += `<tr><td class = \"groceryListCategoryHeading\" colspan = "3">Herbs</td></tr>`;
    myFood.myHerbsWeek.forEach(food => {
      food.nameWithIcon = `<span class =\"la-icon la la-seedling\"></span>${food.name}`
      groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
    }); // end for Each
  }
  if (myFood.myEggsWeek.length > 0) {
    groceryList += `<tr><td class = \"groceryListCategoryHeading\" colspan = "3">Eggs (${eggsServingsPerDay} servings per day)</td></tr>`;
    myFood.myEggsWeek.forEach(food => {
      food.nameWithIcon = `<span class =\"la-icon la la-egg\"></span>${food.name}`;
      groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
    }); // end for Each
  }
  if (myFood.myDairyWeek.length > 0) {
    groceryList += `<tr><td class = \"groceryListCategoryHeading\" colspan = "3">Dairy and fortified plant milks</td></tr>`;
    myFood.myDairyWeek.forEach(food => {
      if (food.category === "dairy") {
        food.nameWithIcon = `<span class =\"la-icon la la-cheese\"></span>${food.name}`
      } else {
        food.nameWithIcon = `<span class =\"la-icon la la-atom\"></span>${food.name}`
      }
      groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
    }); // end for Each
  }
  if (myFood.myOtherWeek.length > 0) {
    groceryList += `<tr><td class = \"groceryListCategoryHeading\" colspan = "3">Other</td></tr>`;
    myFood.myShoppingCartFoods.forEach(food => {
      if (food.category !== "fruit" && food.category !== "vegetables" && food.category !== "nuts and seeds" && food.category !== "legumes" && food.category !== "herbs" && food.category !== "eggs" && food.category !== "dairy" && food !== almondMilkSoGood && food !== avocadoOil) {
        food.nameWithIcon = `<span class =\"la-icon la la-atom\"></span>${food.name}`
        groceryList += `<tr><td class =\"groceryItem groceryItemName\">${food.nameWithIcon}</td><td class =\"groceryItem groceryItemAmount\">${(food.weeklyVolume * 100).toFixed(0)}g</td><td class = \"groceryItem groceryItemCost\">$${food.weeklyPrice.toFixed(2)}</td></tr>`;
      }
    }); // end for Each
  }
  const totalWeeklyCost = weeklyCost.reduce((accumulator, currentValue) => accumulator + currentValue);
  const weeklyCostOnPerDayBasis = totalWeeklyCost / numDaysOfGroceries;
  if (userName) document.getElementById('user').textContent = userName + ", ";
  groceryList += `</tbody>`
  document.getElementById('groceryList').innerHTML = groceryList;
  document.getElementById('totalWeeklyCost').textContent = "$" + totalWeeklyCost.toFixed(2);
  document.getElementById('numDays').textContent = numDaysOfGroceries;
  document.getElementById('costPerDay').textContent = "$" + weeklyCostOnPerDayBasis.toFixed(2);
} // ends calculateAndPrintWeeklyCostOfFood
calculateAndPrintWeeklyCostOfFood();

const toggleServingSizeOnOff = () => {
  let element = document.getElementById("defineServingSize");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
} // end of togglePriceOfFoodsOnOff 

document.getElementById("servingSizeButton").onclick = toggleServingSizeOnOff;

let averageEnergy; //global variable

const calculateAndPrintAverageEnergyOfFood = () => { //requires myFood.myShoppingCartFoods
  const weeklyEnergyValues = myFood.myShoppingCartFoods.map(food => food.weeklyEnergy);
  const totalWeeklyEnergy = weeklyEnergyValues.reduce((accumulator, currentValue) => accumulator + currentValue);
  averageEnergy = totalWeeklyEnergy / numDaysOfGroceries;
  if (groceryStatus === "final") {
    document.getElementById('averageEnergy').textContent = averageEnergy.toFixed(0);
  } else {
    document.getElementById('averageEnergy').textContent = "incomplete";
  }
} // ends calculateAndPrintAverageEnergyOfFood   
calculateAndPrintAverageEnergyOfFood();

const calculateMacronutrientsInGrams = () => {
  carbs.weekly = myFood.myShoppingCartFoods.map(food => food.weeklyCarbs);
  netCarbs.weekly = myFood.myShoppingCartFoods.map(food => food.weeklyNetCarbs);
  fibre.weekly = myFood.myShoppingCartFoods.map(food => food.weeklyFibre);
  protein.weekly = myFood.myShoppingCartFoods.map(food => food.weeklyProtein);
  fat.weekly = myFood.myShoppingCartFoods.map(food => food.weeklyFat);
  nutrients.macronutrients.forEach(macronutrient => {
    macronutrient.total = macronutrient.weekly.reduce((accumulator, currentValue) => accumulator + currentValue);
    macronutrient.average = macronutrient.total / numDaysOfGroceries;
  }); //end for Each
} // ends calculateMacronutrientsInGrams
calculateMacronutrientsInGrams();

const printAverageMacronutrients = () => {
  document.getElementById('carbohydrates').textContent = carbs.average.toFixed(0);
  document.getElementById('netCarbohydrates').textContent = netCarbs.average.toFixed(0);
  document.getElementById('fibre').textContent = fibre.average.toFixed(0);
  document.getElementById('protein').textContent = protein.average.toFixed(0);
  document.getElementById('fat').textContent = fat.average.toFixed(0);
} // ends printAverageMacronutrients
printAverageMacronutrients();

const fillWeeklyNutrientArrays = () => {
  myFood.myShoppingCartFoods.forEach(food => {
    vitaminA.weekly.push(food.weeklyVitaminA);
    vitaminB1.weekly.push(food.weeklyVitaminB1);
    vitaminB2.weekly.push(food.weeklyVitaminB2);
    vitaminB3.weekly.push(food.weeklyVitaminB3)
    vitaminB5.weekly.push(food.weeklyVitaminB5);
    vitaminB6.weekly.push(food.weeklyVitaminB6);
    vitaminB12.weekly.push(food.weeklyVitaminB12);
    choline.weekly.push(food.weeklyCholine);
    folate.weekly.push(food.weeklyFolate);
    vitaminC.weekly.push(food.weeklyVitaminC);
    vitaminD.weekly.push(food.weeklyVitaminD);
    vitaminE.weekly.push(food.weeklyVitaminE);
    vitaminK.weekly.push(food.weeklyVitaminK);
    calcium.weekly.push(food.weeklyCalcium);
    copper.weekly.push(food.weeklyCopper);
    iron.weekly.push(food.weeklyIron);
    magnesium.weekly.push(food.weeklyMagnesium);
    manganese.weekly.push(food.weeklyManganese);
    phosphorus.weekly.push(food.weeklyPhosphorus);
    potassium.weekly.push(food.weeklyPotassium);
    selenium.weekly.push(food.weeklySelenium);
    sodium.weekly.push(food.weeklySodium);
    zinc.weekly.push(food.weeklyZinc);
    omega3.weekly.push(food.weeklyOmega3); //omega 3 and 6 values are in g not %
    omega6.weekly.push(food.weeklyOmega6);
  }); // end for Each
} // ends fillWeeklyNutrientArrays
fillWeeklyNutrientArrays();

const calculateAverageMicronutrients = () => {
  nutrients.micronutrients.forEach(micronutrient => {
    micronutrient.total = micronutrient.weekly.reduce((accumulator, currentValue) => accumulator + currentValue);
    micronutrient.average = micronutrient.total / numDaysOfGroceries;
  }); //end for Each
  omega6.average = omega6.average / 11 * 100; //convert to %
  omega3.average = omega3.average / 1.1 * 100;
  omegaRatio.average = omega6.total / omega3.total;
  zincCopperRatio.average = (zinc.average / 100 * 8) / (copper.average / 100 * 0.9); // convert to mg from %
  calciumMagnesiumRatio.average = (calcium.average / 100 * 1200) / (magnesium.average / 100 * 320);
  potassiumSodiumRatio.average = (potassium.average / 100 * 2600) / (sodium.average / 100 * 1500);
} // ends calculateAverageMicronutrients
calculateAverageMicronutrients();

const calculateAverageMacrolipids = () => {
  monosatFat.weekly = myFood.myShoppingCartFoods.filter(food => food.category !== "dairy" && food.category !== "eggs") // of plant origin only
  monosatFat.weekly = monosatFat.weekly.map(food => food.weeklyMonosatFat);
  polyunsatFat.weekly = myFood.myShoppingCartFoods.map(food => food.weeklyPolyunsatFat);
  satFat.weekly = myFood.myShoppingCartFoods.map(food => food.weeklySatFat);
  nutrients.macrolipids.forEach(macrolipid => {
    macrolipid.total = macrolipid.weekly.reduce((accumulator, currentValue) => accumulator + currentValue);
    macrolipid.average = macrolipid.total / numDaysOfGroceries;
  }); //end for Each
} // ends calculateAverageMacrolipids
calculateAverageMacrolipids();

let monoPolySatFatRatio = (monosatFat.average + polyunsatFat.average) / satFat.average; //global variable

const generateDeficientNutrientArrays = () => {
  nutrients.micronutrients.forEach(micronutrient => {
    if (micronutrient.average < 50) {
      micronutrient.veryDeficientNutrient = true;
      nutrients.veryDeficientNutrientsArray.push(micronutrient);
      nutrients.veryDeficientNutrientsNamesArray.push(micronutrient.name);
    } else if (micronutrient.average < 80) {
      micronutrient.deficientNutrient = true;
      nutrients.deficientNutrientsArray.push(micronutrient);
      nutrients.deficientNutrientsNamesArray.push(micronutrient.name);
    } else if (micronutrient.average < 110 && micronutrient.name !== "sodium") {
      micronutrient.borderlineNutrient = true;
      nutrients.borderlineNutrientsArray.push(micronutrient);
      nutrients.borderlineNutrientsNamesArray.push(micronutrient.name);
    } else if (micronutrient.average < 150 && micronutrient.name !== "sodium" && micronutrient.name !== "choline") {
      micronutrient.lowerNutrient = true;
      nutrients.lowerNutrientsArray.push(micronutrient);
      nutrients.lowerNutrientsNamesArray.push(micronutrient.name);
    }
  }); // end for Each
} // end generateDeficientNutrientArrays
generateDeficientNutrientArrays();

const generateHighNutrientArrays = () => {
  nutrients.micronutrients.forEach(nutrient => {
    if (nutrient.average > 150) {
      if (nutrient.alertIfHigh === true) {
        nutrients.alertIfHighNutrientsArray.push(nutrient);
        nutrients.alertIfHighNutrientsNamesArray.push(nutrient.name);
      } else if (nutrient.alertIfHigh === false) {
        nutrients.noConcernHighNutrientsArray.push(nutrient);
        nutrients.noConcernHighNutrientsNamesArray.push(nutrient.name);
      }
    } // end if
  }); // end for Each
} // ends generateHighNutrientArrays
generateHighNutrientArrays();

nutrients.fillMicroNutrientsText; //getter required average values for micronutrients

const printAverageVitaminRDIs = () => {
  let vitaminList = "";
  nutrients.vitamins.forEach(vitamin => {
    if (vitamin.average >= 110) { // neither borderline, deficient or very deficient => normal text
      vitaminList += "<li>" + vitamin.nameCap + " : " + vitamin.average.toFixed(0) + "% of RDI" + "</li>";
    } else if (vitamin.average >= 80 && vitamin.average < 110) { // borderline is (warn) red css rule
      vitaminList += "<li class=\"warn\">" + vitamin.nameCap + " : " + vitamin.average.toFixed(0) + "% of RDI" + "</li>";
    } else if (vitamin.average < 80) { // deficient or very deficient is (warning) bold red css rule
      vitaminList += "<li class=\"warning\">" + vitamin.nameCap + " : " + vitamin.average.toFixed(0) + "% of RDI" + "</li>";
    }
  }); // end for each
  document.getElementById('vitaminList').innerHTML = vitaminList;
} // end printAverageVitaminRDIs
printAverageVitaminRDIs();

const printAverageMineralRDIs = () => {
  let mineralList = "";
  nutrients.minerals.forEach(mineral => {
    if (mineral.average >= 110) { // neither borderline, deficient or very deficient => normal text
      mineralList += "<li>" + mineral.nameCap + " : " + mineral.average.toFixed(0) + "% of RDI" + "</li>";
    } else if (mineral.average >= 80 && mineral.average < 110) { // borderline is (warn) red css rule
      mineralList += "<li class=\"warn\">" + mineral.nameCap + " : " + mineral.average.toFixed(0) + "% of RDI" + "</li>";
    } else if (mineral.average < 80) { // deficient or very deficient is (warning) bold red css rule
      mineralList += "<li class=\"warning\">" + mineral.nameCap + " : " + mineral.average.toFixed(0) + "% of RDI" + "</li>";
    }
  }); // end for each
  document.getElementById('mineralList').innerHTML = mineralList;
} // end printAverageMineralRDIs
printAverageMineralRDIs();

const printMineralRatioList = () => { // mineral ratios only
  let ratiosList = ""
  nutrients.ratios.forEach(ratio => ratiosList += "<li>" + ratio.nameCap + " : " + ratio.average.toFixed(1) + "</li>");
  document.getElementById('ratioList').innerHTML = ratiosList;
} // end printAverageMineralRDIs
printMineralRatioList();

const printAverageLipidRDIs = () => { // omega3, omega 6
  let lipidList = "";
  nutrients.lipids.forEach(lipid => {
    if (lipid.average >= 110) { // neither borderline, deficient or very deficient => normal text
      lipidList += "<li>" + lipid.nameCap + " : " + lipid.average.toFixed(0) + "% of RDI" + "</li>";
    } else if (lipid.average >= 80 && lipid.average < 110) { // borderline is (warn) red css rule
      lipidList += "<li class=\"warn\">" + lipid.nameCap + " : " + lipid.average.toFixed(0) + "% of RDI" + "</li>";
    } else if (lipid.average < 80) { // deficient or very deficient is (warning) bold red css rule
      lipidList += "<li class=\"warning\">" + lipid.nameCap + " : " + lipid.average.toFixed(0) + "% of RDI" + "</li>";
    }
  }); // end for each 
  document.getElementById('lipidList').innerHTML = lipidList;
} // end printAverageLipidRDIs
printAverageLipidRDIs();

const printAverageMacrolipidRDIs = () => { // monosatFat, polyunsatFat, satFat
  let macrolipidList = "";
  nutrients.macrolipids.forEach(macrolipid => {
    macrolipidList += "<li>" + macrolipid.nameCap + " : " + macrolipid.average.toFixed(0) + "g" + "</li>";
  }); // end for each 
  document.getElementById('macrolipidList').innerHTML = macrolipidList;
} // end printAverageMacrolipidRDIs
printAverageMacrolipidRDIs();

const printEvaluatingMineralRatioText = () => {
  document.getElementById('znCuRatio').textContent = zincCopperRatio.average.toFixed(1); // remainder of text is in HTML file
  document.getElementById('caMgRatio').textContent = calciumMagnesiumRatio.average.toFixed(1);
  document.getElementById('kNaRatio').textContent = potassiumSodiumRatio.average.toFixed(1);
} // end of printEvaluatingMineralRatioText
printEvaluatingMineralRatioText();

const toggleMineralRatios = () => {
  if (mineralRatiosInnerContainer.style.display === "none") {
    mineralRatiosInnerContainer.style.display = "block";
  } else {
    mineralRatiosInnerContainer.style.display = "none";
  }
}

const printEvaluatingLipidsText = () => {
  let lipidsMessage = "<p>Your omega 6 : omega 3 ratio should fall between about 0 and 3 : 1. Your ratio was " + omegaRatio.average.toFixed(1) + " : 1. These are your essential fats.</p>";
  if (monoPolySatFatRatio.toFixed(1) <= 3 || satFat.average > 20) {
    lipidsMessage += "<p>Your plant sourced monosaturated and total polyunsaturated fats were " + monoPolySatFatRatio.toFixed(1) + " times your saturated fats. Ideally this should be at least 3 times.</p>"
  } else {
    lipidsMessage += "<p>Your saturated fat value and your ratio of monosaturated and polyunsaturated fats to saturated fat are excellent. Your plant sourced monosaturated and total polyunsaturated fats were " + monoPolySatFatRatio.toFixed(1) + " times your saturated fats.</p>"
  }
  lipidsMessage += "<p>A good rule of thumb is to keep saturated fat less than 20g and the ratio of (plant sourced) monosaturated + polyunsaturated fats : saturated fat greater than 3:1. If you are at risk for atherosclerosis you may choose to stay around 10g saturated fat per day or less.</p>";
  if (monoPolySatFatRatio.toFixed(1) <= 3 || satFat.average > 20) {
    lipidsMessage += "<ul><li class = \"note\">If you ate any packaged foods, the nutritional data often excludes details of monosaturated and polyunsaturated fat content. In this case your ratio may be artefactually low however you should check the ingredient list to compare animal and coconut sourced (saturated) fat against plant sourced fats.</li><li class = \"note\">At this point in time there is insufficient research to determine whether eating saturated fat from coconut is healthy.</li></ul>";
  }
  document.getElementById('evaluatingLipids').innerHTML = lipidsMessage;
} // end of printEvaluatingLipidsText
printEvaluatingLipidsText();

const toggleEvaluatingLipids = () => {
  if (evaluatingLipidsInnerContainer.style.display === "none") {
    evaluatingLipidsInnerContainer.style.display = "block";
  } else {
    evaluatingLipidsInnerContainer.style.display = "none";
  }
}

const printDeficiencyMessages = () => {
  vitaminB12.infoDeficiency = `Vegans/plant based eaters will be unlikely to obtain sufficient dietary <span class = \"bold\">Vitamin B12</span> (there is some in fermented foods e.g. kombucha). Discuss Vitamin B12 blood tests and injections with your doctor.`;
  vitaminD.infoDeficiency = `Exposure to sufficient sunlight allows your body to manufacture it's own <span class = \"bold\">Vitamin D</span> but you need to have plenty of your skin exposed. Some people, with genes preventing them from manufacturing Vitamin D, will need to obtain dietary Vitamin D. You can be sure you are getting enough (from the combination of sunlight and diet) with a fairly routine blood test, which is best done in the winter when there is less sunlight exposure.`;
  iron.infoDeficiency = `Plant based eaters will need to exceed the RDI for <span class = \"bold\">iron</span>, and even then may require supplementation. Iron supplementation should not be started without first seeing your doctor for blood tests.`;
  let deficiencyMessage = "<ul>";
  nutrients.micronutrients.forEach(micronutrient => {
    if (nutrients.veryDeficientNutrientsArray.includes(micronutrient)) { // less than 50
      deficiencyMessage += "<li><span class = \"la-icon la la-ambulance\"></span>" + micronutrient.severeDeficiencyMessage + "</li>";
      if (micronutrient.infoDeficiency) deficiencyMessage += "<li class =\"note\">" + micronutrient.infoDeficiency + "</li>";
    } else if (nutrients.deficientNutrientsArray.includes(micronutrient)) { // less than 80
      deficiencyMessage += "<li><span class = \"la-icon la la-ambulance\"></span>" + micronutrient.deficiencyMessage + "</li>";
      if (micronutrient.infoDeficiency) deficiencyMessage += "<li class =\"note\">" + micronutrient.infoDeficiency + "</li>";
    } else if (nutrients.borderlineNutrientsArray.includes(micronutrient)) { // less than 110 but excluding sodium
      deficiencyMessage += "<li><span class = \"la-icon la la-ambulance\"></span>" + micronutrient.borderlineMessage + "</li>";
      if (micronutrient.infoDeficiency) deficiencyMessage += `<li class = "note">` + micronutrient.infoDeficiency + `</ul>`;
    }
  }); // end for Each
  deficiencyMessage += "</ul>"
  document.getElementById('deficiencyMessages').innerHTML = deficiencyMessage;
} //end of printDeficiencyMessages
printDeficiencyMessages();

const toggleDeficiencies = () => {
  if (deficiencies.style.display === "none") {
    deficiencies.style.display = "block";
    deficiencyAndExcessGrid.style.display = "grid";
    highAlerts.style.paddingLeft = "20px";
    highAlerts.style.paddingRight = "20px";
  } else {
    deficiencies.style.display = "none";
    deficiencyAndExcessGrid.style.display = "block";
    deficiencyAndExcessGrid.style.width = "100%";
    highAlerts.style.paddingLeft = "40px";
    highAlerts.style.paddingRight = "40px";
  }
}

const printAlertHighNutrientsText = () => { // high nutrients are > 150
  let yourHighNutrients = "";
  if (nutrients.alertIfHighNutrientsNamesArray.length > 0) {
    yourHighNutrients += `<p><span class = \"la-icon la la-stethoscope\"></span>You had high RDIs for the following nutrients which have maximum thresholds - ${nutrients.alertIfHighNutrientsNamesArray.join(", ")}.</p>`;
  }
  if (nutrients.noConcernHighNutrientsNamesArray.length > 0) {
    yourHighNutrients += `<p><span class = \"la-icon la la-stethoscope\"></span>You had high RDIs for some nutrients that have no maximum threshold set. These were - ${nutrients.noConcernHighNutrientsNamesArray.join(", ")}. </p>`;
  }
  yourHighNutrients += `<p><span class = \"la-icon la la-stethoscope\"></span>You will be alerted if any of your nutrients exceed the maximum threshold so there is no reason to be concerned about high values. However you may be interested to read more.</p>`;
  let alertHighNutrients = "<ul>"
  vitaminA.alert = `<li class =\"note\">Extensive plant based sources of <span class = \"bold\">vitamin A </span>may cause carotenemia. Carrots are by far the highest source. This is harmless and there is actually no maximum threshold for Vitamin A. Your ${vitaminA.name} was ${vitaminA.average.toFixed(0)}% of RDI.</li>`
  vitaminB3.alert = `<li class =\"note\"><span class = \"bold\">Vitamin B3</span> may be challenging to obtain in the diet but it has a relatively low max threshold of 250%.  Your ${vitaminB3.name} was ${vitaminB3.average.toFixed(0)}% of RDI.</li>`;
  folate.alert = `<li class =\"note\">Excess <span class = \"bold\">folate</span> via supplementation, including fortification of foods, is harmful. Excess folate from natural foods is of no concern. The max threshold for folate from the artificial form, folic acid, is 250%. Your ${folate.name} was ${folate.average.toFixed(0)}% of RDI.</li>`;
  copper.alert = `<li class =\"note\">Excessive <span class = \"bold\">copper</span> results in an unbalanced zinc to copper ratio however for vegetarians this may be difficult to avoid. Copper's maximum threshold is very high at 1110%. Your ${copper.name} was ${copper.average.toFixed(0)}% of RDI.</li>`;
  calcium.alert = `<li class =\"note\"><span class = \"bold\">Calcium</span> has a max threshold of 150-200% depending on which countries recommendations are followed. Excess supplementation is harmful. Your ${calcium.name} was ${calcium.average.toFixed(0)}% of RDI.</li>`;
  manganese.alert = `<li class =\"note\">The max threshold for <span class = \"bold\">manganese</span> is 610% and it would be possible for plant based eaters to reach this. Your ${manganese.name} was ${manganese.average.toFixed(0)}% of RDI.</li>`;
  phosphorus.alert = `<li class =\"note\">High <span class = \"bold\">phosphorus</span> results in an unbalanced calcium to phosphorus ratio. The max threshold for phosphorus is 570%. Your ${phosphorus.name} was ${phosphorus.average.toFixed(0)}% of RDI.</li>`;
  selenium.alert = `<li class =\"note\">Eating a moderate amount of brazil nuts could cause you to exceed the upper limit for <span class = \"bold\">selenium</span>, which is 727%. Your ${selenium.name} was ${selenium.average.toFixed(0)}% of RDI.</li>`;
  sodium.alert = `<li class =\"note\">Excess <span class = \"bold\">sodium</span> results in an unbalanced potassium to sodium ratio. Sodium's max threshold is set at 153% though it is well known that if you are losing sodium in sweat you will need much more. If you have hypertension you should be very concerned about your sodium intake. If you have another medical condition, you should discuss, with your doctor or dietician, whether or not you need to be concerned about sodium. Your ${sodium.name} was ${sodium.average.toFixed(0)}% of RDI.</li>`;
  zinc.alert = `<li class =\"note\">The max threshold for <span class = \"bold\">zinc</span> is 500% but most vegetarians and vegans will be struggling to eat nearly enough. Your ${zinc.name} was ${zinc.average.toFixed(0)}% of RDI.</li>`;
  nutrients.micronutrients.forEach(micronutrient => { // but alert message is only displayed if > 250 or > 150 if sodium
    if (micronutrient.average > 250 && micronutrient.alert) {
      alertHighNutrients += micronutrient.alert;
    }
    if (micronutrient.name === 'sodium' && sodium.average > 149 && sodium.average <= 250) {
      alertHighNutrients += sodium.alert;
    }
  }); // end for Each micronutrient
  alertHighNutrients += "</ul>";
  document.getElementById('yourHighNutrients').innerHTML = yourHighNutrients;
  document.getElementById('alertHighNutrients').innerHTML = alertHighNutrients;
} // end of printAlertHighNutrientsText
printAlertHighNutrientsText();

const toggleHighAlerts = () => {
  if (highAlerts.style.display === "none") {
    highAlerts.style.display = "block";
    deficiencies.style.paddingLeft = "20px";
    deficiencies.style.paddingRight = "20px";
    deficiencyAndExcessGrid.style.display = "grid";
  } else {
    highAlerts.style.display = "none";
    deficiencyAndExcessGrid.style.display = "block";
    deficiencyAndExcessGrid.style.width = "100%";
    deficiencies.style.paddingLeft = "40px";
    deficiencies.style.paddingRight = "40px";
  }
}

//------------------------------------------------------------------------------------==------------------------------------------------
//FUNCTIONS (MANY) TO GENERATE MICRONUTRIENT RICH FOOD ARRAYS

const generateVitaminARichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminA = 2000 / food.energy * food.vitaminA);
  vitaminA.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminA >= 200);
  vitaminA.richFoodsArray.sort((a, b) => b.newVitaminA - a.newVitaminA); // sort high to low
  vitaminA.ultraRichFoodsArray = vitaminA.richFoodsArray.filter(food => food.newVitaminA >= 400);
  vitaminA.megaRichFoodsArray = vitaminA.ultraRichFoodsArray.filter(food => food.newVitaminA >= 800);
  vitaminA.richFoodsArray.forEach(food => {
    vitaminA.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminA.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminB1RichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminB1 = 2000 / food.energy * food.vitaminB1);
  vitaminB1.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminB1 >= 200);
  vitaminB1.richFoodsArray.sort((a, b) => b.newVitaminB1 - a.newVitaminB1); // sort high to low 
  vitaminB1.ultraRichFoodsArray = vitaminB1.richFoodsArray.filter(food => food.newVitaminB1 >= 400);
  vitaminB1.megaaRichFoodsArray = vitaminB1.ultraRichFoodsArray.filter(food => food.newVitaminB1 >= 800);
  vitaminB1.richFoodsArray.forEach(food => {
    vitaminB1.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminB1.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminB2RichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminB2 = 2000 / food.energy * food.vitaminB2);
  vitaminB2.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminB2 >= 200);
  vitaminB2.richFoodsArray.sort((a, b) => b.newVitaminB2 - a.newVitaminB2); // sort high to low
  vitaminB2.ultraRichFoodsArray = vitaminB2.richFoodsArray.filter(food => food.newVitaminB2 >= 400);
  vitaminB2.megaRichFoodsArray = vitaminB2.ultraRichFoodsArray.filter(food => food.newVitaminB2 >= 800);
  vitaminB2.richFoodsArray.forEach(food => {
    vitaminB2.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminB2.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminB3RichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminB3 = 2000 / food.energy * food.vitaminB3);
  vitaminB3.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminB3 >= 200);
  vitaminB3.richFoodsArray.sort((a, b) => b.newVitaminB3 - a.newVitaminB3); // sort high to low
  vitaminB3.ultraRichFoodsArray = vitaminB3.richFoodsArray.filter(food => food.newVitaminB3 >= 400);
  vitaminB3.megaRichFoodsArray = vitaminB3.ultraRichFoodsArray.filter(food => food.newVitaminB3 >= 800);
  vitaminB3.richFoodsArray.forEach(food => {
    vitaminB3.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminB3.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminB5RichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminB5 = 2000 / food.energy * food.vitaminB5);
  vitaminB5.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminB5 >= 200);
  vitaminB5.richFoodsArray.sort((a, b) => b.newVitaminB5 - a.newVitaminB5); //sort high to low
  vitaminB5.ultraRichFoodsArray = vitaminB5.richFoodsArray.filter(food => food.newVitaminB5 >= 400);
  vitaminB5.megaRichFoodsArray = vitaminB5.ultraRichFoodsArray.filter(food => food.newVitaminB5 >= 800);
  vitaminB5.richFoodsArray.forEach(food => {
    vitaminB5.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminB5.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminB6RichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminB6 = 2000 / food.energy * food.vitaminB6);
  vitaminB6.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminB6 >= 200);
  vitaminB6.richFoodsArray.sort((a, b) => b.newVitaminB6 - a.newVitaminB6); //sort high to low
  vitaminB6.ultraRichFoodsArray = vitaminB6.richFoodsArray.filter(food => food.newVitaminB6 >= 400);
  vitaminB6.megaRichFoodsArray = vitaminB6.ultraRichFoodsArray.filter(food => food.newVitaminB6 >= 800);
  vitaminB6.richFoodsArray.forEach(food => {
    vitaminB6.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminB6.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminB12RichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminB12 = 2000 / food.energy * food.vitaminB12);
  vitaminB12.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminB12 >= 200);
  vitaminB12.richFoodsArray.sort((a, b) => b.newVitaminB12 - a.newVitaminB12); //sort high to low
  vitaminB12.ultraRichFoodsArray = vitaminB12.richFoodsArray.filter(food => food.newVitaminB12 >= 400);
  vitaminB12.megaRichFoodsArray = vitaminB12.ultraRichFoodsArray.filter(food => food.newVitaminB12 >= 800);
  vitaminB12.richFoodsArray.forEach(food => {
    vitaminB12.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminB12.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateCholineRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newCholine = 2000 / food.energy * food.choline);
  choline.richFoodsArray = myFood.myShowFoods.filter(food => food.newCholine >= 200);
  choline.richFoodsArray.sort((a, b) => b.newCholine - a.newCholine); //sort descending 
  choline.ultraRichFoodsArray = choline.richFoodsArray.filter(food => food.newCholine >= 400);
  choline.megaRichFoodsArray = choline.ultraRichFoodsArray.filter(food => food.newCholine >= 800);
  choline.richFoodsArray.forEach(food => {
    choline.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newCholine.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateFolateRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newFolate = 2000 / food.energy * food.folate);
  folate.richFoodsArray = myFood.myShowFoods.filter(food => food.newFolate >= 200);
  folate.richFoodsArray.sort((a, b) => b.newFolate - a.newFolate); //sort descending 
  folate.ultraRichFoodsArray = folate.richFoodsArray.filter(food => food.newFolate >= 400);
  folate.megaRichFoodsArray = folate.ultraRichFoodsArray.filter(food => food.newFolate >= 800);
  folate.richFoodsArray.forEach(food => {
    folate.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newFolate.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminCRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminC = 2000 / food.energy * food.vitaminC);
  vitaminC.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminC >= 200);
  vitaminC.richFoodsArray.sort((a, b) => b.newVitaminC - a.newVitaminC); //sort descending
  vitaminC.ultraRichFoodsArray = vitaminC.richFoodsArray.filter(food => food.newVitaminC >= 400);
  vitaminC.megaRichFoodsArray = vitaminC.ultraRichFoodsArray.filter(food => food.newVitaminC >= 800);
  vitaminC.richFoodsArray.forEach(food => {
    vitaminC.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminC.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminDRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminD = 2000 / food.energy * food.vitaminD);
  vitaminD.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminD >= 200);
  vitaminD.richFoodsArray.sort((a, b) => b.newVitaminD - a.newVitaminD); //sort descending
  vitaminD.ultraRichFoodsArray = vitaminD.richFoodsArray.filter(food => food.newVitaminD >= 400);
  vitaminD.megaRichFoodsArray = vitaminD.ultraRichFoodsArray.filter(food => food.newVitaminD >= 800);
  vitaminD.richFoodsArray.forEach(food => {
    vitaminD.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminD.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminERichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminE = 2000 / food.energy * food.vitaminE);
  vitaminE.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminE >= 200);
  vitaminE.richFoodsArray.sort((a, b) => b.newVitaminE - a.newVitaminE); //sort descending 
  vitaminE.ultraRichFoodsArray = vitaminE.richFoodsArray.filter(food => food.newVitaminE >= 400);
  vitaminE.megaRichFoodsArray = vitaminE.ultraRichFoodsArray.filter(food => food.newVitaminE >= 800);
  vitaminE.richFoodsArray.forEach(food => {
    vitaminE.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminE.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateVitaminKRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newVitaminK = 2000 / food.energy * food.vitaminK);
  vitaminK.richFoodsArray = myFood.myShowFoods.filter(food => food.newVitaminK >= 200);
  vitaminK.richFoodsArray.sort((a, b) => b.newVitaminK - a.newVitaminK); //sort descending 
  vitaminK.ultraRichFoodsArray = vitaminK.richFoodsArray.filter(food => food.newVitaminK >= 400);
  vitaminK.megaRichFoodsArray = vitaminK.ultraRichFoodsArray.filter(food => food.newVitaminK >= 800);
  vitaminK.richFoodsArray.forEach(food => {
    vitaminK.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newVitaminK.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateCalciumRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newCalcium = 2000 / food.energy * food.calcium);
  calcium.richFoodsArray = myFood.myShowFoods.filter(food => food.newCalcium >= 200);
  calcium.richFoodsArray.sort((a, b) => b.newCalcium - a.newCalcium); //sort descending 
  calcium.ultraRichFoodsArray = calcium.richFoodsArray.filter(food => food.newCalcium >= 400);
  calcium.megaRichFoodsArray = calcium.ultraRichFoodsArray.filter(food => food.newCalcium >= 800);
  calcium.richFoodsArray.forEach(food => {
    calcium.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newCalcium.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateCopperRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newCopper = 2000 / food.energy * food.copper);
  copper.richFoodsArray = myFood.myShowFoods.filter(food => food.newCopper >= 200);
  copper.richFoodsArray.sort((a, b) => b.newCopper - a.newCopper); //sort descending objects
  copper.ultraRichFoodsArray = copper.richFoodsArray.filter(food => food.newCopper >= 400);
  copper.megaRichFoodsArray = copper.ultraRichFoodsArray.filter(food => food.newCopper >= 800);
  copper.richFoodsArray.forEach(food => {
    //copper.richFoodsNamesArray.push(food.name); //to create descending list of names
    copper.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newCopper.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateIronRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newIron = 2000 / food.energy * food.iron);
  iron.richFoodsArray = myFood.myShowFoods.filter(food => food.newIron >= 200);
  iron.richFoodsArray.sort((a, b) => b.newIron - a.newIron); //sort descending objects
  iron.ultraRichFoodsArray = iron.richFoodsArray.filter(food => food.newIron >= 400);
  iron.megaRichFoodsArray = iron.ultraRichFoodsArray.filter(food => food.newIron >= 800);
  iron.richFoodsArray.forEach(food => {
    iron.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newIron.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateMagnesiumRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newMagnesium = 2000 / food.energy * food.magnesium);
  magnesium.richFoodsArray = myFood.myShowFoods.filter(food => food.newMagnesium >= 200);
  magnesium.richFoodsArray.sort((a, b) => b.newMagnesium - a.newMagnesium); //sort 
  magnesium.ultraRichFoodsArray = magnesium.richFoodsArray.filter(food => food.newMagnesium >= 400);
  magnesium.megaRichFoodsArray = magnesium.ultraRichFoodsArray.filter(food => food.newMagnesium >= 800);
  magnesium.richFoodsArray.forEach(food => {
    magnesium.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newMagnesium.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateManganeseRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newManganese = 2000 / food.energy * food.manganese);
  manganese.richFoodsArray = myFood.myShowFoods.filter(food => food.newManganese >= 200);
  manganese.richFoodsArray.sort((a, b) => b.newManganese - a.newManganese); //sort 
  manganese.ultraRichFoodsArray = manganese.richFoodsArray.filter(food => food.newManganese >= 400);
  manganese.megaRichFoodsArray = manganese.ultraRichFoodsArray.filter(food => food.newManganese >= 800);
  manganese.richFoodsArray.forEach(food => {
    manganese.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newManganese.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generatePhosphorusRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newPhosphorus = 2000 / food.energy * food.phosphorus);
  phosphorus.richFoodsArray = myFood.myShowFoods.filter(food => food.newPhosphorus >= 200);
  phosphorus.richFoodsArray.sort((a, b) => b.newPhosphorus - a.newPhosphorus); //sort 
  phosphorus.ultraRichFoodsArray = phosphorus.richFoodsArray.filter(food => food.newPhosphorus >= 400);
  phosphorus.megaRichFoodsArray = phosphorus.ultraRichFoodsArray.filter(food => food.newPhosphorus >= 800);
  phosphorus.richFoodsArray.forEach(food => {
    phosphorus.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newPhosphorus.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generatePotassiumRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newPotassium = 2000 / food.energy * food.potassium);
  potassium.richFoodsArray = myFood.myShowFoods.filter(food => food.newPotassium >= 200);
  potassium.richFoodsArray.sort((a, b) => b.newPotassium - a.newPotassium); //sort 
  potassium.ultraRichFoodsArray = potassium.richFoodsArray.filter(food => food.newPotassium >= 400);
  potassium.megaRichFoodsArray = potassium.ultraRichFoodsArray.filter(food => food.newPotassium >= 800);
  potassium.richFoodsArray.forEach(food => {
    potassium.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newPotassium.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateSeleniumRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newSelenium = 2000 / food.energy * food.selenium);
  selenium.richFoodsArray = myFood.myShowFoods.filter(food => food.newSelenium >= 200);
  selenium.richFoodsArray.sort((a, b) => b.newSelenium - a.newSelenium); //sort descending
  selenium.ultraRichFoodsArray = selenium.richFoodsArray.filter(food => food.newSelenium >= 400);
  selenium.megaRichFoodsArray = selenium.ultraRichFoodsArray.filter(food => food.newSelenium >= 800);
  selenium.richFoodsArray.forEach(food => {
    selenium.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newSelenium.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateSodiumRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newSodium = 2000 / food.energy * food.sodium);
  sodium.richFoodsArray = myFood.myShowFoods.filter(food => food.newSodium >= 200);
  sodium.richFoodsArray.sort((a, b) => b.newSodium - a.newSodium); //sort descending objects
  sodium.ultraRichFoodsArray = sodium.richFoodsArray.filter(food => food.newSodium >= 400);
  sodium.megaRichFoodsArray = sodium.ultraRichFoodsArray.filter(food => food.newSodium >= 800);
  sodium.richFoodsArray.forEach(food => {
    sodium.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newSodium.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateZincRichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newZinc = 2000 / food.energy * food.zinc);
  zinc.richFoodsArray = myFood.myShowFoods.filter(food => food.newZinc >= 200);
  zinc.richFoodsArray.sort((a, b) => b.newZinc - a.newZinc); //sort descending objects
  zinc.ultraRichFoodsArray = zinc.richFoodsArray.filter(food => food.newZinc >= 400);
  zinc.megaRichFoodsArray = zinc.ultraRichFoodsArray.filter(food => food.newZinc >= 800);
  zinc.richFoodsArray.forEach(food => {
    zinc.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newZinc.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateOmega6RichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newOmega6 = 2000 / food.energy * (food.omega6 / 11) * 100);
  omega6.richFoodsArray = myFood.myShowFoods.filter(food => food.newOmega6 >= 200);
  omega6.richFoodsArray.sort((a, b) => b.newOmega6 - a.newOmega6); //sort descending objects
  omega6.ultraRichFoodsArray = omega6.richFoodsArray.filter(food => food.newOmega6 >= 400);
  omega6.megaRichFoodsArray = omega6.ultraRichFoodsArray.filter(food => food.newOmega6 >= 800);
  omega6.richFoodsArray.forEach(food => {
    omega6.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newOmega6.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateOmega3RichArraysAndLists = () => {
  myFood.myShowFoods.forEach(food => food.newOmega3 = 2000 / food.energy * (food.omega3 / 1.1) * 100);
  omega3.richFoodsArray = myFood.myShowFoods.filter(food => food.newOmega3 >= 200);
  omega3.richFoodsArray.sort((a, b) => b.newOmega3 - a.newOmega3); //sort descending objects
  omega3.ultraRichFoodsArray = omega3.richFoodsArray.filter(food => food.newOmega3 >= 400);
  omega3.megaRichFoodsArray = omega3.ultraRichFoodsArray.filter(food => food.newOmega3 >= 800);
  omega3.richFoodsArray.forEach(food => {
    omega3.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.newOmega3.toFixed(0)} % of RDI for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
}

const generateZincCopperRatioArraysAndLists = () => {
  zincCopperRatio.richFoodsArray = myFood.myShowFoods.filter(food => food.zincCopperRatio > 4);
  zincCopperRatio.ultraRichFoodsArray = zincCopperRatio.richFoodsArray.filter(food => food.zincCopperRatio > 8);
  zincCopperRatio.megaRichFoodsArray = zincCopperRatio.ultraRichFoodsArray.filter(food => food.zincCopperRatio > 12);
  zincCopperRatio.richFoodsArray.sort((a, b) => b.ZincCopperRatio - a.ZincCopperRatio); //sort 
  zincCopperRatio.richFoodsArray.forEach(food => {
    zincCopperRatio.richFoodsListWithPercentAndPrice += `<li>${food.name}: ${food.zincCopperRatio.toFixed(1)} ratio for $${food.newPrice.toFixed(2)}</li>`;
  }); // end for Each
  zincCopperRatio.richFoodsList += `${zincCopperRatio.richFoodsNamesArray.join (", ")}`
}

const calculateMonoPolySatRatio = (object) => {
  object.monoPolySatFatRatio = object.satFat / (object.monosatFat + object.polyunsatFat);
}

// GENERATE ALL SELECTED MICRONUTRIENT ARRAYS

const generateAllSelectedMicroNutrientArrays = () => {
  myFood.myShowFoods.forEach(food => { //requires each nutrients RichArraysAndLists
    food.volume = 1;
    food.newPrice = 2000 / food.energy * food.price;
  }); // end for each
  generateVitaminARichArraysAndLists();
  generateVitaminB1RichArraysAndLists();
  generateVitaminB2RichArraysAndLists();
  generateVitaminB3RichArraysAndLists();
  generateVitaminB5RichArraysAndLists();
  generateVitaminB6RichArraysAndLists();
  generateVitaminB12RichArraysAndLists();
  generateCholineRichArraysAndLists();
  generateFolateRichArraysAndLists();
  generateVitaminCRichArraysAndLists();
  generateVitaminDRichArraysAndLists();
  generateVitaminDRichArraysAndLists();
  generateVitaminERichArraysAndLists();
  generateVitaminKRichArraysAndLists();
  generateCalciumRichArraysAndLists();
  generateCopperRichArraysAndLists();
  generateIronRichArraysAndLists();
  generateMagnesiumRichArraysAndLists();
  generateManganeseRichArraysAndLists();
  generatePhosphorusRichArraysAndLists();
  generatePotassiumRichArraysAndLists();
  generateSeleniumRichArraysAndLists();
  generateSodiumRichArraysAndLists();
  generateZincRichArraysAndLists();
  generateOmega3RichArraysAndLists();
  generateOmega6RichArraysAndLists();
  generateZincCopperRatioArraysAndLists();
  const generateRichFoodsNamesArrays = () => {
    nutrients.micronutrients.forEach(micronutrient => {
      micronutrient.richFoodsNamesArray = micronutrient.richFoodsArray.map(food => food.name);
      micronutrient.ultraRichFoodsNamesArray = micronutrient.ultraRichFoodsArray.map(food => food.name);
      micronutrient.megaRichFoodsNamesArray = micronutrient.megaRichFoodsArray.map(food => food.name)
    }); // end for Each
  } // end generateRichFoodsNamesArrays
  generateRichFoodsNamesArrays();
} // end generateAllSelectedMicroNutrientArrays
generateAllSelectedMicroNutrientArrays(); // calling this function now so nutrient.richFoodArrays, nutrient.richFoodNamesArrays and nutrient.richFoodsListWithPercentAndPrice are created

const generateNutrientRichFoodLists = () => { //requires richFoodNamesArray; it is not unique to each nutrient whereas richFoodsListWithPercentAndPrice was unique to each so the loop wouldn't work
  nutrients.micronutrients.forEach(micronutrient => {
    micronutrient.richFoodsNamesArray = micronutrient.richFoodsNamesArray.filter(name => !micronutrient.ultraRichFoodsNamesArray.includes(name));
    micronutrient.richFoodsList = micronutrient.richFoodsNamesArray.join(", ");
    if (micronutrient.name === "vitamin D") {
      vitaminD.richFoodsList += `Eggs and mushrooms have only one time the RDI for Vitamin D however in most (but not all cases) your body can manufacture it's own with sun exposure. ${vitaminD.richFoodsNamesArray.join (", ")}`;
    }
  }); // end for Each 
  nutrients.micronutrients.forEach(micronutrient => {
    micronutrient.ultraRichFoodsNamesArray = micronutrient.ultraRichFoodsNamesArray.filter(name => !micronutrient.megaRichFoodsNamesArray.includes(name));
    micronutrient.ultraRichFoodsList = micronutrient.ultraRichFoodsNamesArray.join(", ");
  }); // end for Each 
  nutrients.micronutrients.forEach(micronutrient => {
    micronutrient.megaRichFoodsList = micronutrient.megaRichFoodsNamesArray.join(", ");
  }); // end for Each 
} // end of generateNutrientRichFoodLists 
generateNutrientRichFoodLists(); // calling this function now so nutrient.richFoodsList is created
//NUTRIENT ARRAYS ARE AVAILABLE FOR USE LATER WHEN REQUIRED
//THEY ARE INDEPENDENT OF FOOD VOLUME THOUGH NUTRIENT ARRAYS REQUIRE AN UP TO 
//DATE PRICE

const setBooleanTopPriorityAndRecommendedFoods = () => { // requires richFoodsArray
  myFood.myShowFoods.forEach(food => {
    nutrients.micronutrients.forEach(micronutrient => {
      if (micronutrient.richFoodsArray.includes(food)) { // if food contains >2x micronutrient on energy basis i.e either a rich food, ultrarich (4-8x) food or megarich (>8x) food
        if (micronutrient.average < 80 && micronutrient !== sodium) { //if user is deficient or very deficient nutrient but exclude sodium
          if (micronutrient.megaRichFoodsArray.includes(food) || micronutrient.ultraRichFoodsArray.includes(food) || (micronutrient.megaRichFoodsArray.length + micronutrient.ultraRichFoodsArray.length) < 6) {
            food.topPriority = true; //includes 2-4x foods in some cases where list is shorter than 5 foods
          } else {
            food.recommended = true; // 2-4x foods fall here if top priority list already contains 5 foods
          }
        } // if the nutrient is deficient or very deficient all megarich and all ultrarich are top priority and sometimes rich foods will be top priority if needed to make a list up to 5
        if (micronutrient.average >= 80 && micronutrient.average < 110 && micronutrient.name !== "sodium") {
          food.recommended = true; // if food contains >2x micronutrient on energy basis and nutrient is borderline regardless of whether food is 2 or >8x
        } else if (micronutrient.average >= 110 && micronutrient.average < 150 && micronutrient.name !== "sodium" && micronutrient.name !== "choline") {
          food.useful = true; // lower nutrients for foods 2 to >8x, referred to as helpful foods
        }
      } // end if richFoodsArray includes
    }); // end inner for Each micronutrient
  }); // end outer if for Each food
} // end of setBooleanTopPriorityAndRecommendedFoods
setBooleanTopPriorityAndRecommendedFoods();

const generateTopPriorityAndRecommendedFoodsArraysAndLists = () => {
  myFood.myTopPriorityFoods = myFood.myShowFoods.filter(food => food.topPriority === true);
  myFood.myTopPriorityFoodsNames = myFood.myTopPriorityFoods.map(food => food.name);
  myFood.myRecommendedFoods = myFood.myShowFoods.filter(food => food.topPriority === false && food.recommended === true);
  myFood.myRecommendedFoodsNames = myFood.myRecommendedFoods.map(food => food.name);
  myFood.myUsefulFoods = myFood.myShowFoods.filter(food => food.topPriority === false && food.recommended === false && food.useful === true);
  myFood.myUsefulFoodsNames = myFood.myUsefulFoods.map(food => food.name);
} // end of generateTopPriorityAndRecommendedFoodsArraysAndLists
// IMPORTANT - in these arrays foods can not be both top priority and recommended but they can above
generateTopPriorityAndRecommendedFoodsArraysAndLists();

const printTextAfterFAQ = () => {
  if (nutrients.veryDeficientNutrientsArray.length > 0) {
    let severelyLowMessage = `<em>Take particular note of the food recommendations for nutrients which were severely low. For you these were - ${nutrients.veryDeficientNutrientsNamesArray.join(", ")}.</em>`;
    document.getElementById('severelyLowMessage').innerHTML = severelyLowMessage; //nutrients less than 50
  }
  if ((nutrients.veryDeficientNutrientsArray.length + nutrients.deficientNutrientsArray.length) < 4) {
    let congratulationsMessage = `If your nutrients are already great there may be no or very few suggestions, <span class = \"bold\">Congratulations!</span>`;
    document.getElementById('congratulationsMessage').textcontent = congratulationsMessage; // max of 3 nutrients < 80 gets congrats message
  }
} // end of printTextAfterFAQ
printTextAfterFAQ();

const printGroceryListTopPriorityText1a = () => {
  vitaminB2.infoFoods = `<p class = \"addSpace\">Mushrooms are a powerhouse source of <span class = \"bold\">Vitamin B2</span>; one 150g serve provides 55% of the RDI. One egg will provide around 25%. On an energy basis mushrooms provide 33x the RDI, kale 18x spinach 15x, coriander and asparagus 12x, bok choy 10x and lettuce (mixed greens) 9x.</p>`
  vitaminB3.infoFoods = `<p class = \"addSpace\">Mushrooms are a powerhouse source of <span class = \"bold\">Vitamin B3</span>; one 150g serve provides 40% of the RDI. On an energy basis mushrooms provide 23 x the RDI. Asparagus is also a good performer providing 7x.</p>`
  vitaminB5.infoFoods = `<p class = \"addSpace\">Mushrooms are a powerhouse source of <span class = \"bold\">Vitamin B5</span>; one 150g serve provides 45% of the RDI. On an energy basis mushrooms provide 27x the RDI and cauliflower and coriander provide 10x.</p>`;
  vitaminB12.infoFoods = `<p class = \"addSpace\">One egg provides around 25% of your <span class = \"bold\">Vitamin B12</span> needs. Some plant based milks are fortified with Vitamin B12. Fermented foods are also a source.</p>`;
  choline.infoFoods = `<p class = \"addSpace\">If you eat 1-2 eggs a day you are likely to get the balance of the <span class = \"bold\">choline</span> you need from the remainder of your diet. For vegans, cauliflower is an excellent source of choline. It rivals eggs (one egg is around 40% of your daily choline needs) on a kilocalorie basis (both are 8-9x the RDI on an energy basis). However a 150g serve of cauliflower provides just 16% of your daily choline so you will need to eat a large volume.</p>`;
  vitaminD.infoFoods = `<p class = \"addSpace\">Eggs and mushrooms contain one times the RDI for <span class = \"bold\">Vitamin D</span> on an energy basis. In most cases plentiful sunlight exposure will be sufficient to allow your body to produce its own Vitamin D.</p>`;
  vitaminE.infoFoods = `<p class = \"addSpace\">Look to healthy fats for <span class = \"bold\">Vitamin E</span>. If on a low fat diet, eat a wide range of the vegetables suggested. Including red capsicum and asparagus will definitely be helpful as they provide about 8x the RDI on an energy basis. Coriander provides 14x and spinach provides 11x but with the added challenge of eating enough.</p>`;
  calcium.infoFoods = `<p class = \"addSpace\"><span class = \"bold\">Calcium</span> from vegetables, especially leafy greens may be poorly absorbed. Although the dark leafy vegetables, especially kale (12x the RDI on an energy basis) and bok choy (13x) are extremely high in calcium per kilocalorie it would be difficult to eat enough of them to make much impact. Tofu, when prepared using calcium sulphate as the coagulant, is extremely high in calcium. These are usually the softer tofus, which tend to break up more during cooking, e.g. Macro Classic Tofu (Woolworths)</p>`;
  iron.infoFoods = `<p class = \"addSpace\"><span class = \"bold\">Iron</span> from vegetables is poorly absorbed. There is no shortage of iron in vegetables - parsley (43x RDI on an energy basis), spinach 29x, coriander 19x, lettuce 16x, bok choy 15x, kale 11x, but none of these foods guarantee plant based eaters won't require supplementation.</p>`;
  magnesium.infoFoods = `<p class = \"addSpace\">Spinach is a stand out source of <span class = \"bold\">magnesium</span> at 21x the rDI on an energy basis.</p>`
  selenium.infoFoods = `<p class = \"addSpace\">One or two brazil nuts provide all your daily <span class = \"bold\">selenium</span>; in fact you can exceed the maximum threshold by eating too many. Selenium content varies widely depending on the selenium content of the soil where they are grown. A 150g serve of mushrooms will provide 25% of your daily selenium needs (15x the RDI on an energy basis) and an egg around 30% (7x the RDI on an energy basis). Asparagus provides 4x and brocolli only about 2.5x).</p>`;
  zinc.infoFoods = `<p class = \"addSpace\"><span class = \"bold\">Zinc</span> is rich in animal foods but plant based eaters will be challenged to find rich sources. Your best bet is to eat a wide variety of these listed foods.</p>`;
  omega6.infoFoods = `<p class = \"addSpace\">Remember to also increase <span class = \"bold\">omega 3</span> foods to keep your omega 6: omega 3 ratio balance. Chia and flax seeds and oily fish are extremely high in omega 3s. Dark leafy greens especially kale, bok choy, lettuce and edamame also provide some.</p>`;
  let richFoodsText = "";
  nutrients.micronutrients.forEach(micronutrient => {
    if (micronutrient.average <= 99) { //food recommendations not given if >=100 although nutrient may be borderline (100 to <110)
      richFoodsText += `<p class = \"bold addMoreSpace\">Your ${micronutrient.name} was ${micronutrient.average.toFixed(0)}% of RDI.</p>`;
      richFoodsText += micronutrient.heading1;
      if (micronutrient.megaRichFoodsNamesArray.length >= 1) { // if foods > 8x exist
        richFoodsText += micronutrient.megaRichFoodsHeading + "<span class = \"la-icon la la-seedling\"></span>" + micronutrient.megaRichFoodsList;
      }
      if (micronutrient.ultraRichFoodsNamesArray.length >= 1) { // if foods 4-8x exist
        richFoodsText += micronutrient.ultraRichFoodsHeading + "<span class = \"la-icon la la-seedling\"></span>" + micronutrient.ultraRichFoodsList;
      }
      if (micronutrient.ultraRichFoodsNamesArray.length < 15) { // rich foods list not given if ready plenty of foods in mega and ultra lists
        if (micronutrient.richFoodsNamesArray.length >= 1) { // if foods 2-4x exist
          richFoodsText += micronutrient.richFoodsHeading + "<span class = \"la-icon la la-seedling\"></span>" + micronutrient.richFoodsList;
        } else if (micronutrient.richFoodsNamesArray.length <= 0 && micronutrient.ultraRichFoodsNamesArray.length <= 0) {
          richFoodsText += micronutrient.noRichFoodsMessage;
        }
      } // end if ultraRichFoodsNamesArray.length < 15 
      const highEnergyNamesArray = [];
      micronutrient.richFoodsArray.forEach(food => { // the rich foods Array contains ultra and mega rich foods too
        if (food.energy > 70) highEnergyNamesArray.push(food.name) // a bit more energy dense than most fruit except bananas (89) i.e. potatoes are 77
      }); // end for Each food
      if (highEnergyNamesArray.length > 0) { // if higher energy foods exist
        richFoodsText += `<p class =\"addEvenMoreSpace\"><em>Higher energy foods are ${highEnergyNamesArray.join(", ")}.  Choosing them may be an easier way to get ${micronutrient.name}.</em></p>`;
      }
      if (micronutrient.name !== "sodium") { // calorie based food suggestions are not made for sodium as can add salt to food
        if (micronutrient.ultraRichFoodsArray.length >= 1 || micronutrient.richFoodsArray.length >= 1) {
          richFoodsText += `<p class =\"addSpace\">To increase your <span class = \"bold \">${micronutrient.name}</span> by ${Math.ceil(100 - micronutrient.average.toFixed(0))}% you could eat a daily average of</p><ul>`;
          if (micronutrient.megaRichFoodsNamesArray.length >= 1) {
            richFoodsText += ` <li class =\"calories\">up to ${Math.ceil((100 - micronutrient.average) * .25).toFixed(0) * 10} calories of foods from the 8x group</li>`;
          }
          if (micronutrient.ultraRichFoodsNamesArray.length >= 1) {
            richFoodsText += ` <li class =\"calories\">about ${Math.ceil((100 - micronutrient.average) * .25).toFixed(0) * 10}`;
            if (Math.ceil((100 - micronutrient.average) * .5).toFixed(0) * 10 > Math.ceil((100 - micronutrient.average) * .25).toFixed(0) * 10) {
              richFoodsText += ` to ${Math.ceil((100 - micronutrient.average) * .5).toFixed(0) * 10}`;
            }
            richFoodsText += ` calories of foods from the 4 to 8x group</li>`;
          }
          if (micronutrient.richFoodsNamesArray.length >= 1) {
            richFoodsText += ` <li class =\"calories\">about ${Math.ceil((100 - micronutrient.average) * .5).toFixed(0) * 10}`;
            if (Math.ceil((100 - micronutrient.average)).toFixed(0) * 10 > Math.ceil((100 - micronutrient.average) * .5).toFixed(0)) {
              richFoodsText += ` to ${Math.ceil((100 - micronutrient.average)).toFixed(0) * 10}`
            }
            richFoodsText += ` calories from the 2 to 4x group</li>`;
          }
          richFoodsText += `</ul><p><em>The lower end of the calorie range applies to the items at the beginning of each list.</p><p class =\"padBottom\">These amounts are in addition to the foods from those groups that you are already eating.</em></p>`;
        } // end if array.lengths >= 1
      } // end if not sodium
      if (micronutrient.infoFoods) {
        richFoodsText += `${micronutrient.infoFoods}`;
      }
    } // end if micronutrient average < 100
  }); // end for Each Micronutrient
  document.getElementById('richFoodsText').innerHTML = richFoodsText;
}
printGroceryListTopPriorityText1a();

const printGroceryListTopPriorityText1b = () => {
  let recommendRichFoodsText = `<p><em>If everything's great these lists may be empty! (or you may have chosen to hide too many healthy foods or food groups)</em></p>`;
  let topPriorityFoodsMessage = `<h3>Ready Set Go ... (your top grocery list suggestions)</h3><div id =\"importantFoods\"><p class =\"addSpace\">There are ${myFood.myTopPriorityFoodsNames.length} <span class = \"bold\">"top priority"</span> food suggestions for your next grocery list. You'll likely be eating some of these already. Choose one or two novel foods from this (alphabetical) list to add to your next shop - </p><p class = \"bold addSpace\"><span class = \"la-icon la la-seedling\"></span>${myFood.myTopPriorityFoodsNames.join(", ")}</p><p class =\"addSpace\"><em>Keep on eating plenty of the ones you already like!</em></p></div>`;
  if (myFood.myTopPriorityFoodsNames.length > 0) { // if top priority foods exist Ready Set Go message
    recommendRichFoodsText += topPriorityFoodsMessage;
  } else if (myFood.myTopPriorityFoodsNames.length <= 0) { //if no top priority foods congratulations message
    recommendRichFoodsText += `<p class =\"congratulations\">Congratulations, you are doing phenomenally well with your nutrients and don't need any extra help from top priority food suggestions! You are free to chose whatever food appeals most to you but you'll continue to get more helpful suggestions later.</p>`;
  }
  document.getElementById('recommendRichFoodsText').innerHTML = recommendRichFoodsText;
} // end of printGroceryListTopPriorityText1b
printGroceryListTopPriorityText1b();

const printGroceryListTopPriorityFoodGroupSelection = () => {
  if (myFood.myTopPriorityFoodsNames.length >= 10) {
    const topGreenFoodsNames = [];
    const topPurpleFoodsNames = [];
    const topRedFoodsNames = [];
    const topOrangeFoodsNames = [];
    const topYellowFoodsNames = [];
    const topVegetablesNames = [];
    const topHealthyFatsFoodsNames = [];
    const topLegumesFoodsNames = [];
    const topAnimalFoodsNames = [];
    myFood.myTopPriorityFoods.forEach(food => {
      if (food.category === "nuts and seeds" || food.category === "oils" || food.name.includes("avocado") || food.name.includes("olives")) {
        topHealthyFatsFoodsNames.push(food.name);
      } else if (food.category === "legumes") {
        topLegumesFoodsNames.push(food.name);
      } else if (food.category === "eggs" || food.category === "dairy") {
        topAnimalFoodsNames.push(food.name);
      } else if (food.colour === "green") {
        topGreenFoodsNames.push(food.name);
      } else if (food.colour === "purple") {
        topPurpleFoodsNames.push(food.name);
      } else if (food.colour === "red") {
        topRedFoodsNames.push(food.name);
      } else if (food.colour === "orange") {
        topOrangeFoodsNames.push(food.name);
      } else if (food.colour === "yellow") {
        topYellowFoodsNames.push(food.name);
      } else if (food.category === "vegetables") {
        if (!topGreenFoodsNames.includes(food.name) && !topPurpleFoodsNames.includes(food.name) && !topRedFoodsNames.includes(food.name) && !topOrangeFoodsNames.includes(food.name) && !topYellowFoodsNames.includes(food.name)) topVegetablesNames.push(food.name);
      }
    }); //end for Each
    let topPriorityMessage2 = `<h5>To make things easier you may prefer to choose from these categories</h5><p>As your nutrient deficiencies decrease in number you may see a stong bias towards particular food categories. This might change from week to week as certain nutrients remain borderline, triggering a food recommendation one week but not the next. However your "personal superfoods" will likely keep appearing week after week.</p><ul class =\"addMoreSpace\">`
    if (topGreenFoodsNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Green foods</span> : ${topGreenFoodsNames.join(", ")}</li>`
    }
    if (topPurpleFoodsNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Purple foods</span> : ${topPurpleFoodsNames.join(", ")}</li>`
    }
    if (topRedFoodsNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Red foods</span> : ${topRedFoodsNames.join(", ")}</li>`
    }
    if (topOrangeFoodsNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Orange foods</span> : ${topOrangeFoodsNames.join(", ")}</li>`
    }
    if (topYellowFoodsNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Yellow foods</span> : ${topYellowFoodsNames.join(", ")}</li>`
    }
    if (topVegetablesNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Non-colourful vegetables</span> : ${topVegetablesNames.join(", ")}</li>`
    }
    if (topHealthyFatsFoodsNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Healthy fats</span> : ${topHealthyFatsFoodsNames.join(", ")}</li>`
    }
    if (topLegumesFoodsNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Legumes</span> : ${topLegumesFoodsNames.join(", ")}</li>`
    }
    if (topAnimalFoodsNames.length > 0) {
      topPriorityMessage2 += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Eggs and Dairy</span> : ${topAnimalFoodsNames.join(", ")}</li>`
    }
    topPriorityMessage2 += ` </ul><p class =\"addSpace\"><em>Categories will be empty if there are no top priority foods in that category to select from.</em></p>`;
    document.getElementById('topPriorityFoodGroupSelection').innerHTML = topPriorityMessage2;
  } // end if greater than 10 top priority foods
} // end of printGroceryListTopPriorityFoodGroupSelection
printGroceryListTopPriorityFoodGroupSelection();


const printGroceryListTopPriorityText3And4 = () => {
  if (myFood.myTopPriorityFoods.length > 0) {
    let hide = "<p><span class = \"la-icon la la-low-vision\"></span><em>Remember that if you don't like one or many of the foods recommended then (if you are convinced that you could never ever like them) you can hide those foods from your \"My Foods\" list. Ask me how. </em></p><p id = \"moreSuggestionsLater\">Later on, you will see more food suggestions but these top priority ones deserve by far the most focus because they address the nutrients where your RDI was less than 80%.</p>"
    document.getElementById('hide').innerHTML = hide;
    let fast = `<h4>Hey, I'm super keen to get healthy real fast, I think I'll add everything all at once!"</h4><p>Please take off your superhero cape and stick to adding one or two at a time. It's important to be very intentional when adding novel foods to your diet, perhaps even requiring some creativity. Even if it resolves a deficiency, do not view the addition as a success unless you are enjoying the new food and it fits seamlessly into your diet! Don't give up and don't forget to keep trying! Give yourself kudos for trying even when you end up not liking the new food.</p>`;
    fastElement = document.getElementById('fast')
    fastElement.innerHTML = fast;
  }
} // end of printGroceryListTopPriorityText3And4
printGroceryListTopPriorityText3And4();

//------------------------------------------------------------------------------------------------------------------------------------

//GOAL EAT THE RAINBOW

const logWeeklyFoodColour = () => { //logs a message about food colours eaten
  let greenFoodsThisWeek = [];
  let greenFoodsSuggestionsThisWeek = [];
  let purpleFoodsThisWeek = [];
  let purpleFoodsSuggestionsThisWeek = [];
  let redFoodsThisWeek = [];
  let redFoodsSuggestionsThisWeek = [];
  let orangeFoodsThisWeek = [];
  let orangeFoodsSuggestionsThisWeek = [];
  let yellowFoodsThisWeek = [];
  let yellowFoodsSuggestionsThisWeek = [];
  myFood.myShoppingCartFoods.forEach(food => {
    if (food.colour === "green") {
      greenFoodsThisWeek.push(food.name);
    } else if (food.colour === "purple") {
      purpleFoodsThisWeek.push(food.name);
    } else if (food.colour === "red") {
      redFoodsThisWeek.push(food.name);
    } else if (food.colour === "orange") {
      orangeFoodsThisWeek.push(food.name);
    } else if (food.colour === "yellow") {
      yellowFoodsThisWeek.push(food.name);
    }
  }); //endsFor Each
  document.getElementById('greenFoods').textContent = greenFoodsThisWeek.length + " - " + greenFoodsThisWeek.join(", ");
  document.getElementById('purpleFoods').textContent = purpleFoodsThisWeek.length + " - " + purpleFoodsThisWeek.join(", ");
  document.getElementById('redFoods').textContent = redFoodsThisWeek.length + " - " + redFoodsThisWeek.join(", ");
  document.getElementById('orangeFoods').textContent = orangeFoodsThisWeek.length + " - " + orangeFoodsThisWeek.join(", ");
  document.getElementById('yellowFoods').textContent = yellowFoodsThisWeek.length + " - " + yellowFoodsThisWeek.join(", ");
  if (greenFoodsThisWeek.length > 5 && purpleFoodsThisWeek.length > 4 && redFoodsThisWeek.length > 4 && orangeFoodsThisWeek.length > 4 && yellowFoodsThisWeek.length > 3) {
    document.getElementById('rainbowCongrats').textContent = "Congratulations on eating the rainbow!";
  }
  myFood.myShowFoods.forEach(food => {
    if (food.colour === "green" && !greenFoodsThisWeek.includes(food.name)) {
      greenFoodsSuggestionsThisWeek.push(food.name);
    } else if (food.colour === "purple" && !purpleFoodsThisWeek.includes(food.name)) {
      purpleFoodsSuggestionsThisWeek.push(food.name);
    } else if (food.colour === "red" && !redFoodsThisWeek.includes(food.name)) {
      redFoodsSuggestionsThisWeek.push(food.name);
    } else if (food.colour === "orange" && !orangeFoodsThisWeek.includes(food.name)) {
      orangeFoodsSuggestionsThisWeek.push(food.name);
    } else if (food.colour === "yellow" && !yellowFoodsThisWeek.includes(food.name)) {
      yellowFoodsSuggestionsThisWeek.push(food.name);
    }
  }); //ends For Each
  document.getElementById('greenFoodsToTry').textContent = greenFoodsSuggestionsThisWeek.join(", ") + " and leafy greens."
  document.getElementById('purpleFoodsToTry').textContent = purpleFoodsSuggestionsThisWeek.join(", ") + ", figs, prunes, raisins and blackcurrants."
  document.getElementById('redFoodsToTry').textContent = redFoodsSuggestionsThisWeek.join(", ") + ", cranberries and red leaf lettuce."
  document.getElementById('orangeFoodsToTry').textContent = orangeFoodsSuggestionsThisWeek.join(", ") + ", apricots, melon, peaches, papaya and orange capsicum."
  document.getElementById('yellowFoodsToTry').textContent = yellowFoodsSuggestionsThisWeek.join(", ") + ", lemons and yellow capsicum."
} //ends logWeeklyFoodColour  
logWeeklyFoodColour();

//--------------------------------------------------------------------------------------  

//NEW FUNCTION TO LOG WEEKLY FOOD VARIETY

const logWeeklyFoodVariety = () => { //  logs a message about different types of foods eaten
  const processedFoodsWeek = [];
  const treatFoodsWeek = [];
  myFood.myShoppingCartFoods.forEach(food => {
    if (food.category === "processed") {
      processedFoodsWeek.push(food);
    } else if (food.category === "treat") {
      treatFoodsWeek.push(food);
    }
  }); // end for Each
  const fruitsNamesWeek = myFood.myFruitsWeek.map(food => food.name);
  const fruitsButAlsoFatsNamesWeek = myFood.myFruitsButAlsoFatsWeek.map(food => food.name);
  const vegetablesNamesWeek = myFood.myVegetablesWeek.map(food => food.name);
  const nutsAndSeedsNamesWeek = myFood.myNutsAndSeedsWeek.map(food => food.name)
  const legumesNamesWeek = myFood.myLegumesWeek.map(food => food.name);
  const herbsNamesWeek = myFood.myHerbsWeek.map(food => food.name)
  let fruitsList = "";
  fruitsNamesWeek.forEach(fruitName => {
    fruitsList += `<span class = \"la-icon la la-lemon\"></span>`
  }); // end for Each
  let fruitsButAlsoFatsList = "";
  fruitsButAlsoFatsNamesWeek.forEach(fruitName => {
    fruitsButAlsoFatsList += `<span class = \"la-icon la la-egg\"></span>`
  }); // end for Each
  let vegetablesList = "";
  vegetablesNamesWeek.forEach(vegetableName => {
    vegetablesList += `<span class = \"la-icon la la-carrot\"></span>`
  }); // end for Each
  let nutsList = "";
  nutsAndSeedsNamesWeek.forEach(nutName => {
    nutsList += `<span class = \"la-icon la la-brain\"></span>`
  }); // end for Each
  let legumesList = "";
  legumesNamesWeek.forEach(legumeName => {
    legumesList += `<span class = \"la-icon la la-hotdog\"></span>`
  }); // end for Each
  let herbsList = "";
  herbsNamesWeek.forEach(herbName => {
    herbsList += `<span class = \"la-icon la la-seedling\"></span>`
  }); // end for Each
  document.getElementById('fruitsList').innerHTML = fruitsList + "<p><span class =\"bold\">" + myFood.myFruitsWeek.length + " fruits</span> - " + fruitsNamesWeek.join(", ") + "</p>";
  document.getElementById('fruitsButAlsoFatsList').innerHTML = fruitsButAlsoFatsList + "<p><span class =\"bold\">" + myFood.myFruitsButAlsoFatsWeek.length + " fruits / healthy fats</span> - " + fruitsButAlsoFatsNamesWeek.join(", ") + "</p>";
  document.getElementById('vegetablesList').innerHTML = vegetablesList + "<p><span class =\"bold\">" + myFood.myVegetablesWeek.length + " vegetables</span> - " + vegetablesNamesWeek.join(", ") + "</p>";
  /*if (myFood.myNutsAndSeedsWeek.length > 0) {*/
  document.getElementById('nutsList').innerHTML = nutsList + "<p><span class =\"bold\">" + myFood.myNutsAndSeedsWeek.length + " nuts and seeds</span> - " + nutsAndSeedsNamesWeek.join(", ") + "</p>";
  /*}*/
  document.getElementById('legumesList').innerHTML = legumesList + "<p><span class =\"bold\">" + myFood.myLegumesWeek.length + " legumes</span> - " + legumesNamesWeek.join(", ") + "</p>";
  document.getElementById('herbsList').innerHTML = herbsList + "<p><span class =\"bold\">" + myFood.myHerbsWeek.length + " herbs</span> - " + herbsNamesWeek.join(", ") + "</p>";
  let differentPlantFoodsPerWeek = (myFood.myFruitsWeek.length + myFood.myVegetablesWeek.length + myFood.myNutsAndSeedsWeek.length + myFood.myLegumesWeek.length + myFood.myHerbsWeek.length);
  let differentPlants = `<em><p>There are <span class =\"bold\">${differentPlantFoodsPerWeek} different plant foods </span>on your grocery list.</p><p>Your grocery list is for ${numDaysOfGroceries} days.</p><p>You can reach expert level by eating 30 different plant foods a week.</p></em> `;
  if (numDaysOfGroceries >= 5 && numDaysOfGroceries <= 9) {
    let plantEatingLevel = "";
    if (differentPlantFoodsPerWeek < 10) {
      plantEatingLevel = "Keep trying to hit the beginner 'eat lots of different types of plants' target.";
    } else if (differentPlantFoodsPerWeek >= 10 && differentPlantFoodsPerWeek < 15) {
      plantEatingLevel = "This week your 'eat lots of different types of plant foods' level is beginner.";
    } else if (differentPlantFoodsPerWeek >= 15 && differentPlantFoodsPerWeek < 20) {
      plantEatingLevel = "This week your 'eat lots of different types of plant foods' level is intermediate.";
    } else if (differentPlantFoodsPerWeek >= 20 && differentPlantFoodsPerWeek < 25) {
      plantEatingLevel = "This week your 'eat lots of different types of plant foods' level is advanced intermediate.";
    } else if (differentPlantFoodsPerWeek >= 25 && differentPlantFoodsPerWeek < 30) {
      plantEatingLevel = "This week your 'eat lots of different types of plant foods' level is advanced.";
    } else if (differentPlantFoodsPerWeek >= 30) {
      plantEatingLevel = "This week you have reached expert level healthy eating, congratulations!";
    }
    document.getElementById('plantEatingLevel').textContent = plantEatingLevel;
  }
  document.getElementById('differentPlants').innerHTML = differentPlants;
} //endslogWeeklyFoodVariety
logWeeklyFoodVariety();

//SEASONAL PRODUCE

const writeSeasonalProduce = () => {
  let seasonalProduce = "";
  if (month === "March" || month === "April" || month === "May") {
    seasonalProduce += `<div class ="seasonalFruits"><h3>Fruits</h3><p>apple (aba, bonza, braeburn, cox's orange, pippins, fuji, gala, golden delicious, granny smith, jonagold, jonathon, mutso, pink lady, red delicious, snow, sundowner), avocado, blackberries, banana, fig, grapefruit, grapes, kiwifruit, lemon, lime, mandarin (imperial), orange (navel, valencia), papaya, passionfruit, peach, pear (beurre bosc, howell, josephine, packham, red sensation, williams), plum, raspberries, rhubarb, strawberries, cumquat, custard apples, feijoa, guava, mangosteen, persimmon, pomegranate, prickly pear, quince, rambutan, tamarillo</p></div><div class = "seasonalVegetables"><h3>Vegetables</h3><p>artichoke (jerusalem), asian greens (bok choy, choy sum, gai laan, wombok), avocado, beans (borlotti, butter or green), beetroot, brussels sprouts, cabbage, capsicum, carrot, cauliflower, celery, corn, cucumber, eggplant, fennel, leek, lettuce, mushrooms (field, pine or slippery jacks), onion, parsnip, potato, pumpkin, shallot, spring onion, silverbeet, spinach, squash, swede, sweet potato, tomato, turnip, zucchini, choko, daikon, okra, watercress, witlof</p></div><div class = "seasonalHerbs"><h3>Herbs</h3><p>basil, chervil, chilli, chives, coriander, dill, garlic, ginger, lime (kaffir leaves), lemongrass, mint, oregano, parsley, rosemary, sage, tarragon, thyme</p></div>`;
  }
  if (month === "June" || month === "July" || month === "August") {
    seasonalProduce += `<div class ="seasonalFruits"><h3>Fruits</h3><p>apple (bonza, braeburn, cox's orange, pippins, fuji, gala, golden delicious, granny smith, jonagold, jonathon, lady williams, mutso, pink lady, red delicious, snow, sundowner), avocado, cumquat, custard apple, feijoa, grapefruit, kiwifruit, lemon, lime, mandarin (ellendale, imperial, murcot), nashi, orange (blood, navel, seville), pear (beurre bosc, josephine, packham), persimmon, pineapple, quince</p></div><div class = "seasonalVegetables"><h3>Vegetables</h3><p>asian greens (bok choy, choy sum, gai laan, wombok), broccoli, broccolini, broad beans, brussels sprouts, cabbage, capsicum, carrot, cauliflower, celeriac, celery, choko, cucumber, eggplant, fennel, horeseradish, kale, kolrabu, leek, mushrooms, okra</p></div><div class = "seasonalHerbs"><h3>Herbs</h3><p>coriander, dill, ginger, mint, oregano, parsley, rosemary</p></div>`;
  }
  if (month === "September" || month === "October" || month === "November") {
    seasonalProduce += `<div class ="seasonalFruits"><h3>Fruits</h3><p>apple (lady william), avocado, banana, blueberries (start of November), cantaloupe, cherry, cumquat, grapefruit, honeydew, lemon, lime, loquat, lychee, mandarin (ellendale, imperial, murcot), mango, mulberries, orange (blood, seville, valencia), papaya, pepino, pineapple, rhubarb, strawberries, starfruit</p></div><div class = "seasonalVegetables"><h3>Vegetables</h3><p>artichoke (globe or jerusalem), asian greens (bok choy, choy sum, gai laan, wombok), asparagus, beans (broad beans or green), beetroot, broccoli, brussels sprouts, cabbage, carrot, cauliflower, celery, choko, corn, daikon, eggplant, fennel, lettuce, mushrooms, okra, onion, parsnip, peas, potato, pumpkin, spring onion</p></div><div class = "seasonalHerbs"><h3>Herbs</h3><p>basil, chervil, chilli, chives, dill, garlic, ginger, lime/kaffir (leaves), lemongrass, mint, oregano</p></div>`;
  }
  if (month === "December" || month === "January" || month === "February") {
    seasonalProduce += `<div class ="seasonalFruits"><h3>Fruits</h3><p>apple (gravenstein), apricot, avocado, banana, blackberries, blueberries, boysenberries, cantaloupe, herries, currants, figs, grapefruit, grapes, honeydew, lemon, loganberries, lychee, mango, mulberries, nectarine, orange (valencia), passionfruit, peach, peach, pear (barlett, william), plum</p></div><div class = "seasonalVegetables"><h3>Vegetables</h3><p>asparagus, beans (green or butter), beetroot, cabbage, capsicum, carrot, celery, corn, cucumber, daikon, eggplant, leek, lettuce, okra, onion, peas, snow peas, spring onion, sugar snap peas</p></div><div class = "seasonalHerbs"><h3>Herbs</h3><p>bsail, basil (thai), chrevil, chilli, chives, coriander, dill, garlic, ginger, lime/kafir (leaves), lemongrass, mint, mint (apple), mint (vietamese), oregano, parsley</p></div>`;
  }
  document.getElementById('season').textContent = season;
  document.getElementById('seasons').innerHTML = seasonalProduce;
} // end of writeSeasonalProduce
writeSeasonalProduce();

// FUNCTION TO LOG FREQUENT FOODS INFO

const createFontSizeListEnergy = (array) => {
  let listStringEnergy = "";
  array.forEach(food => {
    if (userName === "Karen") {
      food.fontSizeEnergy = (food.weeklyEnergy / numDaysOfGroceries / 5) + 10;
    } else if (userName === "Nici") {
      food.fontSizeEnergy = (food.weeklyEnergy / numDaysOfGroceries / 10) + 10;
    }
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringEnergy += "<span class = food" + array[i].fontSizeEnergy.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringEnergy += "<span class = food" + array[i].fontSizeEnergy.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  return listStringEnergy;
}

const createFontSizeListVol = (array) => {
  let listStringVol = "";
  array.forEach(food => {
    food.fontSizeVol = (food.weeklyVolume / numDaysOfGroceries * 8) + 10;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVol += "<span class = food" + array[i].fontSizeVol.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVol += "<span class = food" + array[i].fontSizeVol.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  return listStringVol;
}

const createFontSizeListPrice = (array) => {
  let listStringPrice = "";
  array.forEach(food => {
    if (userName === "Karen") {
      food.fontSizePrice = (food.weeklyPrice / numDaysOfGroceries * 15) + 10;
    } else if (userName === "Nici") {
      food.fontSizePrice = (food.weeklyPrice / numDaysOfGroceries * 7) + 10;
    }
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringPrice += "<span class = food" + array[i].fontSizePrice.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringPrice += "<span class = food" + array[i].fontSizePrice.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  return listStringPrice;
}

const generateWordCloudEnergy = () => {
  let wordCloudEnergy = createFontSizeListEnergy(myFood.myShoppingCartFoods);
  document.getElementById("wordCloudEnergy").innerHTML = wordCloudEnergy
}
generateWordCloudEnergy();

const generateWordCloudVol = () => {
  let wordCloudVol = createFontSizeListVol(myFood.myShoppingCartFoods);
  document.getElementById("wordCloudVol").innerHTML = wordCloudVol
}
generateWordCloudVol();

const generateWordCloudPrice = () => {
  let wordCloudPrice = createFontSizeListPrice(myFood.myShoppingCartFoods);
  document.getElementById("wordCloudPrice").innerHTML = wordCloudPrice
}
generateWordCloudPrice();

const toggleByEnergy = () => {
  let element2 = document.getElementById("wordCloudsVolumeContainer");
  let element3 = document.getElementById("wordCloudsPriceContainer");
  let button2 = document.getElementById("toggleVolume");
  let button3 = document.getElementById("toggleCost")
  let gridContainer = document.getElementById("wordClouds");
  if (gridContainer.style.gridTemplateColumns === "1fr") {
    element2.style.display = "";
    element3.style.display = "";
    button2.style.display = "";
    button3.style.display = "";
    gridContainer.style.gridTemplateColumns = "1fr 1fr 1fr";
  } else {
    element2.style.display = "none";
    element3.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";
    gridContainer.style.gridTemplateColumns = "1fr";
  }
}

const toggleByVolume = () => {
  let element1 = document.getElementById("wordCloudsEnergyContainer");
  let element3 = document.getElementById("wordCloudsPriceContainer");
  let button1 = document.getElementById("toggleEnergy");
  let button3 = document.getElementById("toggleCost")
  let gridContainer = document.getElementById("wordClouds");
  if (gridContainer.style.gridTemplateColumns === "1fr") {
    element1.style.display = "";
    element3.style.display = "";
    button1.style.display = "";
    button3.style.display = "";
    gridContainer.style.gridTemplateColumns = "1fr 1fr 1fr";
  } else {
    element1.style.display = "none";
    element3.style.display = "none";
    button1.style.display = "none";
    button3.style.display = "none";
    gridContainer.style.gridTemplateColumns = "1fr";
  }
}

const toggleByCost = () => {
  let element1 = document.getElementById("wordCloudsEnergyContainer");
  let element2 = document.getElementById("wordCloudsVolumeContainer");
  let button1 = document.getElementById("toggleEnergy");
  let button2 = document.getElementById("toggleVolume")
  let gridContainer = document.getElementById("wordClouds");
  if (gridContainer.style.gridTemplateColumns === "1fr") {
    element1.style.display = "";
    element2.style.display = "";
    button1.style.display = "";
    button2.style.display = "";
    gridContainer.style.gridTemplateColumns = "1fr 1fr 1fr";
  } else {
    element1.style.display = "none";
    element2.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    gridContainer.style.gridTemplateColumns = "1fr";
  }
}

const generateFrequentFoodsText = () => {
  nutrients.veryDeficientNutrientsNamesArrayNoSodium = nutrients.veryDeficientNutrientsNamesArray.filter(nutrient => nutrient !== "sodium");
  nutrients.veryDeficientNutrientsNamesArrayNoSodium = endListWith(nutrients.veryDeficientNutrientsNamesArrayNoSodium, 'or');
  nutrients.deficientNutrientsNamesArrayNoSodium = nutrients.deficientNutrientsNamesArray.filter(nutrient => nutrient !== "sodium");
  nutrients.deficientNutrientsNamesArrayNoSodium = endListWith(nutrients.deficientNutrientsNamesArrayNoSodium, 'or');
  nutrients.borderlineNutrientsNamesArray = endListWith(nutrients.borderlineNutrientsNamesArray, 'or');
  nutrients.lowerNutrientsNamesArray = endListWith(nutrients.lowerNutrientsNamesArray, 'or');
  let mostEnergyFoods = "<ul>";
  if (myFood.myMonopolyFoodsNames.length > 0) {
    mostEnergyFoods += `<li>You are eating on average over 300 calories a day (over ${(300 / averageEnergy * 100).toFixed(0)}% of your diet) of each of the following foods - <em class = \"bold\">${myFood.myMonopolyFoodsNames.join(", ")}.</em></li>`;
  }
  if (myFood.myVeryFrequentFoodsNames.length > 0) {
    mostEnergyFoods += `<li>You are eating on average 200 - 300 calories a day (${(200 / averageEnergy * 100).toFixed(0)}-${(300 / averageEnergy * 100).toFixed(0)}% of your diet) of each of the following foods - <em class = \"bold\">${myFood.myVeryFrequentFoodsNames.join(", ")}.</em></li>`;
  }
  if (myFood.myFrequentFoodsNames.length > 0) {
    mostEnergyFoods += `<li>You are eating on average 100 - 200 calories a day (${(100 / averageEnergy * 100).toFixed(0)}-${(200 / averageEnergy * 100).toFixed(0)} % of your diet) of each of the following foods - <em class = \"bold\">${myFood.myFrequentFoodsNames.join(", ")}.</em></li>`;
  }
  mostEnergyFoods += `<li>You are eating on average 50 - 100 calories a day (${(50 / averageEnergy * 100).toFixed(0)}-${(100 / averageEnergy * 100).toFixed(0)} % of your diet) of each of the following foods - <em class = \"bold\">${myFood.myContributoryFoodsNames.join(", ")}.</em></li>`;
  mostEnergyFoods += `</ul>`
  let commonTop = myFood.myCommonFoodsNames.filter(food => myFood.myTopPriorityFoodsNames.includes(food));
  commonTop = endListWith(commonTop, 'and');
  let commonRecommended = myFood.myCommonFoodsNames.filter(food => myFood.myRecommendedFoodsNames.includes(food));
  commonRecommended = endListWith(commonRecommended, 'and');
  let commonUseful = myFood.myCommonFoodsNames.filter(food => myFood.myUsefulFoodsNames.includes(food));
  commonUseful = endListWith(commonUseful, 'and');
  mostEnergyFoods += `<h3>How do the foods you are already eating more of rate?</h3><ul><li><span class =\"bold \">Top priority foods</span> are high in very deficient nutrients`;
  if (nutrients.veryDeficientNutrientsNamesArrayNoSodium.length > 0) {
    mostEnergyFoods += ` - ${nutrients.veryDeficientNutrientsNamesArrayNoSodium}`;
  }
  mostEnergyFoods += ` or deficient nutrients`;
  if (nutrients.deficientNutrientsNamesArrayNoSodium.length) {
    mostEnergyFoods += ` - ${nutrients.deficientNutrientsNamesArrayNoSodium}.`
  }
  if (commonTop.length > 0) {
    mostEnergyFoods += ` This grocery shop your top priority foods are <span class = \"bold\"><em>${commonTop}.</em></span></li>`;
  } else if (commonTop.length === 0) {
    mostEnergyFoods += ` This grocery shop you have no top priority foods.</li>`;
  }
  if (nutrients.borderlineNutrientsNamesArray.length > 0) { // excludes sodium
    mostEnergyFoods += `<li><span class =\"bold\">Highly recommended foods</span> are high in ${nutrients.borderlineNutrientsNamesArray}. They may also be included in this group if they are somewhat high in the top priority nutrients but there are many better food sources available for that nutrient.`
  } else {
    mostEnergyFoods += `<li>`
  }
  if (commonRecommended.length > 0) {
    mostEnergyFoods += ` This grocery shop your highly recommended foods are <span class = \"bold\"><em>${commonRecommended}.</em></span></li>`;
  } else {
    mostEnergyFoods += ` This grocery shop you have no highly recommended foods.</li>`
  }
  if (nutrients.lowerNutrientsNamesArray.length > 0) { // excludes sodium and choline
    mostEnergyFoods += `<li><span class =\"bold\">Helpful foods</span> are high in ${nutrients.lowerNutrientsNamesArray}. Additionally they haven't already been identified as top priority or recommended foods for any nutrients mentioned above.`
  }
  if (commonUseful.length > 0) {
    mostEnergyFoods += ` This grocery shop your helpful foods are  <span class = \"bold\"><em>${commonUseful}.</em></span></li>`;
  } else {
    mostEnergyFoods += ` This grocery shop you have no helpful foods.</li>`
  }
  mostEnergyFoods += `</ul>`
  notMyCommonFoods = myFood.myShoppingCartFoods.filter(food => !myFood.myCommonFoods.includes(food));
  notMyCommonFoodsNames = notMyCommonFoods.map(food => food.name);
  notMyCommonFoodsNames = endListWith(notMyCommonFoodsNames, 'and');
  notCommonTop = notMyCommonFoods.filter(food => food.topPriority === true);
  notCommonRecommended = notMyCommonFoods.filter(food => food.recommended === true && food.topPriority === false);
  notCommonHelpful = notMyCommonFoods.filter(food => food.useful === true && food.topPriority === false && food.recommended === false);
  notCommonTopNames = notCommonTop.map(food => food.name);
  notCommonTopNames = notCommonTopNames = endListWith(notCommonTopNames, 'and');
  notCommonRecommendedNames = notCommonRecommended.map(food => food.name);
  notCommonRecommendedNames = endListWith(notCommonRecommendedNames, 'and');
  notCommonHelpfulNames = notCommonHelpful.map(food => food.name);
  notCommonHelpfulNames = endListWith(notCommonHelpfulNames, 'and');
  mostEnergyFoods += `<p>Foods that contribute very little overall energy to your diet (less than 50 cal a day) aren't able to influence your nutrients to the same extent; though may they have profound value in contributing to the health benefits and variety of your diet.</p>`
  mostEnergyFoods += `<ul><li>You ate less than an average of 50 calories a day of - <em>${notMyCommonFoodsNames}.</em></li>`;
  if (notCommonTop.length > 0) {
    mostEnergyFoods += `<li>Some of these foods are <span class =\"bold\">top priority foods</span> - <span class = \"bold\"><em>${notCommonTopNames}.</em></span> They would be excellent foods to eat a little more of. </li>`;
  }
  if (notCommonRecommended.length > 0) {
    mostEnergyFoods += `<li>Some of these foods are <span class =\"bold\">highly recommended foods</span> - <span class = \"bold\"><em>${notCommonRecommendedNames}.</em></span></li><li><em>Try to continue to include these top priority or highly recommended foods in every grocery shop.</em></li>`;
  }
  if (notCommonHelpful.length < 1) {
    mostEnergyFoods += `</ul>`;
  }
  if (notCommonHelpfulNames.length > 0) {
    mostEnergyFoods += `<li>Some of these foods are <span class =\"bold\">helpful foods</span> - <span class = \"bold\"><em>${notCommonHelpfulNames}.</em></span></li></ul>`;
  } else if (notCommonRecommended.length > 0) {
    mostEnergyFoods += `</ul>`;
  }
  mostEnergyFoods += `<p>You can lessen the need for your favourite foods to help towards meeting your low nutrients by simply choosing to eat a little more of your "personal superfoods" (the ones that appear more than once in your top priority foods lists).</p><p>The nutrient density of a food is not equivalent to how healthy it is. Only your diet as a whole needs to be nutrient dense and even then once you have met recommended intakes more is not better. For example the simpliest way to meet your selenium needs would be to eat one brazil nut a day. Then it becomes unimportant how much selenium any of your other foods contain. </p><p>If you are having a lot of trouble resolving nutrient deficiencies you could experiment with slightly reducing the quantity of some of your favourite foods. Consider it entirely optional if you are already eating a very wide variety of plant foods. The most important thing by far is that you enjoy your food and that it makes you feel well. If you don't enjoy the change, remember it isn't sensible to continue eating foods you don't like.</p>`;
  document.getElementById('mostEnergyFoods').innerHTML = mostEnergyFoods;
} // end of generateFrequentFoodsText
generateFrequentFoodsText();

// FUNCTION TO LOG RECOMMENDED FOODS

const generateMoreFoodRecommendations = () => {
  let moreNewFoods = "";
  if (nutrients.borderlineNutrientsArray.length > 0) {
    myFood.myShowFoods.forEach(food => {
      if (myFood.myRecommendedFoods.includes(food) && !myFood.myShoppingCartFoods.includes(food)) {
        myFood.myNovelFoodChoices.push(food);
        myFood.myNovelFoodChoicesNames.push(food.name);
      }
    }); // end for Each
    moreNewFoods += `<p>Here are some more <span class = \"bold\">highly recommended foods</span> that weren't included in this grocery list. Highly recommended foods are high in <span class =\"bold\">${nutrients.borderlineNutrientsNamesArray}</span>.`;
    if (nutrients.veryDeficientNutrientsNamesArrayNoSodium.length > 0) {
      moreNewFoods += ` They may also be somewhat high in your very deficent nutrients - <span class =\"bold\">${nutrients.veryDeficientNutrientsNamesArrayNoSodium}</span>`;
    }
    if (nutrients.veryDeficientNutrientsNamesArrayNoSodium.length > 0 && nutrients.deficientNutrientsNamesArrayNoSodium.length > 0) {
      moreNewFoods += ` or deficient nutrients - <span class =\"bold\">${nutrients.deficientNutrientsNamesArrayNoSodium}</span>.</p>`;
    }
    if (nutrients.veryDeficientNutrientsNamesArrayNoSodium.length = 0 && nutrients.deficientNutrientsNamesArrayNoSodium.length > 0) {
      moreNewFoods += `<p>They may also be somewhat high in your deficient nutrients - ${nutrients.deficientNutrientsNamesArrayNoSodium}.</p>`;
    }
    const recommendedGreenFoodsNames = [];
    const recommendedPurpleFoodsNames = [];
    const recommendedRedFoodsNames = [];
    const recommendedOrangeFoodsNames = [];
    const recommendedYellowFoodsNames = [];
    const recommendedVegetablesNames = [];
    const recommendedHealthyFatsFoodsNames = [];
    const recommendedLegumesFoodsNames = [];
    const recommendedAnimalFoodsNames = [];
    myFood.myNovelFoodChoices.forEach(food => {
      if (food.category === "nuts and seeds" || food.category === "oils" || food.name.includes("avocado") || food.name.includes("olives")) {
        recommendedHealthyFatsFoodsNames.push(food.name);
      } else if (food.colour === "green") {
        recommendedGreenFoodsNames.push(food.name);
      } else if (food.colour === "purple") {
        recommendedPurpleFoodsNames.push(food.name);
      } else if (food.colour === "red") {
        recommendedRedFoodsNames.push(food.name);
      } else if (food.colour === "orange") {
        recommendedOrangeFoodsNames.push(food.name);
      } else if (food.colour === "yellow") {
        recommendedYellowFoodsNames.push(food.name);
      } else if (food.category === "vegetables") {
        if (!recommendedGreenFoodsNames.includes(food.name) && !recommendedPurpleFoodsNames.includes(food.name) && !recommendedRedFoodsNames.includes(food.name) && !recommendedOrangeFoodsNames.includes(food.name) && !recommendedYellowFoodsNames.includes(food.name)) recommendedVegetablesNames.push(food.name);
      } else if (food.category === "legumes") {
        recommendedLegumesFoodsNames.push(food.name);
      } else if (food.category === "eggs" || food.category === "dairy") {
        recommendedAnimalFoodsNames.push(food.name);
      }
    }); //end for Each
    moreNewFoods += `<h4>To make things simplier you might like to select across these categories</h4><ul>`;
    if (recommendedGreenFoodsNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Green foods</span> : ${recommendedGreenFoodsNames.join(", ")}</li>`;
    }
    if (recommendedPurpleFoodsNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Purple foods</span> : ${recommendedPurpleFoodsNames.join(", ")}</li>`;
    }
    if (recommendedRedFoodsNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Red foods</span> : ${recommendedRedFoodsNames.join(", ")}</li>`;
    }
    if (recommendedOrangeFoodsNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Orange foods</span> : ${recommendedOrangeFoodsNames.join(", ")} </li>`;
    }
    if (recommendedYellowFoodsNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Yellow foods</span> : ${recommendedYellowFoodsNames.join(", ")}</li>`;
    }
    if (recommendedVegetablesNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Non-colourful vegetables</span> : ${recommendedVegetablesNames.join(", ")}</li>`;
    }
    if (recommendedHealthyFatsFoodsNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Healthy fats</span> : ${recommendedHealthyFatsFoodsNames.join(", ")}</li>`;
    }
    if (recommendedLegumesFoodsNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Legumes</span> : ${recommendedLegumesFoodsNames.join(", ")}</li>`;
    }
    if (recommendedAnimalFoodsNames.length > 0) {
      moreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Eggs and Dairy</span> : ${recommendedAnimalFoodsNames.join(", ")}</li>`;
    }
    if (nutrients.veryDeficientNutrientsNamesArray.length < 1 && nutrients.deficientNutrientsNamesArray.length < 1) {
      moreNewFoods += `</ul>`;
    } else if (nutrients.veryDeficientNutrientsNamesArray.length > 0) {
      moreNewFoods += `</ul><p>Most importantly, any <span class = \"bold\">top priority foods</span>, are the foods that are great to eat at least once every week or fortnight.<span class =\"bold \"> Top priority foods</span> are high in <span class =\"bold \">${nutrients.veryDeficientNutrientsNamesArray.join(" or ")}</span>`;
      if (nutrients.deficientNutrientsNamesArray.length > 0) {
        moreNewFoods += ` or <span class = \"bold\">${nutrients.deficientNutrientsNamesArray.join(" or ")}</span>.</p>`;
      } else if (nutrients.deficientNutrientsNamesArray.length < 1) {
        moreNewFoods += `. </p>`;
      }
    }
    if (nutrients.veryDeficientNutrientsNamesArray.length < 1 && nutrients.deficientNutrientsNamesArray.length > 0) {
      moreNewFoods += `</ul><p>Most importantly, any <span class = \"bold\">top priority foods</span>, are the foods that are great to eat at least once every week or fortnight.<span class =\"bold \"> Top priority foods</span> are high in <span class =\"bold \"><span class = \"bold\">${nutrients.deficientNutrientsNamesArray.join(" or ")}</span>. </p>`;
      if (myFood.myTopPriorityFoodsNames.length > 0) {
        moreNewFoods += `<p>Most importantly, any <span class = \"bold\">top priority foods</span>, are the foods that are great to eat at least once every week or fortnight.</p>`;
      }
    }
  } // end if borderline nutrients > 0
  let remindTopPriority = "";
  if (myFood.myTopPriorityFoodsNames.length > 0) {
    remindTopPriority += `<div  id = \"remindImportantFoods\"><p>There are ${myFood.myTopPriorityFoodsNames.length} <span class = \"bold\">"top priority"</span> food suggestions for your next grocery list. You'll likely be eating some of these already. Choose one or two novel foods from this (alphabetical) list to add to your next shop - </p><p class = \"bold addSpace\"><span class = \"la-icon la la-seedling\"></span>${myFood.myTopPriorityFoodsNames.join(", ")}</p><p class =\"addSpace\"><em>Keep on eating plenty of the ones you already like!</em><p></div>`;
  } else if (myFood.myTopPriorityFoodsNames.length < 1) {
    remindTopPriority += `<div  id =\"remindImportantFoods\"><p id = "remindImportantFoodsCongrats"><span class = \"bold\">Congratulations</span>, you are eating a very nutrient dense diet so don't need any help discovering your top priority foods!</p><p>As the nutrient density of your diet improves the previous lists can begin to look very sparse. </p></div>`
  }
  document.getElementById('remindTopPriority').innerHTML = remindTopPriority;
  document.getElementById('moreNewFoods').innerHTML = moreNewFoods;
} // end of generateMoreFoodRecommendations 
generateMoreFoodRecommendations();

const generateEvenMoreFoodRecommendations = () => {
  myFood.myNovelFoodChoices = []; // reset to empty array
  myFood.myShowFoods.forEach(food => {
    if (myFood.myUsefulFoods.includes(food) && !myFood.myShoppingCartFoods.includes(food)) {
      myFood.myNovelFoodChoices.push(food);
      myFood.myNovelFoodChoicesNames.push(food.name);
    }
  }); // end for Each
  let evenMoreNewFoods = "";
  evenMoreNewFoods += `<p>Here are some more personalised nutrient rich foods you may like that weren't included in this grocery list. Especially once you are hitting (or are close to hitting) most of your nutrient targets these foods will be very helpful inclusions in a nutrient rich diet. Although they haven't shown themselves as superstars in your recommended food lists they will work quietly "behind the scenes" to ensure your diet stays nutrient rich. Consider them your "helper" foods. <span class =\"bold\"> Helpful</span> foods are high in <span class =\"bold\">${nutrients.lowerNutrientsNamesArray}</span>.</p>`;
  const usefulGreenFoodsNames = [];
  const usefulPurpleFoodsNames = [];
  const usefulRedFoodsNames = [];
  const usefulOrangeFoodsNames = [];
  const usefulYellowFoodsNames = [];
  const usefulVegetablesNames = [];
  const usefulHealthyFatsFoodsNames = [];
  const usefulLegumesFoodsNames = [];
  const usefulAnimalFoodsNames = [];
  myFood.myNovelFoodChoices.forEach(food => {
    if (food.category === "nuts and seeds" || food.category === "oils" || food.name.includes("avocado") || food.name.includes("olives")) {
      usefulHealthyFatsFoodsNames.push(food.name);
    } else if (food.colour === "green") {
      usefulGreenFoodsNames.push(food.name);
    } else if (food.colour === "purple") {
      usefulPurpleFoodsNames.push(food.name);
    } else if (food.colour === "red") {
      usefulRedFoodsNames.push(food.name);
    } else if (food.colour === "orange") {
      usefulOrangeFoodsNames.push(food.name);
    } else if (food.colour === "yellow") {
      usefulYellowFoodsNames.push(food.name);
    } else if (food.category === "vegetables") {
      if (!usefulGreenFoodsNames.includes(food.name) && !usefulPurpleFoodsNames.includes(food.name) && !usefulRedFoodsNames.includes(food.name) && !usefulOrangeFoodsNames.includes(food.name) && !usefulYellowFoodsNames.includes(food.name)) usefulVegetablesNames.push(food.name);
    } else if (food.category === "legumes") {
      usefulLegumesFoodsNames.push(food.name);
    } else if (food.category === "eggs" || food.category === "dairy") {
      usefulAnimalFoodsNames.push(food.name);
    }
  }); //end for Each
  evenMoreNewFoods += `<h4>To make things simplier you might like to select across these categories</h4><ul>`;
  if (usefulGreenFoodsNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Green foods</span> : ${usefulGreenFoodsNames.join(", ")}</li>`;
  }
  if (usefulPurpleFoodsNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Purple foods</span> : ${usefulPurpleFoodsNames.join(", ")}</li>`;
  }
  if (usefulRedFoodsNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Red foods</span> : ${usefulRedFoodsNames.join(", ")}</li>`;
  }
  if (usefulOrangeFoodsNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Orange foods</span> : ${usefulOrangeFoodsNames.join(", ")}</li>`;
  }
  if (usefulYellowFoodsNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Yellow foods</span> : ${usefulYellowFoodsNames.join(", ")}</li>`;
  }
  if (usefulVegetablesNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Non-colourful vegetables</span> : ${usefulVegetablesNames.join(", ")}</li>`;
  }
  if (usefulHealthyFatsFoodsNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Healthy fats</span> : ${usefulHealthyFatsFoodsNames.join(", ")}</li>`;
  }
  if (usefulLegumesFoodsNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Legumes</span> : ${usefulLegumesFoodsNames.join(", ")}</li>`;
  }
  if (usefulAnimalFoodsNames.length > 0) {
    evenMoreNewFoods += `<li class = \"foodGroup\"><span class = \"la-icon la la-seedling\"></span><span class =\"bold\">Eggs and Dairy</span> : ${usefulAnimalFoodsNames.join(", ")}</li>`;
  }
  evenMoreNewFoods += `</ul><p class = \"mask\"><span class = \"la-icon la la-low-vision\"></span><em>Remember that if you don't like one or many of the foods recommended then (if you are convinced that you could never ever like them) you can hide those foods from your "My Foods" list. Ask me how! </em></p>`;
  document.getElementById('evenMoreNewFoods').innerHTML = evenMoreNewFoods;
} //end of generateEvenMoreFoodRecommendations 
generateEvenMoreFoodRecommendations();


// PRICE OF MY FOODS

const writePriceOfMyShoppingCartFoodsText = () => { // requires myFood.myShowFoods
  let priceOfFoodsArray = [];
  let priceOfFoodsNamesArray1 = [];
  let priceOfFoodsNamesArray2 = [];
  let priceOfFoodsList1 = `<table><thead><th class = \"priceFoods\">food</th><th>cost per 100 kcal</th></thead class = \"priceFoods\"><tbody>`;
  let priceOfFoodsList2 = `<table><thead><th class = \"priceFoods\">food</th><th>cost per 100 kcal</th></thead class = \"priceFoods\"><tbody>`;
  myFood.myShoppingCartFoods.forEach(food => {
    food.volume = 1;
    food.newPrice = (100 / food.energy) * food.price;
    priceOfFoodsArray.push(food); // to create list of objects for sorting
    priceOfFoodsArray.sort((a, b) => b.newPrice - a.newPrice); //sort descending objects
  }); //end for Each
  priceOfFoodsArray.forEach(food => {
    if (priceOfFoodsNamesArray1.length < (0.5 * priceOfFoodsArray.length)) {
      priceOfFoodsNamesArray1.push(food.name); //to create descending list of names
      priceOfFoodsList1 += `<tr><td>${food.nameWithIcon}</td><td>$${food.newPrice.toFixed(2)}</td></tr>`
    } else {
      priceOfFoodsNamesArray2.push(food.name); //to create descending list of names
      priceOfFoodsList2 += `<tr><td>${food.nameWithIcon}</td><td>$${food.newPrice.toFixed(2)}</td></tr>`
    }
  }); //end for each
  priceOfFoodsList1 += "</tbody></table>";
  priceOfFoodsList2 += "</tbody></table>"
  document.getElementById('priceOfMyFoods1').innerHTML = priceOfFoodsList1;
  document.getElementById('priceOfMyFoods2').innerHTML = priceOfFoodsList2;
} // end of writePriceOfMyShoppingCartFoodsText
writePriceOfMyShoppingCartFoodsText();

const findCheapestVeges = () => {
  let priceOfVegetables = [];
  let cheapestVegetables = [];
  let moderatePriceVegetables = [];
  let expensiveVegetables = [];
  myFood.myShowFoods.forEach(food => {
    if (food.category === "vegetables") {
      food.volume = 1;
      food.newPrice = 100 / food.energy * food.price;
      if (food.newPrice > 0) {
        priceOfVegetables.push(food); // to create list of objects for sorting
      }
      priceOfVegetables.sort((a, b) => a.newPrice - b.newPrice); //sort ascending objects
    }
  }); //end for Each
  priceOfVegetables.forEach(vegetable => {
    if (cheapestVegetables.length <= priceOfVegetables.length / 3) {
      cheapestVegetables.push(vegetable.name)
    } else if (moderatePriceVegetables.length <= priceOfVegetables.length / 3) {
      moderatePriceVegetables.push(vegetable.name)
    } else {
      expensiveVegetables.push(vegetable.name)
    }
  }); // end for Each
  let cheapestVegetablesList = `${cheapestVegetables.join(', ')}`;
  let moderatePriceVegetablesList = `${moderatePriceVegetables.join(', ')}`;
  let expensiveVegetablesList = `${expensiveVegetables.join(", ")}`;
  document.getElementById("cheapestVegetables").textContent = cheapestVegetablesList;
  document.getElementById("moderatePriceVegetables").textContent = moderatePriceVegetablesList;
  document.getElementById("expensiveVegetables").textContent = expensiveVegetablesList;
} // end of findCheapestVeges 
findCheapestVeges();


// BACKGROUND INFORMATION

const writePriceOfFoodsText = () => { // requires myFood.myShowFoods
  let priceOfFoodsArray = [];
  let priceOfFoodsNamesArray = [];
  let priceOfFoodsList = "";
  myFood.myShowFoods.forEach(food => {
    food.volume = 1;
    food.newPrice = 100 / food.energy * food.price;
    priceOfFoodsArray.push(food); // to create list of objects for sorting
    priceOfFoodsArray.sort((a, b) => b.newPrice - a.newPrice); //sort descending objects
  }); //end for Each
  priceOfFoodsArray.forEach(food => {
    priceOfFoodsNamesArray.push(food.name); //to create descending list of names
    priceOfFoodsList += `\n${food.name}: $${food.newPrice.toFixed(2)}`
  }); //end for each
  const priceOfMyFoodsHeading = `Price of My Foods per 100kcal`;
  console.log(`\n\n\n${priceOfMyFoodsHeading}`);
  console.log(`${priceOfFoodsList}`)
}

const writeEnergyOfFoodsText = () => { // requires myFood.myShowFoods
  energyOfFoodsArray = [];
  energyOfFoodsNamesArray = [];
  energyOfFoodsList = "";
  myFood.myShowFoods.forEach(food => {
    food.volume = 1;
    energyOfFoodsArray.push(food); // to create list of objects for sorting
    energyOfFoodsArray.sort((a, b) => b.energy - a.energy); //sort descending objects
  }); // end for Each
  energyOfFoodsArray.forEach(food => {
    energyOfFoodsNamesArray.push(food.name); //to create descending list of names
    energyOfFoodsList += `\n${food.name}: ${food.energy.toFixed(0)} kcal for $${food.price.toFixed(2)}`;
  }); // end for each 
  const budgetTipForEnergyOfFoods = `This is a great list to compare the price of foods because items that are significantly different in price to surrounding items really stand out`
  console.log(`\n\n\nEnergy Content of 100g of My Foods`);
  console.log(`${energyOfFoodsList}`)
  if (budgetTips === true) console.log(`\n${budgetTipForEnergyOfFoods}`)
}

const togglePriceOfFoodsOnOff = () => {
  let element = document.getElementById("priceOfMyFoodsContentContainer");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
} // end of togglePriceOfFoodsOnOff 



const writeRichFoodsMicronutrientsText = () => {
  nutrients.micronutrients.forEach(micronutrient => {
    console.log(`\n\n${micronutrient.heading1}  \n${micronutrient.megaRichFoodsHeading} \n${micronutrient.megaRichFoodsList}\n${micronutrient.ultraRichFoodsHeading} \n${micronutrient.ultraRichFoodsList} \n${micronutrient.richFoodsHeading} \n${micronutrient.richFoodsList}\n${micronutrient.richFoodsListWithPercentAndPrice}`);
  }); // end for Each
}


const generateMonoPolySatArrays = () => { // requires myFood.myShowFoods
  const monoPolySatRatioFoodsHigh = [];
  const monoPolySatRatioFoodsHeartHealthy = [];
  let listStringFatRatio = "";
  /*let listStringFatRatio2 = "";
  listStringFatRatio2 = "<h4>Saturated Fat Content and Ratio of Saturated to Mono and Polyunsaturated fats per 100g</h4><p>It is worth noting that for some of these foods 15g is a typical serving size</p>"*/
  myFood.myShowFoods.forEach(food => {
    if (food.satFat > 0.35 && typeof food.satFat === "number" && typeof food.monosatFat === "number" && typeof food.polyunsatFat === "number" && food.monosatFat > 0 && food.polyunsatFat > 0) {
      calculateMonoPolySatRatio(food);
      /*listStringFatRatio2 += `<table><tr><td>${food.name}</td><td>Saturated : ${food.satFat}g</td><td>Monosaturated : ${food.monosatFat}g</td><td>Polyunsaturated : ${food.polyunsatFat}g</td></tr></table>`;*/
      if (food.monoPolySatFatRatio >= 0.33) monoPolySatRatioFoodsHigh.push(food);
      if (food.monoPolySatFatRatio < 0.33) monoPolySatRatioFoodsHeartHealthy.push(food)
    } //end if
  }); //end for Each 
  monoPolySatRatioFoodsHeartHealthy.sort((a, b) => a.monoPolySatFatRatio - b.monoPolySatFatRatio);
  listStringFatRatio += `<table><thead><tr><th>Food</th><th>Sat : Mono + Poly</th><th>Saturated fat<br>(g per 100g food)</th></thead><tbody>`;
  monoPolySatRatioFoodsHeartHealthy.forEach(food => listStringFatRatio += `<tr><td>${food.name}</td><td>${food.monoPolySatFatRatio.toFixed(2)}</td><td>${food.satFat}</td></tr>`);
  listStringFatRatio += `</tbody></table>`;
  monoPolySatRatioFoodsHigh.sort((a, b) => a.monoPolySatFatRatio - b.monoPolySatFatRatio);
  listStringFatRatio += `<h3>Less Heart Healthy Fat Ratios</h3><table id = \"lessHealthyTable\"><thead><tr><th>Food</th><th>Sat : Mono + Poly</th><th>Saturated fat<br>(g per 100g food)</th></thead><tbody>`;
  monoPolySatRatioFoodsHigh.forEach(food => listStringFatRatio += `<tr><td>${food.name}</td><td>${food.monoPolySatFatRatio.toFixed(2)}</td><td>${food.satFat}</td></tr>`);
  listStringFatRatio += `</tbody></table>`;
  document.getElementById("fatRatios").innerHTML = listStringFatRatio;
} //close generateMonoPolySatArraysfunction 
generateMonoPolySatArrays();


// NUTRIENT RICH FOODS

const createFontSizeListVitA = (array) => {
  let listStringVitA = "";
  if (userName) {
    listStringVitA += `<p class = \"showAverage\">Your vitamin A was ${vitaminA.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitA = (food.vitaminA / food.energy * 3) + 6; // scaled by 1/4
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitA += "<span class = food" + array[i].fontSizeVitA.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitA += "<span class = food" + array[i].fontSizeVitA.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminAFoods").innerHTML = listStringVitA;
}
createFontSizeListVitA(myFood.foods);

const displayVitaminA = () => {
  let element = document.getElementById("vitaminAFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("vitaminAHeader").addEventListener("click", displayVitaminA);


const createFontSizeListVitB1 = (array) => {
  let listStringVitB1 = "";
  if (userName) {
    listStringVitB1 += `<p class = \"showAverage\">Your vitamin B1 was ${vitaminB1.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitB1 = (food.vitaminB1 / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitB1 += "<span class = food" + array[i].fontSizeVitB1.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitB1 += "<span class = food" + array[i].fontSizeVitB1.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminB1Foods").innerHTML = listStringVitB1;
}

createFontSizeListVitB1(myFood.foods);

const displayVitaminB1 = () => {
  let element = document.getElementById("vitaminB1Foods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("vitaminB1Header").addEventListener("click", displayVitaminB1);

const createFontSizeListVitB2 = (array) => {
  let listStringVitB2 = "";
  if (userName) {
    listStringVitB2 += `<p class = \"showAverage\">Your vitamin B2 was ${vitaminB2.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitB2 = (food.vitaminB2 / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitB2 += "<span class = food" + array[i].fontSizeVitB2.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitB2 += "<span class = food" + array[i].fontSizeVitB2.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminB2Foods").innerHTML = listStringVitB2;
}
createFontSizeListVitB2(myFood.foods);

const displayVitaminB2 = () => {
  let element = document.getElementById("vitaminB2Foods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("vitaminB2Header").addEventListener("click", displayVitaminB2);

const createFontSizeListVitB3 = (array) => {
  let listStringVitB3 = "";
  if (userName) {
    listStringVitB3 += `<p class = \"showAverage\">Your vitamin B3 was ${vitaminB3.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitB3 = (food.vitaminB3 / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitB3 += "<span class = food" + array[i].fontSizeVitB3.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitB3 += "<span class = food" + array[i].fontSizeVitB3.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminB3Foods").innerHTML = listStringVitB3;
}
createFontSizeListVitB3(myFood.foods);

const displayVitaminB3 = () => {
  let element = document.getElementById("vitaminB3Foods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("vitaminB3Header").addEventListener("click", displayVitaminB3);

const createFontSizeListVitB5 = (array) => {
  let listStringVitB5 = "";
  if (userName) {
    listStringVitB5 += `<p class = \"showAverage\">Your vitamin B5 was ${vitaminB5.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitB5 = (food.vitaminB5 / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitB5 += "<span class = food" + array[i].fontSizeVitB5.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitB5 += "<span class = food" + array[i].fontSizeVitB5.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminB5Foods").innerHTML = listStringVitB5;
}
createFontSizeListVitB5(myFood.foods);

const displayVitaminB5 = () => {
  let element = document.getElementById("vitaminB5Foods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("vitaminB5Header").addEventListener("click", displayVitaminB5);

const createFontSizeListVitB6 = (array) => {
  let listStringVitB6 = "";
  if (userName) {
    listStringVitB6 += `<p class = \"showAverage\">Your vitamin B6 was ${vitaminB6.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitB6 = (food.vitaminB6 / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitB6 += "<span class = food" + array[i].fontSizeVitB6.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitB6 += "<span class = food" + array[i].fontSizeVitB6.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminB6Foods").innerHTML = listStringVitB6;
}
createFontSizeListVitB6(myFood.foods);

const displayVitaminB6 = () => {
  let element = document.getElementById("vitaminB6Foods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("vitaminB6Header").addEventListener("click", displayVitaminB6);

const createFontSizeListVitB12 = (array) => {
  let listStringVitB12 = "";
  if (userName) {
    listStringVitB12 += `<p class = \"showAverage\">Your vitamin B12 was ${vitaminB12.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitB12 = (food.vitaminB12 / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitB12 += "<span class = food" + array[i].fontSizeVitB12.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitB12 += "<span class = food" + array[i].fontSizeVitB12.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminB12Foods").innerHTML = listStringVitB12;
}
createFontSizeListVitB12(myFood.foods);

const displayVitaminB12 = () => {
  let element = document.getElementById("vitaminB12Foods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("vitaminB12Header").addEventListener("click", displayVitaminB12);

const createFontSizeListCholine = (array) => {
  let listStringCholine = "";
  if (userName) {
    listStringCholine += `<p class = \"showAverage\">Your choline was ${choline.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeCholine = (food.choline / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringCholine += "<span class = food" + array[i].fontSizeCholine.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringCholine += "<span class = food" + array[i].fontSizeCholine.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("cholineFoods").innerHTML = listStringCholine;
}
createFontSizeListCholine(myFood.foods);

const displayCholine = () => {
  let element = document.getElementById("cholineFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("cholineHeader").addEventListener("click", displayCholine);

const createFontSizeListFolate = (array) => {
  let listStringFolate = "";
  if (userName) {
    listStringFolate += `<p class = \"showAverage\">Your folate was ${folate.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeFolate = (food.folate / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringFolate += "<span class = food" + array[i].fontSizeFolate.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringFolate += "<span class = food" + array[i].fontSizeFolate.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("folateFoods").innerHTML = listStringFolate;
}
createFontSizeListFolate(myFood.foods);

const displayFolate = () => {
  let element = document.getElementById("folateFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("folateHeader").addEventListener("click", displayFolate);

const createFontSizeListVitC = (array) => {
  let listStringVitC = "";
  if (userName) {
    listStringVitC += `<p class = \"showAverage\">Your vitamin C was ${vitaminC.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitC = (food.vitaminC / food.energy * 7.5) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitC += "<span class = food" + array[i].fontSizeVitC.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitC += "<span class = food" + array[i].fontSizeVitC.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminCFoods").innerHTML = listStringVitC;
}
createFontSizeListVitC(myFood.foods);

const displayVitaminC = () => {
  let element = document.getElementById("vitaminCFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("vitaminCHeader").addEventListener("click", displayVitaminC);

const createFontSizeListVitD = (array) => {
  let listStringVitD = "";
  if (userName) {
    listStringVitD += `<p class = \"showAverage\">Your vitamin D was ${vitaminD.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitD = (food.vitaminD / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitD += "<span class = food" + array[i].fontSizeVitD.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitD += "<span class = food" + array[i].fontSizeVitD.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminDFoods").innerHTML = listStringVitD;
}
createFontSizeListVitD(myFood.foods);

const displayVitaminD = () => {
  let element = document.getElementById("vitaminDFoods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("vitaminDHeader").addEventListener("click", displayVitaminD);

const createFontSizeListVitE = (array) => {
  let listStringVitE = "";
  if (userName) {
    listStringVitE += `<p class = \"showAverage\">Your vitamin E was ${vitaminE.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitE = (food.vitaminE / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitE += "<span class = food" + array[i].fontSizeVitE.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitE += "<span class = food" + array[i].fontSizeVitE.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminEFoods").innerHTML = listStringVitE;
}
createFontSizeListVitE(myFood.foods);

const displayVitaminE = () => {
  let element = document.getElementById("vitaminEFoods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("vitaminEHeader").addEventListener("click", displayVitaminE);

const createFontSizeListVitK = (array) => {
  let listStringVitK = "";
  if (userName) {
    listStringVitK += `<p class = \"showAverage\">Your vitamin K was ${vitaminK.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeVitK = (food.vitaminK / food.energy * 3) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringVitK += "<span class = food" + array[i].fontSizeVitK.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringVitK += "<span class = food" + array[i].fontSizeVitK.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("vitaminKFoods").innerHTML = listStringVitK;
}
createFontSizeListVitK(myFood.foods);

const displayVitaminK = () => {
  let element = document.getElementById("vitaminKFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("vitaminKHeader").addEventListener("click", displayVitaminK);

const createFontSizeListCalcium = (array) => {
  let listStringCalcium = "";
  if (userName) {
    listStringCalcium += `<p class = \"showAverage\">Your calcium was ${calcium.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeCalcium = (food.calcium / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringCalcium += "<span class = food" + array[i].fontSizeCalcium.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringCalcium += "<span class = food" + array[i].fontSizeCalcium.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("calciumFoods").innerHTML = listStringCalcium;
}
createFontSizeListCalcium(myFood.foods);

const displayCalcium = () => {
  let element = document.getElementById("calciumFoods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("calciumHeader").addEventListener("click", displayCalcium);

const createFontSizeListCopper = (array) => {
  let listStringCopper = "";
  if (userName) {
    listStringCopper += `<p class = \"showAverage\">Your copper was ${copper.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeCopper = (food.copper / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringCopper += "<span class = food" + array[i].fontSizeCopper.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringCopper += "<span class = food" + array[i].fontSizeCopper.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("copperFoods").innerHTML = listStringCopper;

  const displayCopper = () => {
    let element = document.getElementById("copperFoods");
    if (element.style.display === "block") {
      element.style.display = "none";
    } else {
      element.style.display = "block";
    }
  }
  document.getElementById("copperHeader").addEventListener("click", displayCopper);
}
createFontSizeListCopper(myFood.foods);

const createFontSizeListIron = (array) => {
  let listStringIron = "";
  if (userName) {
    listStringIron += `<p class = \"showAverage\">Your iron was ${iron.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeIron = (food.iron / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringIron += "<span class = food" + array[i].fontSizeIron.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringIron += "<span class = food" + array[i].fontSizeIron.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("ironFoods").innerHTML = listStringIron;
}
createFontSizeListIron(myFood.foods);

const displayIron = () => {
  let element = document.getElementById("ironFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("ironHeader").addEventListener("click", displayIron);

const createFontSizeListMagnesium = (array) => {
  let listStringMagnesium = "";
  if (userName) {
    listStringMagnesium += `<p class = \"showAverage\">Your magnesium was ${magnesium.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeMagnesium = (food.magnesium / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringMagnesium += "<span class = food" + array[i].fontSizeMagnesium.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringMagnesium += "<span class = food" + array[i].fontSizeMagnesium.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("magnesiumFoods").innerHTML = listStringMagnesium;
}
createFontSizeListMagnesium(myFood.foods);

const displayMagnesium = () => {
  let element = document.getElementById("magnesiumFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("magnesiumHeader").addEventListener("click", displayMagnesium);

const createFontSizeListManganese = (array) => {
  let listStringManganese = "";
  if (userName) {
    listStringManganese += `<p class = \"showAverage\">Your manganese was ${manganese.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeManganese = (food.manganese / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringManganese += "<span class = food" + array[i].fontSizeManganese.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringManganese += "<span class = food" + array[i].fontSizeManganese.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("manganeseFoods").innerHTML = listStringManganese;
}
createFontSizeListManganese(myFood.foods);

const displayManganese = () => {
  let element = document.getElementById("manganeseFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("manganeseHeader").addEventListener("click", displayManganese);


const createFontSizeListPhosphorus = (array) => {
  let listStringPhosphorus = "";
  if (userName) {
    listStringPhosphorus += `<p class = \"showAverage\">Your phosphorus was ${phosphorus.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizePhosphorus = (food.phosphorus / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringPhosphorus += "<span class = food" + array[i].fontSizePhosphorus.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringPhosphorus += "<span class = food" + array[i].fontSizePhosphorus.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("phosphorusFoods").innerHTML = listStringPhosphorus;
}
createFontSizeListPhosphorus(myFood.foods);

const displayPhosphorus = () => {
  let element = document.getElementById("phosphorusFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("phosphorusHeader").addEventListener("click", displayPhosphorus);

const createFontSizeListPotassium = (array) => {
  let listStringPotassium = "";
  if (userName) {
    listStringPotassium += `<p class = \"showAverage\">Your potassium was ${potassium.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizePotassium = (food.potassium / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringPotassium += "<span class = food" + array[i].fontSizePotassium.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringPotassium += "<span class = food" + array[i].fontSizePotassium.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("potassiumFoods").innerHTML = listStringPotassium;
}
createFontSizeListPotassium(myFood.foods);

const displayPotassium = () => {
  let element = document.getElementById("potassiumFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("potassiumHeader").addEventListener("click", displayPotassium);

const createFontSizeListSelenium = (array) => {
  let listStringSelenium = "";
  if (userName) {
    listStringSelenium += `<p class = \"showAverage\">Your selenium was ${selenium.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeSelenium = (food.selenium / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringSelenium += "<span class = food" + array[i].fontSizeSelenium.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringSelenium += "<span class = food" + array[i].fontSizeSelenium.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("seleniumFoods").innerHTML = listStringSelenium;
}
createFontSizeListSelenium(myFood.foods);

const displaySelenium = () => {
  let element = document.getElementById("seleniumFoods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("seleniumHeader").addEventListener("click", displaySelenium);

const createFontSizeListSodium = (array) => {
  let listStringSodium = "";
  if (userName) {
    listStringSodium += `<p class = \"showAverage\">Your sodium was ${sodium.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeSodium = (food.sodium / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1 && array[i] !== sodium) {
      listStringSodium += "<span class = food" + array[i].fontSizeSodium.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1 && array[i] !== sodium) {
      listStringSodium += "<span class = food" + array[i].fontSizeSodium.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("sodiumFoods").innerHTML = listStringSodium;
}
createFontSizeListSodium(myFood.foods);

const displaySodium = () => {
  let element = document.getElementById("sodiumFoods");
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
document.getElementById("sodiumHeader").addEventListener("click", displaySodium);

const createFontSizeListZinc = (array) => {
  let listStringZinc = "";
  if (userName) {
    listStringZinc += `<p class = \"showAverage\">Your zinc was ${zinc.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.fontSizeZinc = (food.zinc / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringZinc += "<span class = food" + array[i].fontSizeZinc.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringZinc += "<span class = food" + array[i].fontSizeZinc.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("zincFoods").innerHTML = listStringZinc;
}
createFontSizeListZinc(myFood.foods);

const displayZinc = () => {
  let element = document.getElementById("zincFoods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("zincHeader").addEventListener("click", displayZinc);

const createFontSizeListOmega3 = (array) => {
  let listStringOmega3 = "";
  if (userName) {
    listStringOmega3 += `<p class = \"showAverage\">Your omega 3 was ${omega3.average.toFixed(0)}% of RDI. This chart is scaled to reflect a goal of 300% RDI.</p>`
  }
  array.forEach(food => {
    food.omega3 = food.omega3 / 1.1 * 100 / 3.33; // need 300%
    food.fontSizeOmega3 = (food.omega3 / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringOmega3 += "<span class = food" + array[i].fontSizeOmega3.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringOmega3 += "<span class = food" + array[i].fontSizeOmega3.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("omega3Foods").innerHTML = listStringOmega3;
}
createFontSizeListOmega3(myFood.foods);

const displayOmega3 = () => {
  let element = document.getElementById("omega3Foods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("omega3Header").addEventListener("click", displayOmega3);

const createFontSizeListOmega6 = (array) => {
  let listStringOmega6 = "";
  if (userName) {
    listStringOmega6 += `<p class = \"showAverage\">Your omega 6 was ${omega6.average.toFixed(0)}% of RDI.</p>`
  }
  array.forEach(food => {
    food.omega6 = food.omega6 / 11 * 100;
    food.fontSizeOmega6 = (food.omega6 / food.energy * 30) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringOmega6 += "<span class = food" + array[i].fontSizeOmega6.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringOmega6 += "<span class = food" + array[i].fontSizeOmega6.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("omega6Foods").innerHTML = listStringOmega6;
}
createFontSizeListOmega6(myFood.foods);

const displayOmega6 = () => {
  let element = document.getElementById("omega6Foods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("omega6Header").addEventListener("click", displayOmega6);

const createFontSizeListMonosatFat = (array) => {
  let listStringMonosatFat = "";
  if (userName) {
    listStringMonosatFat += `<p class = \"showAverage\">Your monosaturated fat was ${monosatFat.average.toFixed(0)}g.</p>`
  }
  array.forEach(food => {
    food.fontSizeMonosatFat = (food.monosatFat / food.energy * 300) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringMonosatFat += "<span class = food" + array[i].fontSizeMonosatFat.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringMonosatFat += "<span class = food" + array[i].fontSizeMonosatFat.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("monosatFatFoods").innerHTML = listStringMonosatFat
}
createFontSizeListMonosatFat(myFood.foods);

const displayMonosatFat = () => {
  let element = document.getElementById("monosatFatFoods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("monosatFatHeader").addEventListener("click", displayMonosatFat);

const createFontSizeListPolyunsatFat = (array) => {
  let listStringPolyunsatFat = "";
  if (userName) {
    listStringPolyunsatFat += `<p class = \"showAverage\">Your polyunsaturated fat was ${polyunsatFat.average.toFixed(0)}g.</p>`
  }
  array.forEach(food => {
    food.fontSizePolyunsatFat = (food.polyunsatFat / food.energy * 300) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringPolyunsatFat += "<span class = food" + array[i].fontSizePolyunsatFat.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringPolyunsatFat += "<span class = food" + array[i].fontSizePolyunsatFat.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("polyunsatFatFoods").innerHTML = listStringPolyunsatFat
}
createFontSizeListPolyunsatFat(myFood.foods);

const displayPolyunsatFat = () => {
  let element = document.getElementById("polyunsatFatFoods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("polyunsatFatHeader").addEventListener("click", displayPolyunsatFat);

const createFontSizeListSatFat = (array) => {
  let listStringSatFat = "";
  if (userName) {
    listStringSatFat += `<p class = \"showAverage\">Your saturated fat was ${satFat.average.toFixed(0)}g.</p>`
  }
  array.forEach(food => {
    food.fontSizeSatFat = (food.satFat / food.energy * 300) + 6;
  }) // end for Each
  for (i = 0; i < array.length; i++) {
    if (i < array.length - 1) {
      listStringSatFat += "<span class = food" + array[i].fontSizeSatFat.toFixed(0) + ">" + array[i].name + ", " + "</span>";
    } else if (i === array.length - 1) {
      listStringSatFat += "<span class = food" + array[i].fontSizeSatFat.toFixed(0) + ">" + array[i].name + "</span>";
    }
  }
  document.getElementById("satFatFoods").innerHTML = listStringSatFat
}
createFontSizeListSatFat(myFood.foods);

const displaySatFat = () => {
  let element = document.getElementById("satFatFoods");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
document.getElementById("satFatHeader").addEventListener("click", displaySatFat);