"use client"

import React, { useEffect, useState } from 'react'
import { mealLogic } from '../mealLogic/page'

const mealPlan = ({ gender, age, weight, height, activityLevel, numOfMeals, dietPreference, healthSpec }) => {
    const [mealPlan, setMealPlan] = useState([]);

    useEffect(() => {
      const fetchMealPlan = async () => {
        const result = await generateMealPlan(gender, age, weight, height, activityLevel, numOfMeals, dietPreference, healthSpec);
        setMealPlan(result);
      };
  
      fetchMealPlan();
    }, [gender, age, weight, height, activityLevel, numOfMeals, dietPreference, healthSpec]);

  return (
    <div>
      <h2>Generated Meal Plan</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            {Array.from({ length: numOfMeals }, (_, i) => (
              <th key={i + 1}>Meal {i + 1}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {mealPlan.map((recipe, index) => (
            <tr key={index}>
              <td>{recipe.day}</td>
              {recipe.meals.map((meal, mealIndex) => (
                <td key={mealIndex}>
                  <div>
                    <img src={meal.image} alt={meal.label} style={{ width: '100px', height: '100px' }} />
                    <p>{meal.label}</p>
                    <ul>
                      {meal.ingredients.map((ingredient, ingredientIndex) => (
                        <li key={ingredientIndex}>{ingredient.text}</li>
                      ))}
                    </ul>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default mealPlan
