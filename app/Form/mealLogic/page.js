// mealPlanGenerator.js
"use client"
const calculateBMR = (gender, age, weight, height) => {
    let bmr;
    if (gender === 'male') {
      bmr = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else if (gender === 'female') {
      bmr = 447.593 + 9.247 * weight + 3.098 * height - 4.330 * age;
    }
    return bmr;
  };
  
  const mealLogic = async (gender, age, weight, height, activityLevel, numOfMeals, dietPreference, healthSpec) => {
    const bmr = calculateBMR(gender, age, weight, height);
    const calories = Math.round(bmr * activityLevel);
    const totalMeals = numOfMeals * 7; // Fetch enough meals for a week
  
    const APP_ID = "d274a2ad";
    const APP_KEY = "c2131569c6f44750cca1ba268df3de02";
  
    const url = `https://api.edamam.com/search?q=${dietPreference}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=${totalMeals}&calories=${calories}&health=${healthSpec}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.hits; // Assuming Edamam returns an array of hits, where each hit is a recipe
    } catch (error) {
      console.error('Error fetching meal plan:', error);
      return [];
    }
  };
  
  export { mealLogic };
  