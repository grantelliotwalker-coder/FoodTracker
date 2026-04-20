// food-library.js
// Edit this file to add, remove, or update foods.
// Fields: name, cal (calories), kj (kilojoules), p (protein g), f (fat g), c (carbs g), price ($)

const DEFAULT_LIBRARY = [
  { name: "Instant Coffee with Milk", cal: 77.78, kj: 325, p: 4.21, f: 4.25, c: 6, price: 0.20 },
  { name: "Avocado whole", cal: 330, kj: 1379, p: 3.2, f: 34.2, c: 0.8, price: 2.00 },
  { name: "Tuna Can Large Chilli", cal: 192.15, kj: 804, p: 33.6, f: 6, c: 0, price: 2.90 },
  { name: "Protein Shake", cal: 124.28, kj: 520, p: 23.4, f: 1.8, c: 3.2, price: 1.50 },
  { name: "Strawberries", cal: 5.74, kj: 24, p: 0.1, f: 0, c: 1.4, price: 0.50 },
  { name: "3 teaspoon Protein Peanut Butter", cal: 82.70, kj: 346, p: 3, f: 4, c: 1.9, price: 0.25 },
  { name: "Coffee", cal: 35.37, kj: 148, p: 1.4, f: 1.4, c: 2.9, price: 0.88 },
  { name: "Broccoli serving raw", cal: 33.94, kj: 142, p: 2.8, f: 0, c: 7, price: 0.40 },
  { name: "Broccolini serving", cal: 70.27, kj: 294, p: 6.6, f: 0, c: 12, price: 2.00 },
  { name: "Chicken stroganoff meal pre made", cal: 497.13, kj: 2080, p: 41.3, f: 18.9, c: 4.2, price: 9.00 },
  { name: "Roast Pork 100g", cal: 221.34, kj: 926, p: 31.2, f: 10, c: 0, price: 2.00 },
  { name: "Tomato", cal: 17.93, kj: 75, p: 1, f: 0, c: 4, price: 0.65 },
  { name: "Sardines with Tomato sauce", cal: 160.37, kj: 671, p: 15.2, f: 10.4, c: 1.1, price: 3.50 },
  { name: "Hommus", cal: 63.11, kj: 264, p: 1.4, f: 5, c: 3.3, price: 1.20 },
  { name: "Banana", cal: 88.67, kj: 371, p: 1.1, f: 0.3, c: 23, price: 0.81 },
  { name: "Apple", cal: 78.16, kj: 327, p: 0.9, f: 0.8, c: 17.6, price: 1.00 },
  { name: "Mushrooms 100g", cal: 20.55, kj: 86, p: 3.1, f: 0.3, c: 3.3, price: 2.00 },
  { name: "Zucchini 100g", cal: 16.97, kj: 71, p: 1.2, f: 0.3, c: 3.1, price: 0 },
  { name: "Weetbix (1)", cal: 58.33, kj: 244, p: 3.42, f: 0.4, c: 18.08, price: 0 },
  { name: "Chicken Breast 100g", cal: 164.91, kj: 690, p: 31, f: 3.6, c: 0, price: 1.20 },
  { name: "Carrot 100g", cal: 40.86, kj: 171, p: 0.9, f: 0.2, c: 10, price: 0 },
  { name: "Brown Rice", cal: 255.74, kj: 1070, p: 6.4, f: 4, c: 45.7, price: 0 },
  { name: "Boiled Egg", cal: 76.96, kj: 322, p: 6.3, f: 5.3, c: 0.6, price: 0.60 },
  { name: "Almonds (10)", cal: 69.31, kj: 290, p: 3, f: 5, c: 3, price: 0 },
  { name: "Cashew (10)", cal: 62.86, kj: 263, p: 2, f: 5, c: 7, price: 0 },
  { name: "Orange", cal: 68.12, kj: 285, p: 1.3, f: 0.2, c: 16.5, price: 0.63 },
  { name: "Tuna Beans Can", cal: 286.81, kj: 1200, p: 23.7, f: 12.8, c: 15.7, price: 4.00 },
  { name: "Honey (tspn)", cal: 21.03, kj: 88, p: 0, f: 0, c: 6, price: 0.10 },
  { name: "Dinner (Steak, Salad, Sweet Potato)", cal: 737.09, kj: 3084, p: 79.6, f: 30.3, c: 26, price: 9.30 },
  { name: "Brazil Nut", cal: 31.31, kj: 131, p: 0.7, f: 3.2, c: 0.3, price: 0.20 },
  { name: "Chickpea Can Small", cal: 157.50, kj: 659, p: 5.2, f: 9.2, c: 12.5, price: 1.50 },
  { name: "Cacao", cal: 23.33, kj: 97.6, p: 4, f: 2, c: 7, price: 0 }
];
