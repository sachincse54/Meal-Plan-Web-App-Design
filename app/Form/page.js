"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { mealLogic } from './mealLogic/page'
import Result from '../Result/page'

const Form = () => {

  const router = useRouter();

  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [gender, setGender] = useState('');
  const [activityLevel, setActivityLevel] = useState('');
  const [numOfMeals, setNumOfMeals] = useState('');
  const [dietPreference, setDietPreference] = useState('');
  const [healthSpec, setHealthSpec] = useState('');


  return (
    <>
    <div className='form container'>

      <div className='form_heading'>
        <h3>Generate Your Meal Plan</h3>
        <p>Just Entered Details & Get Your Meal Plan instant</p>
      </div>

      <form id="mealForm" className='form_meal'>

        <div className='form_input-div'>
          <div className='form_item'>
            <label for="age">Age<span>required</span></label>
            <input type="text" inputmode="numeric" value={age} onChange={(e) => setAge(e.target.value)} id="age" name="age" min="1" required />
          </div>

          <div className='form_item'>
            <label for="weight">Weight (in kg)<span>required</span></label>
            <input type="text" inputmode="numeric"  value={weight} onChange={(e) => setWeight(e.target.value)} id="weight" name="weight" min="1" required />
          </div>
          
          <div className='form_item'>
            <label for="height">Height (in cm)<span>required</span></label>
            <input type="text" inputmode="numeric"  value={height} onChange={(e) => setHeight(e.target.value)} id="height" name="height" min="1" required />
          </div>

          <div className='form_item'>
            <label for="gender">Gender<span>required</span></label>
            <select  value={gender} onChange={(e) => setGender(e.target.value)} id="gender" name="gender" required>
              <option value="" selected disabled>select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          
          <div className='form_item'>
            <label for="activityLevel">Activity Level<span>required</span></label>
            <select  value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)} id="activityLevel" name="activityLevel" required>
              <option value="" selected disabled>select Activity Level</option>
              <option value="1.2">Sedentary (little or no exercise)</option>
              <option value="1.375">Lightly active (light exercise/sports 1-3 days/week)</option>
              <option value="1.55">Moderately active (moderate exercise/sports 3-5 days/week)</option>
              <option value="1.725">Very active (hard exercise/sports 6-7 days a week)</option>
              <option value="1.9">Extra active (very hard exercise/sports & physical job or 2x training)</option>
            </select>
          </div>

          <div className='form_item'>
            <label for="numOfMeals">Number of Meals<span>required</span></label>
            <select value={numOfMeals} onChange={(e) => setNumOfMeals(e.target.value)} id="numOfMeals" name="numOfMeals" required>
              <option value="" selected disabled>select Number of Meals</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="5">Five</option>
            </select>
          </div>
          
          <div className='form_item'>
            <label for="dietPreference">Diet Preference<span>required</span></label>
            <select value={dietPreference} onChange={(e) => setDietPreference(e.target.value)} id="dietPreference" name="dietPreference" required>
              <option value="" selected disabled>select Diet Preference</option>
              <option value="balanced">Balanced</option>
              <option value="lowCarb">Low-Carb</option>
              <option value="lowFat">Low-Fat</option>
            </select>
          </div>
          
          <div className='form_item'>
            <label for="healthSpec">Health Specification<span>required</span></label>
            <select value={healthSpec}  onChange={(e) => setHealthSpec(e.target.value)}id="healthSpec" name="healthSpec" required>
              <option value="" selected disabled>select Health Specification</option>
              <option value="vegan">Vegan</option>
              <option value="vegetarian">Vegetarian</option>
              <option value="alcoholFree">Alcohol-Free</option>
              <option value="peanutFree">Peanut-Free</option>
            </select>
          </div>
        </div>

        <div className='form_btn'>
          <Link className='form_link' href='/Result'>Generate</Link>
        </div>
        

      </form>
    
    </div> 
    </>
  )
}

export default Form
